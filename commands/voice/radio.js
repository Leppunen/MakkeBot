const radio = require('../../radiostations');

/**
 * Command information.
 */
const info = {
    name: 'radio',
    desc: 'Plays given internet radio.',
};

/**
 * Plays given radio station in the voice channel.
 * !radio list -- List all available radio channels.
 *
 * @param {Discord.Client} client Bot client
 * @param {string[]} args Command args
 * @param {Discord.Message} message Message that contained the command.
 */
const execute = (client, args, message) => {
    // Get user voice channel
    const voiceChannel = message.member.voiceChannel;

    // If user is not on the voice channel.
    if (!voiceChannel) {
        message.reply('You need to join a voice channel first!');
        return;
    }

    // There was no radio name given as an argument.
    if (args.length < 1) {
        message.reply('Was expecting station name as an argument. Try `!radio list` to list all available stations.');
        return;
    }

    // There was 1 argument and it was 'list'
    if (args.length === 1 && (args[0] === 'list')) {
        let msg = 'I currently know these radio stations:\n';

        // Go through each object in stations array
        for (let i = 0; i < radio.stations.length; ++i) {
            // Add radio name to message.
            msg += radio.stations[i].name + '\n';
        }

        message.reply(msg);
        return;
    }

    // Join all args together separeted by spaces to get radio station name.
    const radioName = args.join(' ');

    // Try find radio by it's name from the stations array.
    const station = radio.stations.find((x) => x.name.toLowerCase() === radioName.toLowerCase());

    // Radio station doesn't exist on the stations list.
    if (!station) {
        message.reply(`Sorry, I didn't find radio station: '${radioName}'`);
        return;
    }

    // Join the voice channel
    voiceChannel.join().then((connection) => {
        message.reply('I have successfully connected to the voice channel!');
        // Play sound from url.
        const dispatcher = connection.playArbitraryInput(station.url);

        // When sound playing finished.
        dispatcher.on('end', (end) => {
            // Leave the channel.
            voiceChannel.leave();
        });

        // Failed to join voice channel, print error to the console.
    }).catch((err) => console.log(err));
};

module.exports = {info: info, execute: execute};
