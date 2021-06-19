/**
 * Users controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.2.1
 * @since 0.2.0
 * @module controllers/users
 * @see module:model/user
 * @see module:routes/users
 */

/*----- Imports --------------------------------------------------------------*/
import User from '../models/user.js';

/*----- Export Methods -------------------------------------------------------*/
export default {
  /**
   * Renders a settings page for the current user.
   * @arg {import("express").Request} req HTTP GET Request.
   * @arg {import("express").Response} res HTTP Response.
   */
  edit: (req, res) => res.render('users/edit'),
  /**
   * Save settings for the current user.
   * @arg {import("express").Request} req HTTP PUT Request
   * @arg {import("express").Response} res HTTP Response
   * @arg {Function} next
   */
  put: (req, res, next) =>
    req.user
      .update(req.body)
      .then(err =>
        err ? console.error(err) || res.redirect('/') : res.redirect('/user')
      ),
};
