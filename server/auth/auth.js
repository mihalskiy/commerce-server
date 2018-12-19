const User = require('../models').User;

module.exports = (app) => {

    app.post('/login', (req, res, next) => {
        const {
            email,
            password,
        } = req.body;

        if (!email || !password) {
            res
            .status(400)
            .send('Fields [email, password] are required');
        }

        return User.findOne({where: {email: email, password: password}})
            .then(user => {
                if (!user) {
                    res.status(401).send('User not found')
                } else {
                    req.login(user, err => err ? next(err) : res.json(user))
                }
            })
            .catch(next)
    })

    app.post('/signup', (req, res, next) => {
        console.log('req.body', req.body)
        return User.create(req.body)
            .then(user => req.login(user, err => err ? next(err) : res.json(user)))
            .catch(err => {
                if (err.name === 'SequelizeUniqueConstraintError')
                    res.status(401).send('User already exists')
                else next(err)
            })
    })

    app.post('/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })

    app.get('/me', (req, res) => {
        res.json(req.user)
    })


    require('./facebook')(app, User)
    /*router.use('/google', require('./google'))

    router.use('/facebook', require('./facebook'))*/

}

