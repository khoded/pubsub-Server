const express = require('express');
const validate = require('../../middlewares/validate');
const pubSubValidation = require('../../validations/pubSub.validation');
const pubSubController = require('../../controllers/pubSub.controller');

const router = express.Router();

router.route('/subscribe/:topic').post(validate(pubSubValidation.subscriber), pubSubController.subscriber);
router.route('/publish/:topic').post(validate(pubSubValidation.publisher), pubSubController.publisher);
router.route('/event').get(pubSubController.event);

module.exports = router;
