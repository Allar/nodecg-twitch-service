module.exports = function (nodecg) {

    return {
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
                streamPollInterval: nodecg.Replicant('DashboardStreamPollInterval', {defaultValue: 6}),
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
}