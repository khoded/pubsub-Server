const redis = require('redis');

const pub = redis.createClient();
const sub = redis.createClient();
/**
 * Class pubSUb
 * @param {string} channel
 * @param {string} body
 * @returns {string}
 */
class pubSub {
  constructor(channel, body) {
    this.channel = channel;
    this.body = body;
  }

  publish() {
    try {
      if (!this.channel || !this.body) {
        throw new Error('Incomplete Request Body Unable to publish');
      }
      const message = {
        topic: this.channel,
        data: this.body,
      };
      pub.publish(this.channel, JSON.stringify(message));
      console.log(`Published Event via redis Channel ${this.channel}`);
    } catch (error) {
      console.log(error);
    }
  }

  subscribe() {
    try {
      if (!this.channel || !this.body) {
        throw new Error('Missing Topic Unable to Subscribe to Event');
      }
      sub.subscribe(this.channel);
      console.log(`Client successfully subscribed to Topic  ${this.channel}`);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = {
  pubSub,
};
