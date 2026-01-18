// import React, { useState, useEffect } from 'react';

// const AdminDashboard = () => {
//     const [activeTab, setActiveTab] = useState('projects');
//     const [items, setItems] = useState([]);
//     const [editingItem, setEditingItem] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const password = localStorage.getItem("admin_token");

//     const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
    
//     const fetchItems = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch(`${API_URL}/api/${activeTab}`);
//             const data = await res.json();
//             setItems(Array.isArray(data) ? data : []);
//         } catch (error) {
//             console.error("Fetch error:", error);
//         }
//         setLoading(false);
//     };

//     useEffect(() => {
//         fetchItems();
//     }, [activeTab]);

//     const handleSave = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         let payload = Object.fromEntries(formData.entries());

//         if (payload.description && activeTab === 'projects') {
//             payload.description = payload.description.split('\n').filter(line => line.trim() !== "");
//         }
//         if (payload.skills && activeTab === 'projects') {
//             payload.skills = payload.skills.split(',').map(s => s.trim());
//         }

//         const method = editingItem?.id ? 'PUT' : 'POST';
//         const url = editingItem?.id 
//             ? `${API_URL}/api/${activeTab}/${editingItem.id}` 
//             : `${API_URL}/api/${activeTab}`;

//         try {
//             const res = await fetch(url, {
//                 method,
//                 headers: { 
//                     'Content-Type': 'application/json',
//                     'x-admin-password': password 
//                 },
//                 body: JSON.stringify(payload)
//             });
//             if (res.ok) {
//                 setEditingItem(null);
//                 fetchItems();
//             } else {
//                 alert("Save failed. Check console.");
//             }
//         } catch (error) {
//             console.error("Save error:", error);
//         }
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm("Delete permanently?")) return;
//         try {
//             await fetch(`${API_URL}/api/${activeTab}/${id}`, {
//                 method: 'DELETE',
//                 headers: { 'x-admin-password': password }
//             });
//             fetchItems();
//         } catch (error) {
//             console.error("Delete error:", error);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-[#0a0a0f] text-white p-8 font-sans">
//             <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                
//                 <aside className="w-full md:w-64 space-y-4">
//                     <h1 className="text-2xl font-bold text-indigo-500 mb-8">Admin Portal</h1>
//                     {['projects', 'experience', 'skills'].map(tab => (
//                         <button key={tab} onClick={() => { setActiveTab(tab); setEditingItem(null); }}
//                             className={`w-full text-left p-4 rounded-lg capitalize transition ${activeTab === tab ? 'bg-indigo-600' : 'hover:bg-gray-800'}`}>
//                             {tab}
//                         </button>
//                     ))}
//                     <div className="pt-10">
//                         <button onClick={() => { localStorage.removeItem("admin_token"); window.location.href = "/" }} 
//                             className="w-full text-left p-4 text-red-400 hover:bg-red-900/20 rounded-lg border border-red-900/30">
//                             Logout
//                         </button>
//                     </div>
//                 </aside>

//                 <main className="flex-1 space-y-6">
//                     <div className="flex justify-between items-center">
//                         <h2 className="text-3xl font-bold capitalize">{activeTab}</h2>
//                         {!editingItem && (
//                             <button onClick={() => setEditingItem({})} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition font-bold">
//                                 + Add New
//                             </button>
//                         )}
//                     </div>

//                     {editingItem ? (
                    
//                         <div className="bg-gray-900 p-8 rounded-2xl border border-indigo-500/30 shadow-xl">
//                             <h3 className="text-xl font-bold mb-6 text-indigo-400">
//                                 {editingItem.id ? 'Edit Entry' : 'Create New Entry'}
//                             </h3>
//                             <form onSubmit={handleSave} className="space-y-4">
//                                 {activeTab === 'projects' && (
//                                     <>
//                                         <input name="title" defaultValue={editingItem.title} placeholder="Project Title" className="w-full bg-black p-3 rounded border border-gray-700 focus:border-indigo-500 outline-none" required />
//                                         <input name="subtitle" defaultValue={editingItem.subtitle} placeholder="Subtitle" className="w-full bg-black p-3 rounded border border-gray-700" />
//                                         <textarea name="description" defaultValue={editingItem.description?.join('\n')} placeholder="Description (One point per line)" className="w-full bg-black p-3 rounded border border-gray-700 h-32" required />
//                                         <input name="skills" defaultValue={editingItem.skills?.join(', ')} placeholder="Skills (comma separated)" className="w-full bg-black p-3 rounded border border-gray-700" />
//                                         <input name="githubUrl" defaultValue={editingItem.githubUrl} placeholder="GitHub URL" className="w-full bg-black p-3 rounded border border-gray-700" />
//                                         <input name="demoUrl" defaultValue={editingItem.demoUrl} placeholder="Demo URL" className="w-full bg-black p-3 rounded border border-gray-700" />
//                                     </>
//                                 )}

//                                 {activeTab === 'experience' && (
//                                     <>
//                                         <input name="role" defaultValue={editingItem.role} placeholder="Role" className="w-full bg-black p-3 rounded border border-gray-700" required />
//                                         <input name="company" defaultValue={editingItem.company} placeholder="Company" className="w-full bg-black p-3 rounded border border-gray-700" required />
//                                         <input name="period" defaultValue={editingItem.period} placeholder="Period (e.g. Jan 2023 - Present)" className="w-full bg-black p-3 rounded border border-gray-700" />
//                                         <textarea name="description" defaultValue={editingItem.description} placeholder="Description" className="w-full bg-black p-3 rounded border border-gray-700 h-32" />
//                                     </>
//                                 )}

//                                 {activeTab === 'skills' && (
//                                     <>
//                                         <input name="category" defaultValue={editingItem.category} placeholder="Category Name" className="w-full bg-black p-3 rounded border border-gray-700" required />
//                                         <p className="text-sm text-gray-500 italic">*Skills management for icons is best handled via code or a nested JSON editor.</p>
//                                     </>
//                                 )}

//                                 <div className="flex gap-4 pt-4">
//                                     <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-bold transition">Save to Database</button>
//                                     <button type="button" onClick={() => setEditingItem(null)} className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg transition">Cancel</button>
//                                 </div>
//                             </form>
//                         </div>
//                     ) : (
                        
//                         <div className="grid gap-4">
//                             {loading ? <p className="text-indigo-400 animate-pulse">Loading data...</p> : items.map(item => (
//                                 <div key={item.id} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex justify-between items-center hover:border-indigo-500/50 transition group">
//                                     <div>
//                                         <h3 className="text-xl font-bold group-hover:text-indigo-400 transition">{item.title || item.role || item.category}</h3>
//                                         <p className="text-gray-500 text-xs font-mono mt-1">{item.id}</p>
//                                     </div>
//                                     <div className="flex gap-3">
//                                         <button onClick={() => setEditingItem(item)} className="px-4 py-2 bg-blue-600/10 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition text-sm">Edit</button>
//                                         <button onClick={() => handleDelete(item.id)} className="px-4 py-2 bg-red-600/10 text-red-400 rounded-lg hover:bg-red-600 hover:text-white transition text-sm">Delete</button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;

import React, { useState, useEffect, useCallback } from 'react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('projects');
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [loading, setLoading] = useState(false); // Added missing loading state
    const password = localStorage.getItem("admin_token");

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
    
    // Updated fetchItems to use the dynamic API_URL
    const fetchItems = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/${activeTab}`);
            const data = await res.json();
            setItems(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Fetch error:", error);
            setItems([]);
        } finally {
            setLoading(false);
        }
    }, [activeTab, API_URL]);

    // Added fetchItems to dependency array to satisfy ESLint
    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    const handleSave = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let payload = Object.fromEntries(formData.entries());

        // Process special fields (converting comma-separated strings back to arrays)
        if (payload.description && activeTab === 'projects') {
            payload.description = payload.description.split('\n').filter(line => line.trim() !== "");
        }
        if (payload.skills && activeTab === 'projects') {
            payload.skills = payload.skills.split(',').map(s => s.trim());
        }

        const method = editingItem?.id ? 'PUT' : 'POST';
        const url = editingItem?.id 
            ? `${API_URL}/api/${activeTab}/${editingItem.id}` 
            : `${API_URL}/api/${activeTab}`;

        try {
            const res = await fetch(url, {
                method,
                headers: { 
                    'Content-Type': 'application/json',
                    'x-admin-password': password 
                },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                setEditingItem(null);
                fetchItems();
            } else {
                alert("Save failed. Check console or backend logs.");
            }
        } catch (error) {
            console.error("Save error:", error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete permanently?")) return;
        try {
            const res = await fetch(`${API_URL}/api/${activeTab}/${id}`, {
                method: 'DELETE',
                headers: { 'x-admin-password': password }
            });
            if (res.ok) {
                fetchItems();
            }
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white p-8 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                
                {/* Sidebar */}
                <aside className="w-full md:w-64 space-y-4">
                    <h1 className="text-2xl font-bold text-indigo-500 mb-8">Admin Portal</h1>
                    {['projects', 'experience', 'skills'].map(tab => (
                        <button key={tab} onClick={() => { setActiveTab(tab); setEditingItem(null); }}
                            className={`w-full text-left p-4 rounded-lg capitalize transition ${activeTab === tab ? 'bg-indigo-600' : 'hover:bg-gray-800'}`}>
                            {tab}
                        </button>
                    ))}
                    <div className="pt-10">
                        <button onClick={() => { localStorage.removeItem("admin_token"); window.location.href = "/" }} 
                            className="w-full text-left p-4 text-red-400 hover:bg-red-900/20 rounded-lg border border-red-900/30">
                            Logout
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold capitalize">{activeTab}</h2>
                        {!editingItem && (
                            <button onClick={() => setEditingItem({})} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition font-bold">
                                + Add New
                            </button>
                        )}
                    </div>

                    {editingItem ? (
                        /* Dynamic Editor Form */
                        <div className="bg-gray-900 p-8 rounded-2xl border border-indigo-500/30 shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-indigo-400">
                                {editingItem.id ? 'Edit Entry' : 'Create New Entry'}
                            </h3>
                            <form onSubmit={handleSave} className="space-y-4">
                                {activeTab === 'projects' && (
                                    <>
                                        <input name="title" defaultValue={editingItem.title} placeholder="Project Title" className="w-full bg-black p-3 rounded border border-gray-700 focus:border-indigo-500 outline-none" required />
                                        <input name="subtitle" defaultValue={editingItem.subtitle} placeholder="Subtitle" className="w-full bg-black p-3 rounded border border-gray-700" />
                                        <textarea name="description" defaultValue={editingItem.description?.join('\n')} placeholder="Description (One point per line)" className="w-full bg-black p-3 rounded border border-gray-700 h-32" required />
                                        <input name="skills" defaultValue={editingItem.skills?.join(', ')} placeholder="Skills (comma separated)" className="w-full bg-black p-3 rounded border border-gray-700" />
                                        <input name="githubUrl" defaultValue={editingItem.githubUrl} placeholder="GitHub URL" className="w-full bg-black p-3 rounded border border-gray-700" />
                                        <input name="demoUrl" defaultValue={editingItem.demoUrl} placeholder="Demo URL" className="w-full bg-black p-3 rounded border border-gray-700" />
                                    </>
                                )}

                                {activeTab === 'experience' && (
                                    <>
                                        <input name="role" defaultValue={editingItem.role} placeholder="Role" className="w-full bg-black p-3 rounded border border-gray-700" required />
                                        <input name="company" defaultValue={editingItem.company} placeholder="Company" className="w-full bg-black p-3 rounded border border-gray-700" required />
                                        <input name="period" defaultValue={editingItem.period} placeholder="Period (e.g. Jan 2023 - Present)" className="w-full bg-black p-3 rounded border border-gray-700" />
                                        <textarea name="description" defaultValue={editingItem.description} placeholder="Description" className="w-full bg-black p-3 rounded border border-gray-700 h-32" />
                                    </>
                                )}

                                {activeTab === 'skills' && (
                                    <>
                                        <input name="category" defaultValue={editingItem.category} placeholder="Category Name" className="w-full bg-black p-3 rounded border border-gray-700" required />
                                        <p className="text-sm text-gray-500 italic">*Skills management for icons is best handled via code or a nested JSON editor.</p>
                                    </>
                                )}

                                <div className="flex gap-4 pt-4">
                                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-bold transition">Save to Database</button>
                                    <button type="button" onClick={() => setEditingItem(null)} className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg transition">Cancel</button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        /* List View */
                        <div className="grid gap-4">
                            {loading ? (
                                <div className="flex justify-center py-10">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
                                </div>
                            ) : items.length === 0 ? (
                                <p className="text-gray-500 italic">No items found in this section.</p>
                            ) : (
                                items.map(item => (
                                    <div key={item.id} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex justify-between items-center hover:border-indigo-500/50 transition group">
                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-indigo-400 transition">{item.title || item.role || item.category}</h3>
                                            <p className="text-gray-500 text-xs font-mono mt-1">{item.id}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button onClick={() => setEditingItem(item)} className="px-4 py-2 bg-blue-600/10 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition text-sm">Edit</button>
                                            <button onClick={() => handleDelete(item.id)} className="px-4 py-2 bg-red-600/10 text-red-400 rounded-lg hover:bg-red-600 hover:text-white transition text-sm">Delete</button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;