/**
 * Posts router for mounting on /posts
 * @author Una Ada <una@anarchy.website>
 * @version 0.6.1
 * @since 0.3.1
 * @module routes/posts
 * @see module:models/post
 * @see module:controllers/post
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import postsCtrl from '../controllers/posts.js';

/*----- Methods --------------------------------------------------------------*/
const checkUser = (req, res, next) =>
  req.user !== undefined ? next() : res.sendStatus(403);

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router.route('/')
  .get(checkUser, (req, res) => res.sendStatus(200))
  .post(checkUser, postsCtrl.create);
router.get('/new', checkUser, postsCtrl.new);
router.route('/:id')
  .get(postsCtrl.show)
  .put(checkUser, postsCtrl.update)
  .delete(checkUser, postsCtrl.delete);
router.get('/:id/edit', checkUser, postsCtrl.edit);

/*----- Exports --------------------------------------------------------------*/
export default router;
