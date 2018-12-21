const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

module.exports = {
    google(app, User) {
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
    },

    facebook(app, User) {
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

}
