/**
 * Users router.
 * @author Una Ada <una@anarchy.website>
 * @version 0.2.0
 * @since 0.2.0
 * @module router/users
 * @see module:models/user
 */

/*----- Imports --------------------------------------------------------------*/
import {Router} from 'express';

/*----- Routes ---------------------------------------------------------------*/
const router = Router();
router.get('/edit', (req, res) => res.send('TEST'));

/*----- Exports --------------------------------------------------------------*/
export default router;