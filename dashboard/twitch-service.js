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
            streamPollInterval: nodecg.Replicant('DashboardStreamPollInterval', {defaultValue: 3}),
        },
        user: {
        },
        channel: {
            online: nodecg.Replicant('ChannelOnline', {defaultValue: "Unknown"}),
            name: nodecg.Replicant('ChannelName', {defaultValue: "Unknown"}),
            audience: nodecg.Replicant('ChannelAudience', {defaultValue: "everyone"}),
            viewersTotal: nodecg.Replicant('ChannelViewersTotal', {defaultValue: 0}),
            viewersCurrent: nodecg.Replicant('ChannelViewersCurrent', {defaultValue: 0}),
            numFollowers: nodecg.Replicant('ChannelFollowers', {defaultValue: 0}),
            description: nodecg.Replicant('ChannelDescription', {defaultValue: "Unknown"}),
            announcedFollowers: nodecg.Replicant('ChannelAnnouncedFollowers', {defaultValue: []}),
            mostRecentFollowerTimestamp: nodecg.Replicant('ChannelMostRecentFollowerTimestamp', {defaultValue: "1970-01-01T00:00:00.000Z"})
        }
    }
};

RepsAndNames.ReplicantData.channel.viewersCurrent.on('change', function(newValue, oldValue) {
    document.getElementById("Viewers").textContent = newValue;
});

RepsAndNames.ReplicantData.channel.numFollowers.on('change', function(newValue, oldValue) {
    document.getElementById("Followers").textContent = newValue;
});

var TriggerNewFollowerButton = document.getElementById("TriggerNewFollowerButton");
TriggerNewFollowerButton.addEventListener('tap', (e) => {
    var fakeFollowerName = document.querySelector("#FakeFollowerName").value;
    if (fakeFollowerName !== null && fakeFollowerName.length > 0) {
        var fakeUser = { display_name: fakeFollowerName };
        nodecg.sendMessage(RepsAndNames.MessageNames.channel.followed, fakeUser);
    }
    
});


nodecg.sendMessageToBundle(RepsAndNames.MessageNames.dashboard.updateRequest, 'nodecg-twitch-service');