

module.exports = {

    async getPayload(event) {
       const {body} = event;
       return JSON.parse(body);
    },
}
