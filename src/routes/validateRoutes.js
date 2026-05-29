const express = require("express");

const router = express.Router();

const schemas = require("../utils/schemaStore");

const validateOutput = require("../services/validationService");

router.post("/", (req, res) => {

    const { schemaName, data } = req.body;

    if (!schemaName || !data) {

        return res.status(400).json({
            error: "schemaName and data required"
        });

    }

    const schema = schemas[schemaName];

    if (!schema) {

        return res.status(404).json({
            error: "Schema not found"
        });

    }

    const result = validateOutput(schema, data);

    if (!result.success) {

        return res.status(400).json({

            success: false,

            validationErrors: result.errors

        });

    }

    res.json({

        success: true,

        message: "Validation passed"

    });

});

module.exports = router;