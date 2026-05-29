# LLM Output Validator

This project is built to solve a simple but real problem:  
LLM outputs are powerful, but they are often messy, inconsistent, and not directly usable in applications.

LLM Output Validator takes raw responses from language models and converts them into clean, structured, schema-compliant JSON that can be safely used in production systems.

---

## 📸 Screenshots

<img width="1919" height="1063" alt="Screenshot 2026-05-29 103544" src="https://github.com/user-attachments/assets/b2c846af-bce3-486d-87a3-2a4e66fc0cb0" />

<img width="1919" height="1079" alt="Screenshot 2026-05-29 103534" src="https://github.com/user-attachments/assets/6f6e7296-7c91-4022-b2c2-3017507380ac" />

---

## What this project does

When you send a response from an LLM, it usually looks fine at first glance, but in real applications it breaks things because:

- The format is not consistent  
- Extra text or markdown is present  
- Fields are missing or misaligned  
- It doesn’t match expected schema rules  

This system sits in between the LLM and your application and ensures the output is safe and usable.

---

## Core idea

The pipeline is simple:

LLM Output → Cleaning → Validation → Retry (if needed) → Structured JSON

Each step is independent, so it can be extended or replaced easily.

---

## Main components

The backend is organized in a modular way so each responsibility is separated:

- **Routes** handle incoming API requests and responses  
- **Cleaner** removes unwanted formatting like markdown or noisy text  
- **Validator** checks whether the output matches a defined schema  
- **Retry system** attempts to fix invalid outputs automatically  
- **Schemas** define what valid output should look like  
- **Metrics** track how often validation succeeds or fails  
- **Utils** provide logging, parsing, and helper functions  

---

## 📁 Project Structure

```
LLM-Output-Validator/
│
├── backend/
│   ├── routes/
│   ├── services/
│   │   ├── cleaner.py
│   │   ├── validator.py
│   │   ├── retry.py
│   │   └── llm_handler.py
│   ├── schemas/
│   ├── utils/
│   └── main.py
│
├── frontend/
│
├── tests/
│
├── .env
├── requirements.txt
└── README.md
```

---

## ⚙️ Setup (Important)

If the API is not working on your system, follow these steps carefully:

Set the request method to **POST** and use this URL:
http://localhost:3000/schema/register

Go to **Body → raw → JSON** and paste this payload:

{
  "name": "resume",
  "schema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 3,
        "pattern": "^[A-Za-z ]+$"
      },
      "skills": {
        "type": "array",
        "minItems": 1
      }
    },
    "required": ["name", "skills"]
  }
}

Click **Send**.


