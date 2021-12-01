import {ApiClient} from 'twitch';
import {ClientCredentialsAuthProvider} from 'twitch-auth';

const clientId = 'hrugublpa4p924iw3yy65cu0n8d7my';
const clientSecret = '4dtzmn7k9n0yipn22kp8cznjghsp5d';
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({authProvider});

class Twitch {
    constructor(client) {
        this.client = client;
    }

    async areStreamsLive(channels) {
        const streams = await this.client.helix.streams.getStreams({userName: channels.filter(Boolean)});
        return streams.data;
    }
}

const $twitch = new Twitch(apiClient);

export default (_, inject) => {
    inject('twitch', $twitch);
}
