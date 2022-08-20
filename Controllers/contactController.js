const axios = require('axios');

const CONTACT_LOG_TAG = "Got an error on ContactController: "
const EMAILJS_SERVICE_ID = 'service_9bx1tfa'
const EMAILJS_TEMPLATE_ID = 'template_ckynri6'
const EMAILJS_USER_ID = 'DV4mAiuLFQUzlr2NH'

const handleError = (err) => {
    console.log(CONTACT_LOG_TAG + err);
}

exports.postContact = async (req, res, next) => {
    try {
        let data = {
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_USER_ID,
            template_params: {
                user_name: req.body.user_name,
                user_email: req.body.user_email,
                message: req.body.user_message,
            }
        };

        axios
            .post('https://api.emailjs.com/api/v1.0/email/send', {
                ...data
            })
            .then(innerRes => {
                res.sendStatus(innerRes.status)
            })
            .catch(error => {
                console.error(CONTACT_LOG_TAG + error);
            });

    } catch (err) {
        handleError(err)
    }
}