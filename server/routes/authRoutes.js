const express = require('express');
const authRouter = express.Router();

// BOOKSHELF DATA MODELS
const Users = require('../db/models/Users.js')

// PASSPORT LIBRARY
const passport = require('passport')
const LocalStrategy = require('passport-local')

// BCRYPT LIBRARY
const bcrypt = require('bcrypt')
const saltRounds = 12;
// upon successful login, get user from database, save
// save user into Redis session store
passport.serializeUser((user, done) => {
  console.log('serializing user: ', user)
  done(null, {
    id: user.id,
    email: user.email,
    password: user.password
  })
})

// upon successful authorization request, take information from the session
// for example userId, to retrieve the user record from the db, and put it into req.user
passport.deserializeUser((user, done) => {
  console.log('deserializing users: ', user)
  done(null, {
    // id: user.attributes.id,
    // email: user.attributes.email
  })
})

// passport config
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  Users
    .where({ email })
    .fetch()
    .then((user) => {
      // WITHOUT BCRYPT //
      if (password === user.attributes.password) {
        done(null, user.attributes)
        console.log('SUCCESS!')
      } else {
        done(null, false)
        console.log('FAILURE!')
      }
      /// WITH BCRYPT //
      // if (password === user.attributes.password) {
      //   console.log(true)
      //   done(null, user.attributes)
      // bcrypt.compare(password, user.attributes.password)
      //   .then((result) => {
      //     console.log('passport localStrategy config result: ', result)
      //     if (result === true) {
      //       console.log('user has correct credentials')
      //       done(null, user.attributes)
      //     } else {
      //       console.log('user has incorrect credentials')
      //       done(null, false)
      //     }
      //   })
      //   .catch(err => {
      //     done(err)
      //   })
    })
    .catch((err) => {
      done(err)
    })
}))

// ROUTES
authRouter.get('/register', (req, res) => {
  res.json('get register page')
})

// register user new user and add them to the database
authRouter.post('/register', (req, res) => {

  const { name, last, email, password, phone, diet } = req.body;

  console.log('email: ', email)
  console.log('password', password)

  // const plainTextPassword = req.body.password;
  // console.log("PTP: ", plainTextPassword)

  // const encrypted = bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
  //   // Store hash in your password DB.
  //   console.log('req.body.password: ', req.body.password)
  //   console.log('encrypted: ', encrypted)
  // });

  bcrypt.genSalt(saltRounds)
    .then(salt => {
      console.log('salt: ', salt)
      return bcrypt.hash(password, salt)
    })
    .then(hash => {
      console.log('hash: ', hash)
      return Users
        .forge({
          name: name,
          last: last,
          email: email,
          password: hash,
          phone: phone,
          diet: diet
        })
        .save()
    })
    .then(user => {
      user = user.toJSON()
      res.json(user) // Never send the entire user object back to client! It has their password!
      // res.sendStatus(200)
      // res.redirect('/api/auth/secret')
    })
    .catch(err => {
      console.log('HASH ERROR: ', err)
      res.json(err)
    })

  // Users
  //   .forge(req.body)
  //   .save()
  //   .then(items => {
  //     res.json(items.serialize())
  //   })
  //   .catch(err => {
  //     console.log('err: ', err)
  //     res.json(err)
  //   })
})

authRouter.post('/login', passport.authenticate('local', { sucessRedirect: '/welcome', failureRedirect: '/' }), (req, res) => {
  console.log('USER AUTHENTICATED')
  // req.session.isAuthenticated = true;
  res.send('USER AUTHENTICATED')
});

// authRouter.post('/login/google', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//   console.log('GOOGLE AUTHENTICATION')
//   res.json('GOOGLE AUTHENTICATION')
// })

// logout user (implement res.redirect to /login page)
authRouter.get('/logout', (req, res) => {
  req.logout()
  console.log('USER LOGGED OUT')
  res.redirect('/')
})

// sanity check to test authentication
authRouter.get('/protected', (req, res) => {
  if (req.session.isAuthenticated) {
    res.json('USER HAS PERMISSIONS')
  }
  else {
    res.json('USER HAS NO PERMISSIONS')
  }
})

module.exports = authRouter;