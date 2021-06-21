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

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router.get('/new', (res, req) => res.send('TEST'));

/*----- Exports --------------------------------------------------------------*/
export default router;
