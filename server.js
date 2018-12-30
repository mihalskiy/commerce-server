const express = require('express');
const morgan = require('morgan');
const path = require('path');
const SitemapGenerator = require('sitemap-generator');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const db = require('./server/config/config').development;
const SessionStore = require('express-session-sequelize')(session.Store);
const Sequelize = require('sequelize');
const User = require('./server/models').User;
const myDatabase = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
});
const sequelizeSessionStore = new SessionStore({
    db: myDatabase,
});
const app = express();

app.all('*', ensureSecure);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.PUBLIC_URL);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


app.use(morgan('dev'));
app.use(bodyParser.json());

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>
    User.findById(id, {attributes: ['id', 'email']})
        .then(user => {
            done(null, user)
            return null
        })
        .catch(done))
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'keyboard cat',
    store: sequelizeSessionStore,
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true // if you do SSL outside of node.
}))
app.use(passport.initialize())
app.use(passport.session())

require('./server/auth/auth')(app);
require('./server/routes/router')(app);
app.use(express.static(path.join(__dirname + '/build')))

// sends index.html
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})
/*app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));*/
function ensureSecure(req, res, next){
    if(req.secure){
        // OK, continue
        return next();
    };
    // handle port numbers if you need non defaults
    // res.redirect('https://' + req.host + req.url);
    res.redirect('https://' + req.hostname + req.url);
}

var generator = SitemapGenerator('https://nurmaget.com/', {
    maxDepth: 0,
    filepath: './sitemap.xml',
    maxEntriesPerFile: 50000,
    stripQuerystring: true
});
generator.start();

module.exports = app;
