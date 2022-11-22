import * as jwt from 'jsonwebtoken';
import config from '../../config';
import db from '../../db';
import { generateHash } from '../../utilities/passwords';
import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
    const newUser = req.body;
    try {
        newUser.password = generateHash(newUser.password);
        const result = await db.Users.insert(newUser);
        const token = jwt.sign(
            { userid: result.insertId, email: newUser.email, role: 1},
            config.jwt.secret!,
            { expiresIn: config.jwt.expires }
        );
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server creater needs to fix their register.ts code! Let them know!' })
    }
})

export default router;