module.exports = {
    apps: [{
        name: 'Makkebot',
        script: './bot.js',
        watch: false,
        args: '--color',
        env: {
            'NODE_ENV': 'production',
        },
    },
    ],
};
