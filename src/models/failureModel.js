class FailureLog {

    constructor(error, data) {

        this.error = error;

        this.data = data;

        this.timestamp = new Date();

    }

}

module.exports = FailureLog;