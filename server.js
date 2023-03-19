// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const hbs = exphbs.create({});
const .env = require('.env');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./app/config/connection');
const mysql = require('mysql2');
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));


app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});