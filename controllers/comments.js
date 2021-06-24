/**
 * Comments controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.5.3
 * @since 0.5.3
 * @module controllers/comments
 * @see module:models/post
 * @see module:routes/comments
 */

/*----- Imports --------------------------------------------------------------*/
import Post from '../models/post.js';

/*---- Export Methods --------------------------------------------------------*/
export default {
  /**
   * Add a new comment to a post.
   * @arg {express.Request} req Express HTTP POST Request
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  create: (req, res, next) =>
    Post.findById(req.params.id, (err, post) =>
      err
        ? console.error(err) || next(err)
        : post.comments.push({
            user: req.user._id,
            content: req.body.content,
            contentRich: req.body.content,
          }) &&
          post.save(err =>
            err
              ? console.error(err) || next(err)
              : res.redirect(`/posts/${post._id}`)
          )
    ),
};
