const retryLLM = async (fn, retries = 3) => {

    for (let i = 0; i < retries; i++) {

        try {

            return await fn();

        } catch (error) {

            console.log(`Retry ${i + 1} failed`);

        }

    }

    throw new Error("All retries failed");

};

module.exports = retryLLM;