const validationPrompt = (schema) => {

    return `
    Follow this JSON schema strictly:

    ${JSON.stringify(schema, null, 2)}

    Return only valid JSON.
    `;
};

module.exports = validationPrompt;