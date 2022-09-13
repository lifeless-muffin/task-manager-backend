const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  passReqToCallback: true
}

passport.serializeUser(function(user, done) {done(null, user)})
passport.deserializeUser(function(user, done) {done(null, user)});

passport.use(new GoogleStrategy(googleConfig,
  (request, accessToken, refreshToken, profile, done) => {
    console.log(profile);
    done();
  }
));