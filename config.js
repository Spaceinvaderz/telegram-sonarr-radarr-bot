const nconf = require('nconf');

nconf
    .argv()
    .env()
    .file({
        file: './config/config.json'
    })
    .required(["telegram:botToken", "telegram:admins", "sonarr", "radarr", "bot"])

nconf.defaults({
    "sonarr:enabled": true,
    "radarr:enabled": true,
    "bot:logLevel": "info",
    "bot:name": "the Bestest Bot"
})

module.exports = nconf;