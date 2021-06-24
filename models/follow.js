/**
 * Follow model.
 * @author Una Ada <una@anarchy.website>
 * @version 0.6.0
 * @since 0.6.0
 * @module models/follow
 * @see module:routes/follows
 * @see module:controllers/follows
 */

/*------ Imports -------------------------------------------------------------*/
import mongoose from 'mongoose';

/*------ Schema --------------------------------------------------------------*/
const followSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('Follow', followSchema);
