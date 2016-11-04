function array_contains(arr, obj) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === obj){
            return true;
        }
    }
    return false;
}

module.exports = function (nodecg, Twitch) {
    
    var RepsAndNames = require('./reps-and-names.js')(nodecg);

    function PollForFollowers() {
        Twitch.api({method: `channels/${nodecg.bundleConfig.channel}/follows?random=${Math.random()}`}, function(error, data) {
            RepsAndNames.ReplicantData.channel.numFollowers.value = data._total;

            var storedTimestamp = new Date(RepsAndNames.ReplicantData.channel.mostRecentFollowerTimestamp.value);
            var updatedTimestamp = null;

            for (var i = 0; i < data.follows.length; ++i) {
                var followerTimestamp = new Date(data.follows[i].created_at);
                if (followerTimestamp > storedTimestamp) {
                    if (updatedTimestamp === null || followerTimestamp > updatedTimestamp) {
                        updatedTimestamp = followerTimestamp;
                    }
                    var refollowing = array_contains(RepsAndNames.ReplicantData.channel.announcedFollowers.value, data.follows[i].user.display_name);
                    if (RepsAndNames.ReplicantData.dashboard.allowRefollow.value || !refollowing) {
                        if (!refollowing) {
                            RepsAndNames.ReplicantData.channel.announcedFollowers.value.push(data.follows[i].user.display_name);
                        }
                        nodecg.sendMessage(RepsAndNames.MessageNames.channel.followed, data.follows[i].user);
                    }
                } else {
                    break;
                }
            }

            if (updatedTimestamp !== null) {
                RepsAndNames.ReplicantData.channel.mostRecentFollowerTimestamp.value = updatedTimestamp.toISOString();
            }                
        });
    }

    // Follower polling
    setInterval(PollForFollowers, RepsAndNames.ReplicantData.dashboard.followerPollInterval.value * 1000);


};