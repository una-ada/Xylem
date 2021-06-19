/**
 * @file Passport configuration.
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.6
 * @since 0.1.5
 */

/*----- Imports --------------------------------------------------------------*/
import dotenv from 'dotenv';
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import User from '../models/user.js';

/*----- Initialize -----------------------------------------------------------*/
dotenv.config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    (accessToken, refreshToken, profile, next) => {
      User.findOne({ googleId: profile.id }, (err, user) => {
        err
          ? console.error(err) || next(err)
          : user
          ? next(null, user)
          : User.create(
              {
                email: profile.emails[0].value,
                // Temporary method to create a handle
                handle: profile.emails[0].value.split('@')[0],
                displayName: profile.displayName,
                googleId: profile.id,
              },
              (err, newUser) =>
                err ? console.error(err) || next(err) : next(null, newUser)
            );
      });
    }
  )
);
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id, done));
