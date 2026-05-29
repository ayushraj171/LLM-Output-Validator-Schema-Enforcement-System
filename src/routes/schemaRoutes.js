const express = require("express");

const router = express.Router();

const schemas = require("../utils/schemaStore");

router.post("/register", (req, res) => {

    const { name, schema } = req.body;

    if (!name || !schema) {

        return res.status(400).json({
            error: "Schema name and schema are required"
        });

    }

    schemas[name] = schema;

    res.json({

        message: "Schema registered successfully",

        storedSchema: schemas[name]

    });

});

module.exports = router;