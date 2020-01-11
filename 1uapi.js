// secret stuff etc credentials
const config = require('./config.js');

const axios = require('axios');

module.exports = async (url) => {
    if (!config._1uApiKey) {
        return null;
    }
    try {
        const {data} = await axios(`https://1u.fi/api/?key=${config._1uApiKey}&url=${url}`);
        if (!data.error) {
            return data.short;
        } else {
            throw new Error(data.msg);
        }
    } catch (err) {
        throw new Error(err);
    }
};
