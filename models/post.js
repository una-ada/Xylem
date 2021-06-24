/**
 * Post model definition.
 * @author Una Ada <una@anarchy.website>
 * @version 0.5.3
 * @since 0.3.0
 * @module models/post
 * @see module:controllers/post
 * @see module:routes/post
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*------- Schema -------------------------------------------------------------*/
const likeSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true }
  ),
  commentSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      content: String,
      contentRich: String,
    },
    { timestamps: true }
  ),
  postSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      title: String,
      content: String,
      contentRich: String,
      likes: [likeSchema],
      comments: [commentSchema],
    },
    { timestamps: true }
  );

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('Post', postSchema);
