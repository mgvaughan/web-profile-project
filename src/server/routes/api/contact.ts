import * as express from 'express';
import * as Mailgun from 'mailgun.js';
import * as FormData from 'form-data';
import config from '../../config';
import MailGun from 'mailgun.js';


const mailgun = new (<typeof MailGun>(<any>Mailgun))(<any>FormData).client({
    username: 'api',
    key: config.mailgun.apiKey!
});

const router = express.Router();

router.post('/', async (req, res) => {
    const newEmail = req.body;
    try {
        const result = await mailgun.messages.create(config.mailgun.domain!, {
            to: config.mailgun.toEmail,
            subject: newEmail.subject,
            from: newEmail.from,
            text: newEmail.message
        });
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unable to send contact email, check server logs' })
    }
});

export default router;