/**
 * Follows router to be mounted on /users
 * @author Una Ada <una@anarchy.website>
 * @version 0.6.0
 * @since 0.6.0
 * @module routes/follows
 * @see module:models/follow
 * @see module:controllers/follows
 */

/*------ Imports -------------------------------------------------------------*/
import { Router } from 'express';
import followsCtrl from '../controllers/follows.js';

/*----- Methods --------------------------------------------------------------*/
const checkUser = (req, res, next) =>
  req.user !== undefined ? next() : res.sendStatus(403);

/*------ Routes --------------------------------------------------------------*/
const router = new Router();
router
  .route('/:id/follows')
  .post(checkUser, followsCtrl.create)
  .delete(checkUser, followsCtrl.delete);

/*------ Exports -------------------------------------------------------------*/
export default router;
