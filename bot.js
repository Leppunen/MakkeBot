// secret stuff etc credentials
const config = require('./config.js');

// Get Discord module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// Get glob module.
const glob = require('glob');

// Get path module.
const path = require('path');

// Updater
const updater = require('./updater');

// Commands and aliases
const commands = new Map();
const aliases = new Map();

// Prefix
const prefix = '!';


// Load all commands and aliases if defined

async function loadCmd() {
    return new Promise((resolve, reject) => {
        commands.clear();
        aliases.clear();
        glob.sync('./commands/**/*.js').forEach((f) => {
            try {
                delete require.cache[`${path.resolve(f)}`];
                const cmd = require(`${path.resolve(f)}`);
                commands.set(cmd.info.name, cmd);
                if (cmd.info.aliases) {
                    cmd.info.aliases.forEach((alias) => {
                        aliases.set(alias, cmd.info.name);
                    });
                }
            } catch (e) {
                e.filename = f;
                console.error(`Failed to load command file ${f}, Error: ${e}`);
                return reject(e);
            }
        });
        console.log(`Loaded ${commands.size} commands!`);
        return resolve(true);
    });
}

// Initialize the bot
async function initialize() {
    try {
        await updater();
        await loadCmd();
        await client.login(config.discordToken);
    } catch (error) {
        console.error(`Error occurred while initializing the bot: ${error}`);
    }
}

initialize();

// When turned on and ready
client.on('ready', () => {
    console.log('I am ready to work!');

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:

    client.user.setActivity('Twitch', {type: 'WATCHING'});

    const pjson = require('./package.json');

    config.devChannels.forEach((id) => {
        const channel = client.channels.get(id);
        if (channel) channel.send(`I'm online! :) Current version: ${pjson.version}`);
    });
});

// Create an event listener for new guild members
client.on('guildMemberAdd', (member) => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find((ch) => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
});

// When receiving message
client.on('message', (message) => {
    // Only handle messages from guilds.
    if (!message.guild) return;

    // Prevent bot from responding to its own messages.
    if (message.author === client.user) return;

    // Message starts with the prefix so it's an command.
    if (message.content.startsWith(prefix)) {
        processCommand(message);
    }
});

const processCommand = (message) => {
    const content = message.content.split(/\s+/g);
    const command = content[0];
    const commandName = command.slice(prefix.length);
    const args = content.slice(1);

    const cmd = commands.get(commandName) || commands.get(aliases.get(commandName));
    if (cmd) {
        cmd.execute(client, args, message);
    } else {
        message.reply(`Command: ${commandName} doesn't exist. You can use '!help' to find more about commands!`);
    }
};

// Run updater every 5 minutes
setInterval(async () => {
    await updater();
}, 300000);
