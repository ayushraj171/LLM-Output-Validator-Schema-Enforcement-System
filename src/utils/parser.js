const parseJSON = (text) => {

    try {

        // Remove markdown json formatting

        const cleanedText = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return {

            success: true,

            data: JSON.parse(cleanedText)

        };

    } catch (error) {

        return {

            success: false,

            error: "Invalid JSON format"

        };

    }

};

module.exports = parseJSON;