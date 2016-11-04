'use strict';

//@TODO: Make this better and some how use reps-and-names.js
var RepsAndNames = {
    MessageNames: {
        dashboard: {
            updateRequest: 'dashboard-update-request'
        },
        channel: {
            followed: 'channel-followed',
            unfollowed: 'channel-unfollowed'
        }
    },
    ReplicantData: {
        dashboard: {
            allowRefollow: nodecg.Replicant('DashboardAllowRefollow', {defaultValue: false}),
            followerPollInterval: nodecg.Replicant('DashboardFollowerPollInterval', {defaultValue: 3}),
        },
        user: {
        },
        channel: {
            online: nodecg.Replicant('ChannelOnline', {defaultValue: "Unknown"}),
            name: nodecg.Replicant('ChannelName', {defaultValue: "Unknown"}),
            viewersTotal: nodecg.Replicant('ChannelViewersTotal', {defaultValue: 0}),
            viewersCurrent: nodecg.Replicant('ChannelViewersCurrent', {defaultValue: 0}),
            numFollowers: nodecg.Replicant('ChannelFollowers', {defaultValue: 0}),
            description: nodecg.Replicant('ChannelDescription', {defaultValue: "Unknown"}),
            announcedFollowers: nodecg.Replicant('ChannelAnnouncedFollowers', {defaultValue: []}),
        }
    }
};

RepsAndNames.ReplicantData.channel.viewersCurrent.on('change', function(newValue, oldValue) {
    document.getElementById("Viewers").textContent = newValue;
});

RepsAndNames.ReplicantData.channel.numFollowers.on('change', function(newValue, oldValue) {
    document.getElementById("Followers").textContent = newValue;
});

RepsAndNames.ReplicantData.user.sparks.on('change', function(newValue, oldValue) {
    document.getElementById("Sparks").textContent = newValue;
});

RepsAndNames.ReplicantData.user.experience.on('change', function(newValue, oldValue) {
    document.getElementById("Experience").textContent = newValue;
});

nodecg.sendMessageToBundle(RepsAndNames.MessageNames.dashboard.updateRequest, 'nodecg-twitch-service');