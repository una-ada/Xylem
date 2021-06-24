/**
 * Follows controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.6.0
 * @since 0.6.0
 * @module controllers/follows
 * @see module:models/follow
 * @see module:routes/follows
 */

/*----- Imports --------------------------------------------------------------*/
import User from '../models/user.js';
import Follow from '../models/follow.js';

/*----- Export Methods -------------------------------------------------------*/
export default {
  /**
   * Follow another user.
   * @arg {express.Request} req Express HTTP POST Request
   * @arg {express.Response} res Express HTTP Response
   * @arg {express.NextFunction} next Next function in the pipeline.
   */
  create: (req, res, next) =>
    // This might be a bit much at the moment but I'm sure it'll prove useful
    User.findById(req.params.id, (err, user) =>
      err
        ? console.error(err) || next(err)
        : Follow.findOne({ from: req.user._id, to: user._id }, (err, follow) =>
            err
              ? console.error(err) || next(err)
              : follow
              ? res.redirect(`/user/${user.handle}`)
              : Follow.create(
                  {
                    from: req.user._id,
                    to: user._id,
                  },
                  err =>
                    err
                      ? console.error(err) || next(err)
                      : res.redirect(`/user/${user.handle}`)
                )
          )
    ),
};
