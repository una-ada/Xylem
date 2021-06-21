/**
 * Posts controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.3.1
 * @since 0.3.1
 * @module controllers/posts
 * @see module:models/post
 * @see module:routes/posts
 */

/*----- Imports --------------------------------------------------------------*/
import Post from '../models/post.js';

/*---- Export Methods --------------------------------------------------------*/
export default {
  /**
   * Render a form for creating new posts.
   * @arg {import('express').Request} req Express HTTP GET Request.
   * @arg {import('express').Response} res Express HTTP Response
   */
  new: (req, res) => res.render('posts/new'),
};
