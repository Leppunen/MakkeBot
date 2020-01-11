// secret stuff etc credentials
const credentials = require('./config.js');

const axios = require('axios');

module.exports = async (url) => {
    if (!credentials._1uApiKey) {
        return null;
    }
    try {
        const {data} = await axios(`https://1u.fi/api/?key=${credentials._1uApiKey}&url=${url}`);
        if (!data.error) {
            return data.short;
        } else {
            throw new Error(data.msg);
        }
    } catch (err) {
        throw new Error(err);
    }
};
