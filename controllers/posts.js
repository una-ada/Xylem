/**
 * Posts controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.7.2
 * @since 0.3.1
 * @module controllers/posts
 * @see module:models/post
 * @see module:routes/posts
 */

/*----- Imports --------------------------------------------------------------*/
import Post from '../models/post.js';
import Follow from '../models/follow.js';

/*---- Export Methods --------------------------------------------------------*/
export default {
  /**
   * Index of posts for a user.
   * @arg {express.Request} req Express HTTP GET Request
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  index: (req, res, next) =>
    Follow.find({ from: req.user._id }, (err, follows) =>
      err
        ? console.error(err) || next(err)
        : Post.find({
            $or: [
              { user: { $in: follows.map(follow => follow.to) } },
              { user: req.user._id },
            ],
          })
            .populate('user')
            .exec((err, posts) =>
              err
                ? console.error(err) || next(err)
                : res.render('posts/index', { posts })
            )
    ),
  /**
   * Render a form for creating new posts.
   * @arg {express.Request} req Express HTTP GET Request.
   * @arg {express.Response} res Express HTTP Response
   */
  new: (req, res) => res.render('posts/new'),
  /**
   * Create a new post.
   * @arg {express.Request} req Express HTTP POST Request
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
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
   * @arg {express.Request} req Express HTTP GET Request.
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  show: (req, res, next) =>
    Post.findById(req.params.id)
      .populate('user')
      .populate('comments.user')
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
   * @arg {express.Request} req Express HTTP GET Request.
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  edit: (req, res, next) =>
    Post.findById(req.params.id, (err, post) =>
      err
        ? console.error(err) || next(err)
        : req.user && req.user._id.equals(post.user)
        ? res.render('posts/edit', { post })
        : res.sendStatus(403)
    ),
  /**
   * Update a post.
   * @arg {express.Request} req Express HTTP PUT Request.
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  update: (req, res, next) =>
    Post.findById(req.params.id, (err, post) =>
      err
        ? console.error(err) || next(err)
        : req.user && req.user._id.equals(post.user)
        ? post.update(req.body, err =>
            err
              ? console.error(err) || next(err)
              : res.redirect(`/posts/${req.params.id}`)
          )
        : res.sendStatus(403)
    ),
  /**
   * Delete a post.
   * @arg {express.Request} req Express HTTP DELETE Request
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
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
