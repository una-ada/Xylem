/**
 * Users controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.7.1
 * @since 0.2.0
 * @module controllers/users
 * @see module:model/user
 * @see module:routes/users
 */

/*----- Imports --------------------------------------------------------------*/
import User from '../models/user.js';
import Post from '../models/post.js';
import Follow from '../models/follow.js';

/*----- Export Methods -------------------------------------------------------*/
export default {
  /**
   * Renders a profile for the user specified by :handle
   * @arg {express.Request} req Express HTTP GET Request.
   * @arg {express.Response} res Express HTTP Response.
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  show: (req, res, next) =>
    User.findOne({ handle: req.params.handle }, (err, profile) =>
      err
        ? console.error(err) || next(err)
        : !profile
        ? res.redirect('/')
        : Post.find({ user: profile._id })
            .populate('user')
            .exec((err, posts) =>
              err
                ? console.error(err) || next(err)
                : req.user
                ? Follow.findOne(
                    { from: req.user._id, to: profile._id },
                    (err, follow) =>
                      err
                        ? console.error(err) || next(err)
                        : res.render('users/show', {
                            title: 'Posts',
                            profile,
                            posts,
                            follow,
                          })
                  )
                : res.render('users/show', { title: 'Posts', profile, posts })
            )
    ),
  /**
   * Renders a list of likes for the user specified by :handle
   * @arg {express.Request} req Express HTTP GET Request.
   * @arg {express.Response} res Express HTTP Response.
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  showLikes: (req, res, next) =>
    User.findOne({ handle: req.params.handle }, (err, profile) =>
      err
        ? console.error(err) || next(err)
        : !profile
        ? res.redirect('/')
        : /* Post.aggregate([
            // Get all posts which have been liked by the user
            { $match: { 'likes.user': profile._id } },
            // Split posts such that each copy contains a single like
            { $unwind: '$likes' },
            // Get posts whose like is owned by the user
            { $match: { 'likes.user': profile._id } },
            // Sort the posts by the like id
            { $sort: { 'likes._id': -1 } },
          ]).exec((err, posts) =>
          */
          Post.find({'likes.user': profile._id }, (err, posts) =>
            err
              ? console.error(err) || next(err)
              : Post.populate(posts, { path: 'users' }, (err, posts) =>
                  err
                    ? console.error(err) || next(err)
                    : res.render('users/show', {
                        title: 'Likes',
                        profile,
                        posts,
                      })
                )
          )
    ),
  /**
   * Renders a settings page for the current user.
   * @arg {express.Request} req Express HTTP GET Request.
   * @arg {express.Response} res Express HTTP Response.
   */
  edit: (req, res) => res.render('users/edit'),
  /**
   * Save settings for the current user.
   * @arg {express.Request} req Express HTTP PUT Request.
   * @arg {express.Response} res Express HTTP Response.
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  put: (req, res, next) =>
    req.user.update(req.body, { runValidators: true, context: 'query' }, err =>
      err ? console.error(err) || next(err) : res.redirect('/')
    ),
};
