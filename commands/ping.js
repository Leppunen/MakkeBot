/**
 * Command information.
 */
const info = {
    name: 'ping',
    desc: 'Used to check if bot is alive',
};

/**
 * Sends pong back to user.
 *
 * @param {Discord.Client} client Bot client
 * @param {string[]} args Command args
 * @param {Discord.Message} message Message that contained the command.
 */
const execute = (client, args, message) => {
    // Get MakkeBot emote
    const botEmote = client.emojis.find((emoji) => emoji.name === 'MakkeBot');
    // Reply to user.
    message.reply(`Pong! ${botEmote !== null ? botEmote : ''}`);
};

module.exports = {info: info, execute: execute};
