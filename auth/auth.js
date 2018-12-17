const User = require('../models').User;

module.exports = (app) => {
    app.post('/login', (req, res, next) => {
        // User.findOne({where: {email: req.body.email}}, {attributes: ['id', 'email', 'name', 'isAdmin', 'tags']})
        return User.findOne({where: {email: req.body.email}})
            .then(user => {
                if (!user) {
                    res.status(401).send('User not found')
                } /*else if (!user.correctPassword(req.body.email)) {
                    //res.status(401).send('Incorrect password')
                }*/ else {
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

    /*router.use('/google', require('./google'))
    router.use('/twitter', require('./twitter'))
    router.use('/facebook', require('./facebook'))*/

}

