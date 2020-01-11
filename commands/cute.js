/**
 * Command information.
 */
const info = {
    name: 'cute',
    desc: 'Gives cuteness percentage',
};

/**
 * Gives user cuteness percentage.
 *
 * @param {Discord.Client} client Bot client
 * @param {string[]} args Command args
 * @param {Discord.Message} message Message that contained the command.
 */
const execute = (client, args, message) => {
    // Generate random number between 1-100
    const cutenessPercentage = Math.floor(Math.random() * 101);
    // Get weeb emote DansGame
    const weebEmote = client.emojis.find((emoji) => emoji.name === 'AYAYA');

    message.reply(`You're ${cutenessPercentage}% cute ${weebEmote !== null ? weebEmote : ''}`);
};

module.exports = {info: info, execute: execute};
