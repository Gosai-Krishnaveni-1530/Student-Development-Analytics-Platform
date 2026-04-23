from fastapi import FastAPI
from pydantic import BaseModel
from sentiment import analyze

app = FastAPI()

# ✅ Define request body structure
class TextInput(BaseModel):
    text: str

@app.post("/analyze")
def analyze_text(data: TextInput):
    return analyze(data.text)

@app.get("/")
def home():
    return {"message": "AI Service Running"}
