const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth')
const friendsInvitationControllers = require('../controllers/friendInvitation/friendInvitationController');

const postInvitationSchema = Joi.object({
    targetEmailAddress: Joi.string().email().required(),
});

const inviteDecisionSchema = Joi.object({
    id: Joi.string().required(),
});

router.post('/invite',auth,
validator.body(postInvitationSchema),
friendsInvitationControllers.controllers.postInvite);

router.post('/accept',auth,
validator.body(inviteDecisionSchema),
friendsInvitationControllers.controllers.postAccept);

router.post('/reject',auth,
validator.body(inviteDecisionSchema),
friendsInvitationControllers.controllers.postReject);

module.exports = router;