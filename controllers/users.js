/**
 * Users controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.3.4
 * @since 0.2.0
 * @module controllers/users
 * @see module:model/user
 * @see module:routes/users
 */

/*----- Imports --------------------------------------------------------------*/
import User from '../models/user.js';
import Post from '../models/post.js';

/*----- Export Methods -------------------------------------------------------*/
export default {
  /**
   * Renders a profile for the user specified by :handle
   * @arg {import("express").Request} req Express HTTP GET Request.
   * @arg {import("express").Response} res Express HTTP Response.
   * @arg {import("express").NextFunction} next Next function in the pipeline.
   */
  show: (req, res, next) =>
    User.findOne({ handle: req.params.handle }, (err, profile) =>
      err
        ? console.error(err) || next(err)
        : !profile
        ? res.redirect('/')
        : Post.find({ user: profile._id }, (err, posts) =>
            err
              ? console.error(err) || next(err)
              : res.render('users/show', { profile, posts })
          )
    ),
  /**
   * Renders a settings page for the current user.
   * @arg {import("express").Request} req Express HTTP GET Request.
   * @arg {import("express").Response} res Express HTTP Response.
   */
  edit: (req, res) => res.render('users/edit'),
  /**
   * Save settings for the current user.
   * @arg {import("express").Request} req Express HTTP PUT Request.
   * @arg {import("express").Response} res Express HTTP Response.
   * @arg {import("express").NextFunction} next Next function in the pipeline.
   */
  put: (req, res, next) =>
    req.user.update(req.body, { runValidators: true, context: 'query' }, err =>
      err ? console.error(err) || next(err) : res.redirect('/')
    ),
};
