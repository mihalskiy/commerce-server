const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

module.exports = (app, User) => {
    const googleConfig = {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    }

    const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
        const googleId = profile.id
        const name = profile.displayName
        const email = profile.emails[0].value

        return User.find({where: {googleId}})
            .then(user => user
                ? done(null, user)
                : User.create({name, email, googleId})
                    .then(user => done(null, user))
            )
            .catch(done)
    })

    passport.use(strategy)

    app.get('/google', passport.authenticate('google', {scope: 'email'}))

    app.get('/callback', passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
    }))
}
