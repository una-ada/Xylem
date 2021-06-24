/**
 * Users router for mounting on /user
 * @author Una Ada <una@anarchy.website>
 * @version 0.5.2
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
  req.user !== undefined ? next() : res.redirect('/');

/*----- Routes ---------------------------------------------------------------*/
const router = Router();
router
  .route('/settings')
  .get(checkUser, usersCtrl.edit)
  .put(checkUser, usersCtrl.put);
router.get('/:handle', usersCtrl.show);
router.get('/:handle/likes', (req, res) => res.send('TEST'));

/*----- Exports --------------------------------------------------------------*/
export default router;
