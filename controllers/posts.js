/**
 * Posts controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.3.2
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
   * @arg {import("express").NextFunction} next Next function in the pipeline.
   */
  create: (req, res, next) =>
    Post.create(
      Object.assign(req.body, {
        user: req.user._id,
        // Currently unused, will be used for Markdown parsing in the future
        contentRich: req.body.content,
      }),
      (err, post) =>
        err
          ? console.error(err) || next(err)
          : res.redirect(`/posts/${post._id}`)
    ),
  /**
   * Render the show view for a single post.
   * @arg {import('express').Request} req Express HTTP GET Request.
   * @arg {import('express').Response} res Express HTTP Response
   * @arg {import("express").NextFunction} next Next function in the pipeline.
   */
  show: (req, res, next) =>
    Post.findById(req.params.id)
      .populate('user')
      .exec((err, post) =>
        err
          ? // Mediocre error handling, throws some complicated shit for
            // undefined IDs because they don't cast properly to ObjectId :)
            console.error(err) || next(err)
          : post
          ? res.render('posts/show', { post })
          : res.redirect('/')
      ),
  /**
   * Render a form to edit a post.
   * @arg {import('express').Request} req Express HTTP GET Request.
   * @arg {import('express').Response} res Express HTTP Response
   * @arg {import("express").NextFunction} next Next function in the pipeline.
   */
  edit: (req, res, next) =>
    Post.findById(req.params.id, (err, post) =>
      err
        ? console.error(err) || next(err)
        : req.user && req.user._id.equals(post.user)
        ? res.send('TEST')
        : res.sendStatus(403)
    ),
  /**
   * Delete a post.
   * @arg {import('express').Request} req Express HTTP DELETE Request
   * @arg {import('express').Response} res Express HTTP Response
   * @arg {import("express").NextFunction} next Next function in the pipeline.
   */
  delete: (req, res, next) =>
    Post.findById(req.params.id, (err, post) =>
      err
        ? console.error(err) || next(err)
        : req.user && req.user._id.equals(post.user)
        ? Post.deleteOne({ _id: post._id }, (err, post) =>
            err ? console.error(err) || next(err) : res.redirect('/')
          )
        : res.sendStatus(403)
    ),
};
