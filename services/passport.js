const passport = require('passport');
const githubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new githubStrategy(
    {
      clientID: Keys.GithubClient,
      clientSecret: Keys.GithubSecret,
      callbackURL: '/auth/callback',
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, done) => {
      console.log(profile);
      if (!req.user) {
        const existingUser = await User.findOne({
          providerId: profile.id
        });
        if (existingUser) {
          return done(null, existingUser);
        }
        const { profileUrl, photos, emails, displayName, id, login } = profile;
        const user = await new User({
          avatar: photos[0].value,
          providerId: id,
          login: profile['username'],
          blog: profile['_json'].blog,
          profileUrl,
          location: profile['_json'].location,
          bio: profile['_json'].bio,
          displayName
        }).save();
        if (emails) {
          user.email = emails[0].value;
        }
        user.save();
        done(null, user);
      } else {
        return done(null, req.user);
      }
    }
  )
);
