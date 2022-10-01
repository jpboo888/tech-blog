const router = require('express').Router();
const { User } = require('../../models');
 
router.post('/', (req, res) => {
 User.create({
   username: req.body.username,
   password: req.body.password
 })
   .then(dbUserData => {
     req.session.save(() => {
       req.session.userId = dbUserData.id;
       req.session.username = dbUserData.username;
       req.session.loggedIn = true;
 
       res.json(dbUserData);
     });
   })
   .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login', (req, res) => {
//find the user first, then check the password with user.checkPassword(req.body.password)
User.findOne({
  where: {
    username: req.body.username
  }
}) // fill in the rest of this code; validate the password, and save the user session, i.e req.session.save(()=> { req.session.userID = user.id…}  

router.post('/logout', (req, res) => {
if (req.session.loggedIn) {
  req.session.destroy(() => // fill in more code here});
})
module.exports = router;