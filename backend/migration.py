import firebase_admin
from firebase_admin import credentials, firestore

# 1. Initialize Firebase
# Make sure serviceAccountKey.json is in the same folder as this script
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# 2. Corrected Projects Data
projects_data = [
    {
        "title": "TravelersBay",
        "subtitle": "Full Stack Web App",
        "description": [
            "Secure travel listing platform for users to explore, post, and manage property listings.",
            "Built with Node.js, Express, MongoDB, and EJS.",
            "Implemented authentication, protected routes, and server-side validation for data integrity."
        ],
        "skills": ["Node.js", "Express", "MongoDB", "EJS", "REST APIs"],
        "githubUrl": "https://github.com/TANMAY-G-PROG/Major-Project1",
        "demoUrl": "https://major-project-7dyy.onrender.com/listings"
    },
    {
        "title": "Event Volunteering & Management Platform (E-PASS)",
        "subtitle": "Full Stack Web App",
        "description": [
            "A web platform for event management and volunteer coordination.",
            "Features a React frontend, a Node.js/Express backend, and a PostgreSQL database.",
            "Includes admin controls to manage events, monitor registrations, and oversee volunteers."
        ],
        "skills": ["JavaScript", "Node.js", "Express", "PostgreSQL", "HTML/CSS"],
        "githubUrl": "https://github.com/TANMAY-G-PROG/EPASS",
        "demoUrl": "https://flo-kuhn.onrender.com"
    },
    {
        "title": "FlowBoard",
        "subtitle": "Academic Task Manager",
        "description": [
            "A task management web app designed specifically for students and academics.",
            "Features include course-based task organization, deadline tracking, and progress visualization.",
            "Built with React for a fast, responsive UI and uses Firebase for real-time data synchronization."
        ],
        "skills": ["React", "PostgreSQL", "WebSockets", "Tailwind CSS", "State Management"],
        "githubUrl": "https://github.com/TANMAY-G-PROG/TASK-PROJECT",
        "demoUrl": "https://flow-board-tawny.vercel.app/"
    }
]

# 3. Corrected Skills Data (including AI/ML)
skills_data = [
    {
        "category": "Languages & Frameworks",
        "skills": [
            {"name": "C", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},
            {"name": "C++", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
            {"name": "Java", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
            {"name": "Python", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
            {"name": "JavaScript", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
            {"name": "React", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
            {"name": "NodeJS", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
            {"name": "Express", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
            {"name": "TailwindCSS", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
            {"name": "StreamLit", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg"}
        ]
    },
    {
        "category": "AI / ML",
        "skills": [
            {"name": "Scikit-learn", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"},
            {"name": "TensorFlow", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"},
            {"name": "NumPy", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"},
            {"name": "Pandas", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"},
            {"name": "Matplotlib", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"},
            {"name": "PyTorch", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"}
        ]
    },
    {
        "category": "Databases",
        "skills": [
            {"name": "PostgreSQL", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
            {"name": "MySQL", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
            {"name": "MongoDB", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}
        ]
    },
    {
        "category": "Tools & Design",
        "skills": [
            {"name": "Git", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
            {"name": "GitHub", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
            {"name": "Postman", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"},
            {"name": "Figma", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
            {"name": "Google Colab", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"}
        ]
    }
]

# 4. Corrected Experience Data
experience_data = [
    {
        "role": "Generative AI Intern",
        "company": "HiDevs",
        "period": "Feb 2025 - March 2025",
        "description": "As a GenAI Intern, I developed and refined prompts for Large Language Models (LLMs), assisted in fine-tuning models for specific tasks, and integrated generative AI APIs into proof-of-concept applications to explore innovative use-cases."
    }
]

def run_migration():
    print("--- Starting Migration ---")
    
    # Upload Projects
    for project in projects_data:
        db.collection("projects").add(project)
        print(f"Uploaded Project: {project['title']}")

    # Upload Skills
    for category in skills_data:
        db.collection("skills").add(category)
        print(f"Uploaded Skill Category: {category['category']}")

    # Upload Experience
    for exp in experience_data:
        db.collection("experience").add(exp)
        print(f"Uploaded Experience: {exp['role']} at {exp['company']}")

    print("--- Migration Finished Successfully ---")

if __name__ == "__main__":
    run_migration()