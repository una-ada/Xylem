/**
 * Server configuration
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.3
 * @since 0.1.3
 */
import dotenv from 'dotenv';
dotenv.config()
import mongoose from 'mongoose';
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', function () {
  console.log(`Connected to MongoDB at ${this.host}:${this.port}`);
});
