/**
 * Comments router to be mounted on /posts/
 * @author Una Ada <una@anarchy.website>
 * @version 0.5.3
 * @since 0.5.3
 * @module routes/comments
 * @see module:models/post
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';

/*----- Methods --------------------------------------------------------------*/
const checkUser = (req, res, next) =>
  req.user !== undefined ? next() : res.sendStatus(403);

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router
  .route('/:id/comments')
  .post(checkUser, (req, res) => res.send('TEST'));

/*----- Exports --------------------------------------------------------------*/
export default router;
