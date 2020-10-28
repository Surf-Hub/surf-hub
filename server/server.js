const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./models');

const app = express();

const PORT = 3000;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: '1012785718065-iijoqj7jnqad7jojjpe50141d7l311n3.apps.googleusercontent.com',
      clientSecret: 'DcjBoJlWgBM4gdup7jef_Ilr',
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      db.query(`SELECT * FROM Users WHERE userId='${profile.id}'`)
        .then((user) => {
          if (user.rows.length) {
            done(null, user.rows[0]);
          } else {
            const queryText =
              'INSERT INTO users (userId, displayName, password, homebreak, nextspot) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const queryParams = [profile.id, profile.displayName, null, 'El Porto', null];
            db.query(queryText, queryParams)
              .then((newUser) => {
                done(null, newUser.rows[0]);
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:3000/');
});

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
