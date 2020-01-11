const axios = require('axios');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const url = require('../config.js').giturl;

module.exports = async () => {
    const localVer = (require('./package.json')).version;
    try {
        const {data: {version: remoteVer}} = (await axios(url));
        if (remoteVer === localVer) {
            console.log('Up to Date');
        } else {
            console.log('Update detected. Pulling new version.');
            await exec('git pull');
            await exec('npm i');
            process.exit(0);
        }
    } catch (err) {
        throw new Error(err);
    }
};
