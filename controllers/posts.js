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
  /**
   * Create a new post.
   * @arg {import('express').Request} req Express HTTP POST Request
   * @arg {import('express').Response} res Express HTTP Response
   */
  create: (req, res) =>
    Post.create(
      Object.assign(req.body, {
        user: req.user._id,
        // Currently unused, will be used for Markdown parsing in the future
        contentRich: req.body.content,
      }),
      (err, post) =>
        err
          ? console.error(err) || res.send(500)
          : res.redirect(`/posts/${post._id}`)
    ),
};
