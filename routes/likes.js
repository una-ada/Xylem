/**
 * Likes router for mounting on /posts/
 * @author Una Ada <una@anarchy.website>
 * @version 0.5.1
 * @since 0.5.0
 * @module routes/likes
 * @see module:models/post
 * @see module:controllers/likes
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import likesCtrl from '../controllers/likes.js';

/*----- Methods --------------------------------------------------------------*/
const checkUser = (req, res, next) =>
  req.user !== undefined ? next() : res.sendStatus(403);

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router
  .route('/:id/likes')
  .post(checkUser, likesCtrl.create)
  .delete(checkUser, likesCtrl.delete);

/*----- Exports --------------------------------------------------------------*/
export default router;
