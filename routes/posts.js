/**
 * Posts router for mounting on /posts
 * @author Una Ada <una@anarchy.website>
 * @version 0.3.2
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
  req.user !== undefined ? next() : res.redirect('/');

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router.post('/', checkUser, postsCtrl.create);
router.get('/new', checkUser, postsCtrl.new);
router.route('/:id')
  .get(postsCtrl.show)
  .delete(checkUser, postsCtrl.delete);
router.get('/:id/edit', checkUser, (req, res) => res.send('Editor test'));

/*----- Exports --------------------------------------------------------------*/
export default router;
