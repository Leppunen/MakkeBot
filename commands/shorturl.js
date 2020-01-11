const _1uApi = require('../util/1uapi');

/**
 * Command information.
 */
const info = {
    name: 'short',
    desc: 'Shortens given url.',
};

/**
 * Sends given url as shortened to the user.
 *
 * @param {Discord.Client} client Bot client
 * @param {string[]} args Command args
 * @param {Discord.Message} message Message that contained the command.
 */
const execute = async (client, args, message) => {
    // If there is less than 1 argument given.
    if (args.length < 1) {
        message.reply('Error: Give url to shorten!');
        return;
    }

    try {
        message.reply(await _1uApi(args[0]));
    } catch (error) {
        console.error(error);
        message.reply('Error occurred while shortening the URL');
    }
};

module.exports = {info: info, execute: execute};
