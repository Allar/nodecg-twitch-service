# nodecg-twitch-service

This is a [nodecg](https://github.com/nodecg/nodecg) bundle that provides access to [Twitch](http://twitch.tv) channel data.

This doesn't provide any graphical elements itself, but allows other bundles to easily grab Twitch info and catch Twitch events.

# Todo

- [x] follows
- [ ] subscriptions
- [ ] chat messages

# Installation

Navigate to your `bundles` folder of your nodecg site, and run:

```
nodecg install Allar/nodecg-twitch-service
```

You must configure the bundle before it can be loaded.

# Configuration

Create file named `cfg/nodecg-twitch-service.json` inside your nodecg site. You must provide both a channel name and a Twitch Application client id.

You can create a Twitch Application [here](https://www.twitch.tv/kraken/oauth2/clients/new)

Example config file:

```
{
  "channel": "awesomeallar",
  "client_id": "q0vl7q7kpcpg8d3t1wka02s253y2fkf"
}
```

# Accessing Beam Data

This service provides Beam data in two ways. Replicants and messages.

## Replicants

### Channel

* `ChannelOnline`: Boolean, whether channel is currently streaming.
* `ChannelName`: String, title of the channel.
* `ChannelAudience`: String, audience of the channel (everyone, mature).
* `ChannelViewersTotal`: Number, the number of views the channel has.
* `ChannelViewersCurrent`: Number, the number of viewers currently watching the channel.
* `ChannelFollowers`: Number, the number of users following the channel.

## Messages

### Dashboard

* `dashboard-update-request`: If this bundle receives this message, it will trigger a force update of the channel data using Beam's REST API.

### Channel

* `channel-followed`: Sent when a user follows this channel. Sends Twitch [User](https://dev.twitch.tv/docs/api/v3/follows#get-channelschannelfollows) data of follower.

