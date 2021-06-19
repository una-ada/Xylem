/**
 * Users controller.
 * @author Una Ada <una@anarchy.website>
 * @version 0.2.0
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
   * @param {express.Request} req 
   * @param {express.Response} res 
   */
  edit: (req, res) =>
    res.send('TEST'),
};
