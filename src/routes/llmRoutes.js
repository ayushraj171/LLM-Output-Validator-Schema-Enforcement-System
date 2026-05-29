const express = require("express");

const router = express.Router();

const schemas = require("../utils/schemaStore");

const validateOutput = require("../services/validationService");

router.post("/generate", (req, res) => {

    const { schemaName } = req.body;

    const schema = schemas[schemaName];

    if (!schema) {

        return res.status(404).json({
            error: "Schema not found"
        });

    }

    // Simulated LLM Output
    const llmOutput = {

        name: "Ayush",

        skills: ["Python", "NodeJS"]

    };

    const validation = validateOutput(schema, llmOutput);

    if (!validation.success) {

        return res.status(400).json({

            success: false,

            validationErrors: validation.errors,

            output: llmOutput

        });

    }

    res.json({

        success: true,

        message: "LLM Output Valid",

        output: llmOutput

    });

});

module.exports = router;