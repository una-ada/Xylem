/**
 * Post model definition.
 * @author Una Ada <una@anarchy.website>
 * @version 0.3.0
 * @since 0.3.0
 * @module models/post
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*------- Schema -------------------------------------------------------------*/
const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: String,
    content: String,
  },
  { timestamps: true }
);

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('Post', postSchema);
