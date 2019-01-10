const express = require('express');
const morgan = require('morgan');
const path = require('path');
const sm = require('sitemap')
    , fs = require('fs');
require('dotenv').config();
const bodyParser = require('body-parser');
const session = require('express-session');
const initSwagger = require('./server/middleware/swagger/initSwagger');
const passport = require('passport');
const env = process.env.NODE_ENV;
const db = require('./server/config/config')[env];
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
    hostname: 'http://localhost:3000',
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: [
        { url: '/',  changefreq: 'weekly', priority: 0.8 },
        { url: '/contact/',  changefreq: 'weekly', priority: 0.8 },
        { url: '/price/',  changefreq: 'monthly',  priority: 0.8 },
        { url: '/portfolio/', changefreq: 'monthly',  priority: 0.8 },    // changefreq: 'weekly',  priority: 0.5
        { url: '/portfolio/id', changefreq: 'monthly',  priority: 0.8 },    // changefreq: 'weekly',  priority: 0.5
        { url: '/news/',   img: "nurmaget.com" }
    ]
});

if (process.env.NODE_ENV === 'production') {

    fs.writeFileSync("./build/sitemap.xml", sitemap.toString());

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
}

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
initSwagger(app);

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

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

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
