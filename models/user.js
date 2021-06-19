/**
 * User model definition.
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.6
 * @since 0.1.6
 * @module models/user
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*------- Schema -------------------------------------------------------------*/
const userSchema = new mongoose.Schema(
  {
    email: String,
    handle: String,
    displayName: String,
    avatar: String,
    googleId: String,
  },
  { timestamps: true }
);

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('User', userSchema);
