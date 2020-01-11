/**
 * Command information.
 */
const info = {
    name: 'manly',
    desc: 'Gives manly percentage',
};

/**
 * Gives user manliness percentage.
 *
 * @param {Discord.Client} client Bot client
 * @param {string[]} args Command args
 * @param {Discord.Message} message Message that contained the command.
 */
const execute = (client, args, message) => {
    // Generate random number between 1-100
    const manlyPercentage = Math.floor(Math.random() * 101);
    // Get gachiGASM emote
    const gachiEmote = client.emojis.find((emoji) => emoji.name === 'gachiGASM');

    message.reply(`You're ${manlyPercentage}% manly ${gachiEmote !== null ? gachiEmote : ''}`);
};

module.exports = {info: info, execute: execute};
