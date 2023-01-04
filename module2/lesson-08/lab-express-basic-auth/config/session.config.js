const session = require('express-session')
const MongoStore = require('connect-mongo');

module.exports = (app) => {
    // req.session
    app.use(session({
        secret: 'super safe secret',
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ 
            mongoUrl: 'mongodb://127.0.0.1:27017/lab-express-basic-auth', // setting the connection string to save my store
            ttl: 24 * 60 * 60 // the time to live for my session
        }),
          cookie: {
            // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            // secure: process.env.NODE_ENV === 'production',
            // httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 60 * 1000 ms === 1 min
          }
      }))
}