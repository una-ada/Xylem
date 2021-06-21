/**
 * Posts router for mounting on /posts
 * @author Una Ada <una@anarchy.website>
 * @version 0.3.1
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
router.get('/new', checkUser, postsCtrl.new);
router.post('/', checkUser, postsCtrl.create);

/*----- Exports --------------------------------------------------------------*/
export default router;
