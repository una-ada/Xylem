/**
 * Follows router to be mounted on /users
 * @author Una Ada <una@anarchy.website>
 * @version 0.6.0
 * @since 0.6.0
 * @module controllers/follows
 * @see module:models/follow
 */

/*------ Imports -------------------------------------------------------------*/
import { Router } from 'express';

/*----- Methods --------------------------------------------------------------*/
const checkUser = (req, res, next) =>
  req.user !== undefined ? next() : res.sendStatus(403);

/*------ Routes --------------------------------------------------------------*/
const router = new Router();
router
  .route('/:id/follows')
  .post(checkUser, (req, res) => res.sendStatus(200));

/*------ Exports -------------------------------------------------------------*/
export default router;
