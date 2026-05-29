const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/schema", require("./routes/schemaRoutes"));

app.use("/validate", require("./routes/validateRoutes"));

app.use("/llm", require("./routes/llmRoutes"));

app.use("/failures", require("./routes/failureRoutes"));

// Home Route
app.get("/", (req, res) => {

    res.json({
        message: "LLM Output Validator API Running"
    });

});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});