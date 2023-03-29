// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
// const PORT = process.env.PORT || 3000;
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Public')));
const sess = {
    secret: 'secret-key',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};
app.use(session(sess));

app.use(require('./controllers'));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});





