const Sequelize = require("sequelize") //for things like Sequelize.STRING
//import your db
const db = require('../db')
//define your model
const Instructor = db.define('example', {
  name: Sequelize.STRING,
  glasses: Sequelize.BOOLEAN,
  facialHair: Sequelize.STRING,
  hair: Sequelize.STRING,
  shirt: Sequelize.STRING
})

//define any class or instance methods

//export your model
module.exports = Instructor
