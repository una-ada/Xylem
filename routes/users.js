/**
 * Users router.
 * @author Una Ada <una@anarchy.website>
 * @version 0.2.1
 * @since 0.2.0
 * @module router/users
 * @see module:models/user
 * @see module:controllers/user
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import usersCtrl from '../controllers/users.js';

/*----- Routes ---------------------------------------------------------------*/
const router = Router();
router
  .route('/')
  .all((req, res, next) =>
    req.isAuthenticated() ? next() : res.redirect('/oauth/google')
  )
  .get(usersCtrl.edit)
  .put(usersCtrl.put);

/*----- Exports --------------------------------------------------------------*/
export default router;
