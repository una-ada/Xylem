/**
 * Main server script.
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.6
 * @since 0.1.0
 */

/*----- Imports --------------------------------------------------------------*/
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import override from 'method-override';
import session from 'express-session';
import passport from 'passport';
import indexRouter from './routes/index.js';

/*----- Initialize -----------------------------------------------------------*/
// Infill for `__dirname`
// see: https://techsparx.com/nodejs/esnext/dirname-es-modules.html
const __dirname = path.dirname(new URL(import.meta.url).pathname),
  app = express();
import './config/database.js';
import './config/passport.js';

/*----- Middleware -----------------------------------------------------------*/
app.use(override('_method'));
app.use(logger('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(
  session({
    secret: 'temporary20210618',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

/*----- Routers --------------------------------------------------------------*/
app.use('/', indexRouter);
app.use('/user', usersRouter);

/*----- Error Handling -------------------------------------------------------*/
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

/*----- Exports --------------------------------------------------------------*/
export default app;
