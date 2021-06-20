/**
 * Users router for mounting on /user
 * @author Una Ada <una@anarchy.website>
 * @version 0.3.1
 * @since 0.2.0
 * @module router/users
 * @see module:models/user
 * @see module:controllers/user
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import usersCtrl from '../controllers/users.js';

/*----- Methods --------------------------------------------------------------*/
const checkUser = (req, res, next) =>
  req.user !== undefined ? next() : res.redirect('/oauth/google');

/*----- Routes ---------------------------------------------------------------*/
const router = Router();
router
  .route('/settings')
  .get(checkUser, usersCtrl.edit)
  .put(checkUser, usersCtrl.put);
router.get('/:handle', usersCtrl.show);

/*----- Exports --------------------------------------------------------------*/
export default router;
