const express = require('express');
const morgan = require('morgan');
const path = require('path');
const sm = require('sitemap')
    , fs = require('fs');
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
const app = express()
    , sitemap = sm.createSitemap ({
    hostname: 'https://nurmaget.com',
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: [
        { url: '/',  changefreq: 'daily', priority: 0.2 },
        { url: '/contact/',  changefreq: 'daily', priority: 0.2 },
        { url: '/price/',  changefreq: 'monthly',  priority: 0.2 },
        { url: '/portfolio/', img: "nurmaget.com",  priority: 0.4},    // changefreq: 'weekly',  priority: 0.5
        { url: '/news/',   img: "nurmaget.com" }
    ]
});

fs.writeFileSync("./public/sitemap.xml", sitemap.toString());


app.get('/sitemap.xml', function(req, res) {
    sitemap.toXML( function (err, xml) {
        if (err) {
            return res.status(500).end();
        }
        res.header('Content-Type', 'application/xml');
        res.send( xml );
    });
});

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

module.exports = app;
