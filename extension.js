'use strict';
var Twitch = require('twitch-sdk');

module.exports = function (nodecg) {

    Twitch.init({clientId: nodecg.bundleConfig.client_id}, (error, status) => {
        if (error !== null) {
            console.error(error);
            return;
        }

        require('./main.js')(nodecg, Twitch);
    });
};
