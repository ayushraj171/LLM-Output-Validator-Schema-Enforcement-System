import streamlit as st
import requests

st.title("LLM Output Validator")

st.subheader("Candidate Validation")

name = st.text_input("Candidate Name")

skills = st.text_input("Skills (comma separated)")

if st.button("Validate"):

    payload = {

        "schemaName": "resume",

        "data": {

            "name": name,

            "skills": skills.split(",")

        }

    }

    response = requests.post(
        "http://localhost:3000/validate",
        json=payload
    )

    st.json(response.json())

if st.button("Generate AI Output"):

    response = requests.post(
        "http://localhost:3000/llm/generate",
        json={
            "schemaName": "resume"
        }
    )

    st.json(response.json())