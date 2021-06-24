/**
 * Likes controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.5.2
 * @since 0.5.0
 * @module controllers/likes
 * @see module:models/post
 * @see module:routes/likes
 */

/*----- Imports --------------------------------------------------------------*/
import Post from '../models/post.js';

/*---- Export Methods --------------------------------------------------------*/
export default {
  /**
   * Add a new like to a post.
   * @arg {express.Request} req Express HTTP POST Request
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  create: (req, res, next) =>
    Post.findById(req.params.id, (err, post) =>
      err
        ? console.error(err) || next(err)
        : post.likes.filter(like => req.user._id.equals(like.user)).length
        ? res.redirect(`/posts/${post._id}`)
        : post.likes.push({
            user: req.user._id,
          }) &&
          post.save(err =>
            err
              ? console.error(err) || next(err)
              : res.redirect(`/posts/${post._id}`)
          )
    ),
  /**
   * Remove a like from a post.
   * @arg {express.Request} req Express HTTP DELETE Request
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  delete: (req, res, next) =>
    Post.findById(req.params.id, (err, post) =>
      err
        ? console.error(err) || next(err)
        : (like =>
            like
              ? like.remove() &&
                post.save(err =>
                  err
                    ? console.error(err) || next(err)
                    : res.redirect(`/posts/${post._id}`)
                )
              : res.redirect(`/posts/${post._id}`))(
            post.likes.filter(like => req.user._id.equals(like.user)).pop()
          )
    ),
};
