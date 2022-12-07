import * as express from 'express';
import Stripe from 'stripe';
import config from '../../config';

const stripe = new Stripe(config.stripe.secret!, { apiVersion: '2022-11-15' });

const router = express.Router();

router.post('/', async(req, res) => {
    const paymentMethod = req.body.paymentMethod;
    const amount = req.body.amount;
    try {
        const paymentFulfilled = await stripe.paymentIntents.create({
            currency: 'usd',
            amount: Number(amount) * 100,
            confirm: true,
            payment_method: paymentMethod.id
        });
        res.json(paymentFulfilled);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'server error, check the logs' });
    }
});

export default router;