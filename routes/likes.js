/**
 * Likes router for mounting on /posts/:id/likes
 * @author Una Ada <una@anarchy.website>
 * @version 0.5.0
 * @since 0.5.0
 * @module routes/likes
 * @see module:models/post
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';

/*----- Methods --------------------------------------------------------------*/
const checkUser = (req, res, next) =>
  req.user !== undefined ? next() : res.sendStatus(403);

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();

/*----- Exports --------------------------------------------------------------*/
export default router;
