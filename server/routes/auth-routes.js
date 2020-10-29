const passport = require('passport');
const router = require('express').Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:3000/waiting-room');
});

module.exports = router;
