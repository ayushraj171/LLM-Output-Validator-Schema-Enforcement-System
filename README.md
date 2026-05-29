# LLM Output Validator

This project is built to solve a simple but real problem:  
LLM outputs are powerful, but they are often messy, inconsistent, and not directly usable in applications.

LLM Output Validator takes raw responses from language models and converts them into clean, structured, schema-compliant JSON that can be safely used in production systems.

---

## What this project does

When you send a response from an LLM, it usually looks fine at first glance, but in real applications it breaks things because:

- The format is not consistent  
- Extra text or markdown is present  
- Fields are missing or misaligned  
- It doesn’t match expected schema rules  

This system sits in between the LLM and your application and makes sure the output is usable.

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

## Project structure
