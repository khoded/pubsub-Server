const express = require('express');
const pubSubRoute = require('./pubSub.route');

const router = express.Router();

router.use('', pubSubRoute);
module.exports = router;
