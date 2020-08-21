'use strict';

const axios = require('axios');

module.exports = {


    async get(url){
        return   await axios.get(url );
    },
}

