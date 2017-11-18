const express = require('express');
const passport = require('passport');
const BodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const Keys = require('./config/keys');
const port = process.env.PORT || 5000;
const app = express();

require('./Models/User');
require('./services/passport');
mongoose.connect(Keys.mongoUri);
app.use(BodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [Keys.cookieKey],
    resave: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./authRoutes/auth')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port);
