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

/*----- Export Methods -------------------------------------------------------*/
export default {
  /**
   * Renders a settings page for the current user.
   * @param {import("express").Request} req HTTP GET Request.
   * @param {import("express").Response} res HTTP Response.
   */
  edit: (req, res) => (req.user ? res.render('users/edit') : res.redirect('/')),
};
