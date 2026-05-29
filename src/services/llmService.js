const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});

const generateLLMOutput = async () => {

    try {

        const prompt = `
        Generate a realistic software engineer candidate profile.

        Return ONLY valid JSON.

        Format:

        {
          "name": "candidate name",
          "skills": ["skill1", "skill2", "skill3"]
        }

        Rules:
        - Use different names every time
        - Use realistic tech skills
        - Use Indian candidate names
        - Return ONLY JSON
        `;

        const result = await model.generateContent(prompt);

        const response = await result.response;

        const text = response.text();

        // Remove markdown if Gemini adds it
        const cleanedText = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleanedText);

    } catch (error) {

        console.log("LLM Error:", error);

        return {
            error: "LLM generation failed"
        };

    }

};

module.exports = generateLLMOutput;