const User = require('../models').User;
const social = require('./socialAuth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');

module.exports = (app) => {

    app.post('/login', async (req, res) => {
        const {
            password,
            email,
        } = req.body;
        if (!password || !password) {
            res
                .status(400)
                .send('Fields [telephone, password] are required');
        }

        const user = await User.findOne({ email }).lean();
        req.session.user = JSON.stringify(user);
        if (!user) {
            return res
                .status(404)
                .send({
                    message: 'User Not Found',
                });
        }
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res
                .status(500)
                .send({
                    error: 'Fields [telephone, password] are required'
                });
        }

        const token = jwt.sign(
            {
                userId: user._id,
            },
            config.secret,
            {
                expiresIn: config.expireTime,
            }
        );

        return res
            .status(200)
            .send({
                token,
                userId: req.sessionID,
            });
    });

    app.post('/signup', async (req, res, next) => {

        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .send({
                    error: 'Fields [email, password] are required'
                });
        }
        const hashedPassword = bcrypt.hashSync(password, 8);
        const user = await User.findOne({ email });
        if(!user) {
            user.email = email;
            user.password = hashedPassword;
            user.save();
            const token = jwt.sign(
                {
                    userId: user._id,
                },
                config.secret,
                {
                    expiresIn: config.expireTime,
                }
            );

            return res
                .status(200)
                .json({
                    token,
                    user,
                });

        } else {
            return res.status(400)
                .send({
                   error: 'Email already exist!'
                });
        }
    });

    app.post('/logout', (req, res) => {
        req.logout();
        res.redirect('/')
    });

    app.get('/me', (req, res) => {
        res.json(req.user)
    });

    social.google(app, User)
    social.facebook(app, User)
};

