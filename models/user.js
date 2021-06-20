/**
 * User model definition.
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.6
 * @since 0.1.6
 * @module models/user
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*----- Constants ------------------------------------------------------------*/
/** @const {Object.<string,RegExp>} validStrings RegExp matching validators. */
export const validStrings = {
  /**
   * @param {RegExp} email Email validation RegExp
   * 
   * Almost [RFC822]{@link https://datatracker.ietf.org/doc/html/rfc822} 
   * compliant. Taken from {@link https://gist.github.com/badsyntax/719800}.
   */
  email:
    /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,
};

/*----- Schema ---------------------------------------------------------------*/
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      validate: [
        {
          // Validate for proper e-mail string
          validator: value => validStrings.email.test(value),
          msg: 'Invalid e-mail!',
        },
      ],
    },
    handle: {
      type: String,
      validate: [
        {
          // Validate for uniqueness of handle
          validator: async function (value) {
            let count = await mongoose.models.User.countDocuments({
              handle: value,
              // Don't match to current document
              // Would return a validation error if the value was not changed
              _id: {
                $ne:
                  // Handle update validation by checking for query scope
                  this[this instanceof mongoose.Query ? _conditions._id : _id],
              },
            });
            return !count;
          },
          msg: 'Username already taken!',
        },
      ],
    },
    displayName: String,
    avatar: String,
    googleId: String,
  },
  { timestamps: true }
);

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('User', userSchema);
