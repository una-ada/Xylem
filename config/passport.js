/**
 * @file Passport configuration.
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.5
 * @since 0.1.5
 */

/*----- Imports --------------------------------------------------------------*/
import dotenv from 'dotenv';
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

/*----- Initialize -----------------------------------------------------------*/
dotenv.config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    (accessToken, refreshToken, profile, next) => {}
  )
);
