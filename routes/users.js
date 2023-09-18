var express = require('express');
var router = express.Router();


let users = [{
  id: 1,
  lastName: "Le",
  firstName: "Dat"
},
{
  id: 2,
  lastName: "Le",
  firstName: "A"
}, 
// {
//   id: 3,
//   lastName: "Nguyen",
//   firstName: "B"
// }
];
/* GET users listing. */
router.get('/get-all', function (req, res, next) {
  res.json(users);
});

router.get('/get-by-id', function (req, res, next) {
  let id = req.query.id;
  let user = users.find(v => v.id == id);

  res.json(user);
});

module.exports = router;
