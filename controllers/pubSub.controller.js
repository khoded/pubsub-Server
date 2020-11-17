const sse = require('sse-broadcast')();
const { PubSub } = require('../services/redis.service');
require('sse-broadcast-redis')(sse, { host: 'localhost', port: 6379 });

const subscriber = (req, res, next) => {
  try {
    if (req.params.topic) {
      const { topic } = req.params;
      const message = req.body;
      const Client = new PubSub(topic, message);
      Client.subscribe();
      const data = 'subscribed';
      res.send(data);
    } else {
      throw new Error('no params passed');
    }
  } catch (error) {
    next(error);
  }
};

const publisher = (req, res, next) => {
  try {
    if (req.params.topic && req.body) {
      const { topic } = req.params;
      const message = req.body;
      const server = new PubSub(topic, message);
      // publish data for  localhost:8000 subscriber
      server.publish();
      const data = 'Message Published';
      // forward data to localhost:8000/event
      sse.publish(topic, 'event', {
        topic: req.params.topic,
        data: message,
      });
      res.send(data);
    } else {
      throw new Error('no params or body passed');
    }
  } catch (error) {
    next(error);
  }
};

const event = (req, res, next) => {
  sse.subscribe('topic1', res);
};

module.exports = {
  subscriber,
  publisher,
  event,
};
