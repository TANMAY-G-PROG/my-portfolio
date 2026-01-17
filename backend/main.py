import os
import json
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Header, Depends
from pydantic import BaseModel
from typing import List, Optional
import firebase_admin
from firebase_admin import credentials, firestore
from fastapi.middleware.cors import CORSMiddleware

if os.getenv("FIREBASE_CONFIG"):
    cred_dict = json.loads(os.getenv("FIREBASE_CONFIG"))
    cred = credentials.Certificate(cred_dict)
else:
    cred = credentials.Certificate("serviceAccountKey.json")
    
firebase_admin.initialize_app(cred)
db = firestore.client()

load_dotenv()

app = FastAPI(title="Tanmay Portfolio Backend")

origins = [
    "http://localhost:5173",    #
    "http://127.0.0.1:5173",
    "https://tanmaygshetty.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "tan1234#")

async def verify_admin(x_admin_password: str = Header(None)):
    """Security dependency to check for the admin password in request headers."""
    if x_admin_password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Unauthorized: Invalid Admin Password")
    return True

class ProjectItem(BaseModel):
    title: str
    subtitle: str
    description: List[str]
    skills: List[str]
    githubUrl: str
    demoUrl: Optional[str] = None

class ExperienceItem(BaseModel):
    role: str
    company: str
    period: str
    description: str

class SkillObject(BaseModel):
    name: str
    logo: str

class SkillCategory(BaseModel):
    category: str
    skills: List[SkillObject]

@app.post("/api/login")
async def login(data: dict):
    if data.get("password") == ADMIN_PASSWORD:
        return {"status": "success", "message": "Authenticated"}
    raise HTTPException(status_code=401, detail="Invalid Credentials")

@app.get("/api/projects")
async def get_projects():
    docs = db.collection("projects").stream()
    return [{**doc.to_dict(), "id": doc.id} for doc in docs]

@app.post("/api/projects")
async def add_project(project: ProjectItem, authorized: bool = Depends(verify_admin)):
    doc_ref = db.collection("projects").add(project.dict())
    return {"id": doc_ref[1].id, "status": "success"}

@app.put("/api/projects/{item_id}")
async def update_project(item_id: str, project: ProjectItem, authorized: bool = Depends(verify_admin)):
    db.collection("projects").document(item_id).set(project.dict())
    return {"status": "updated"}

@app.delete("/api/projects/{item_id}")
async def delete_project(item_id: str, authorized: bool = Depends(verify_admin)):
    db.collection("projects").document(item_id).delete()
    return {"status": "deleted"}


@app.get("/api/experience")
async def get_experience():
    docs = db.collection("experience").stream()
    return [{**doc.to_dict(), "id": doc.id} for doc in docs]

@app.post("/api/experience")
async def add_experience(exp: ExperienceItem, authorized: bool = Depends(verify_admin)):
    doc_ref = db.collection("experience").add(exp.dict())
    return {"id": doc_ref[1].id, "status": "success"}

@app.put("/api/experience/{item_id}")
async def update_experience(item_id: str, exp: ExperienceItem, authorized: bool = Depends(verify_admin)):
    db.collection("experience").document(item_id).set(exp.dict())
    return {"status": "updated"}

@app.delete("/api/experience/{item_id}")
async def delete_experience(item_id: str, authorized: bool = Depends(verify_admin)):
    db.collection("experience").document(item_id).delete()
    return {"status": "deleted"}


@app.get("/api/skills")
async def get_skills():
    docs = db.collection("skills").stream()
    return [{**doc.to_dict(), "id": doc.id} for doc in docs]

@app.post("/api/skills")
async def add_skill_category(category: SkillCategory, authorized: bool = Depends(verify_admin)):
    doc_ref = db.collection("skills").add(category.dict())
    return {"id": doc_ref[1].id, "status": "success"}

@app.put("/api/skills/{item_id}")
async def update_skill_category(item_id: str, category: SkillCategory, authorized: bool = Depends(verify_admin)):
    db.collection("skills").document(item_id).set(category.dict())
    return {"status": "updated"}

@app.delete("/api/skills/{item_id}")
async def delete_skill_category(item_id: str, authorized: bool = Depends(verify_admin)):
    db.collection("skills").document(item_id).delete()
    return {"status": "deleted"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)