

module.exports = {

    async errorValidation(error , callback) {
        const messagesError = [];
        error.details.forEach((value) => {
            messagesError.push(value.message);
        });
       console.error(error)
        const result = JSON.stringify({ payload: {
                message: "Error de validación",
                details : messagesError
            } });

        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'application/json' },
            body: result
        });
    },

    async success(data , callback) {

        const result = JSON.stringify({ payload: {
                data
            } });

        callback(null, {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: result
        });
    },
}
