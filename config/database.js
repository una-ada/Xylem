/**
 * Server configuration
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.6
 * @since 0.1.3
 */

/*----- Imports --------------------------------------------------------------*/
import dotenv from 'dotenv';
import mongoose from 'mongoose';

/*----- Initialize -----------------------------------------------------------*/
dotenv.config()
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', function () {
  console.log(`Connected to MongoDB at ${this.host}:${this.port}`);
});
