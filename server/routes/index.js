const router = require("express").Router()
const Instructor = require('../db/models/Instructor')

//routes go here
router.get('/instructor', async (req, res, next)=> {
  try {
    res.send(await Instructor.findAll());
  }
  catch(ex){
    next(ex);
  }
});

router.get('/instructor/:id', async (req, res, next)=> {
  try {
    res.send(await Instructor.findByPk(req.params.id));
  }
  catch(ex){
    next(ex);
  }
});

module.exports = router
