/**
 * Index router.
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.6
 * @since 0.1.6
 * @module routes/index
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import passport from 'passport';

/*----- Routes ---------------------------------------------------------------*/
const router = Router();
router.get('/', (req, res) => res.render('index'));
router.get(
  '/oauth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
  '/oauth/continue',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/',
  })
);
router.get('/logout', (req, res) => req.logout() || res.redirect('/'));

/*----- Exports --------------------------------------------------------------*/
export default router;
