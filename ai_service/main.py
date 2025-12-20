from fastapi import FastAPI
from pydantic import BaseModel
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

app = FastAPI()

# Modelo de datos para la solicitud desde Node.js
class AplicationData(BaseModel):
    cv_text: str #Habilidades y experiencia del postulante
    job_description: str #Descripción y requisitos de la oferta

def generate_feedback(cv_text: str, job_description: str):
    """
    Genera retroalimentación simple identificando palabras clave faltantes.
    (Lógica básica para cumplir el objetivo de feedback automático)
    """
    #Tokenización simple
    cv_tokens = set(cv_text.lower().split())
    job_tokens = set(job_description.lower().split())

    #Identificar palabras que están en la oferta pero NO en el CV
    #Filtramos palabras muy comunes (stopwords) de forma rudimentaria para el ejemplo
    missing_keywords = [word for word in job_tokens if word not in cv_tokens and len(word) > 4]

    #Tomaremos las 5 mas relevantes
    top_missing = list(missing_keywords)[:5]

    if not top_missing:
        return "Tú perfil parece alinearse bien con la oferta. ¡Buen trabajo!"
    
    return f"Te sugerimos resaltar experiencia en: {', '.join(top_missing)}."

@app.post("/analyze")
def analyze_application(data: AplicationData):
    #1.- Creamos el corpus de documentos a analziar
    documents = [data.cv_text, data.job_description]

    #2.- Vectorizamos los textos usando TF-IDF
    tfidf = TfidfVectorizer(stop_words='english') #english funciona bien para código, para español se puede configura
    tfidf_matrix = tfidf.fit_transform(documents)

    #3.- Calcular Similitud del Coseno
    #Resultado es una matriz [[1, 0.45], [0.45, 1]]
    similarity_matrix = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])
    match_score = float(similarity_matrix[0][0]) * 100 #Convertir a porcentaje (0-100)

    #4.- Gereramos el feedback
    feedback = generate_feedback(data.cv_text, data.job_description)

    return {
        "match_score": round(match_score, 2),
        "feedback": feedback,
        "status": "Success"
    }

@app.get("/")
def read_root():
    return {"message": "AI Service is running. Use the /analyze endpoint to evaluate applications."}

#Para ejecutarlo: uvicorn main:app --reload --port 8000

