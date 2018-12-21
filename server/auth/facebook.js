const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

module.exports = (app, User) => {
    const facebookConfig = {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK
    }

    const strategy = new FacebookStrategy(facebookConfig, (token, refreshToken, profile, done) => {
        const facebookId = profile.id
        const name = profile.displayName
        const email = profile.username + "@fake-email-address.com";

        User.find({where: {facebookId}})
            .then(user => user
                ? done(null, user)
                : User.create({name, email, facebookId})
                    .then(user => done(null, user))
            )
            .catch(done)
    })

    passport.use(strategy)

    app.get('/facebook', passport.authenticate('facebook', {scope: 'email'}))

    app.get('/callback', passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }))

}
