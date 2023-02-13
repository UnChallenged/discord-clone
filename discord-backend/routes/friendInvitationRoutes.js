const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth')
const friendsInvitationControllers = require('../controllers/friendInvitation/friendInvitationController');

const postInvitationSchema = Joi.object({
    targetEmailAddress: Joi.string().email().required(),
});

router.post('/invite',auth,
validator.body(postInvitationSchema),
friendsInvitationControllers.controllers.postInvite);

module.exports = router;