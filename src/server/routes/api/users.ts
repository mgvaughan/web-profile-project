import * as express from 'express';
// import * as passport from 'passport';
import db from '../../db';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await db.Users.allUsers();

        const usersWithoutPasswords = users.map(usr => ({
            id: usr.id,
            email: usr.email,
            name: usr.name,
            _created: usr._created
        }))
        res.json(usersWithoutPasswords);
    } catch (error) {
        console.log(error);
        res.send(500).json({ message: "Could not get all users, please check server logs" })
    }
});

router.get('/:id', async (req, res) => {
    let id = Number(req.params.id);
    try {
        const [user] = await db.Users.oneUser(id)
        res.json(user);
    } catch (error) {
        console.log(error);
        res.send(500).json({ message: "COuld not get user, please check server logs" });
    }
});

export default router;