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

router.put('/instructor/:id', async(req, res, next)=> {
  try {
    const instr = await Instructor.findByPk(req.params.id);
    await instr.update(req.body);
    res.send(instr);
  }
  catch(ex){
    next(ex);
  }
});

router.post('/instructor/:id', async(req, res, next)=> {
  try {
    const instr = await Instructor.create(req.body);
    res.send(instr);
  }
  catch(ex){
    next(ex);
  }
});

router.delete('/instructor/:id', async(req, res, next)=> {
  try {
    await Instructor.destroy({ where: { id: req.params.id }})
    res.sendStatus(204);
  }
  catch(ex){
    next(ex);
  }
});


module.exports = router
