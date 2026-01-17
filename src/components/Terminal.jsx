import React, { useState, useEffect, useRef } from 'react';

const Terminal = ({ sections }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState(["Welcome Tanmay. Type 'help' for commands."]);
    const [isPromptingPassword, setIsPromptingPassword] = useState(false); // Added for Admin
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '`') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) inputRef.current.focus();
    }, [isOpen]);

    const executeCommand = async (cmd) => {
        const parts = cmd.trim().split(" ");
        const action = parts[0].toLowerCase();
        const target = parts[1];
        let response = "";

        // --- PASSWORD HANDLING LOGIC ---
        if (isPromptingPassword) {
            try {
                const res = await fetch("http://localhost:8000/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ password: cmd })
                });

                if (res.ok) {
                    localStorage.setItem("admin_token", cmd);
                    setHistory(prev => [...prev, "✔ Access Granted. Redirecting to Dashboard..."]);
                    setTimeout(() => {
                        window.location.href = "/admin"; // Navigate to Admin Page
                    }, 1000);
                } else {
                    setHistory(prev => [...prev, "✘ Invalid Password. Access Denied."]);
                }
            } catch (err) {
                console.error(err);
                setHistory(prev => [...prev, "Error connecting to backend."]);
            }
            setIsPromptingPassword(false);
            return;
        }

        // --- STANDARD COMMANDS ---
        switch (action) {
            case 'help':
                response = "Available: admin, goto [section], ls [projects/skills/experience], clear";
                break;
            case 'admin':
                setIsPromptingPassword(true);
                response = "Please enter the admin password:";
                break;
            case 'goto':
                if (sections[target]) {
                    sections[target].current.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                    return;
                } else {
                    response = `Section '${target}' not found. Try: about, skills, projects, experience.`;
                }
                break;
            case 'ls':
                try {
                    const res = await fetch(`http://localhost:8000/api/${target}`);
                    const data = await res.json();
                    response = data.map(item => `• ${item.title || item.role || item.category}`).join("\n");
                } catch (err) {
                    console.error(err);
                    response = "Failed to fetch data from backend.";
                }
                break;
            case 'clear':
                setHistory([]);
                return;
            default:
                response = `Unknown command: ${action}`;
        }
        setHistory(prev => [...prev, `> ${cmd}`, response]);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-[#0d1117] border border-indigo-500/50 rounded-lg shadow-2xl font-mono text-sm text-green-400 p-4 h-[400px] flex flex-col">
                <div className="flex-1 overflow-y-auto mb-2 whitespace-pre-wrap">
                    {history.map((line, i) => <div key={i} className="mb-1">{line}</div>)}
                </div>
                <div className="flex border-t border-gray-800 pt-2 items-center">
                    <span className="mr-2 text-indigo-400 font-bold">➜</span>
                    <input
                        ref={inputRef}
                        type={isPromptingPassword ? "password" : "text"} // Mask password
                        className="bg-transparent outline-none w-full text-green-400"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                executeCommand(input);
                                setInput("");
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;