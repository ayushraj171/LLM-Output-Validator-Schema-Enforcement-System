const Ajv = require("ajv");

const ajv = new Ajv();

const validateOutput = (schema, data) => {

    const validate = ajv.compile(schema);

    const valid = validate(data);

    if (!valid) {

        return {

            success: false,

            errors: validate.errors

        };

    }

    return {

        success: true

    };

};

module.exports = validateOutput;