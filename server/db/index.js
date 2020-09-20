//import your db
const db = require('./db')
//import your models
const Instructor = require('./models/Instructor')
//state your model associations (hasOne etc)

//export your db and Models (so they all can be imported from a single central location)
module.exports = {
  db,
  Instructor
}

// name: Sequelize.STRING,
// glasses: Sequelize.BOOLEAN,
// facialHair: Sequelize.STRING,
// hair: Sequelize.STRING,
// shirt: Sequelize.STRING
const syncAndSeed = async()=> {
  await db.sync({ force: true });

  let instructors = [
    {
      name: "Prof",
      glasses: false,
      facialHair: 'goatee',
      hair: 'none',
      shirt: 'turtleneck'
    },
    {
      name: "Stanley",
      glasses: true,
      facialHair: 'none',
      hair: 'dark',
      shirt: 't-shirt'
    },
    {
      name: "Peet",
      glasses: true,
      facialHair: 'none',
      hair: 'blue',
      shirt: 't-shirt'
    },
    {
      name: "Ben",
      glasses: true,
      facialHair: 'none',
      hair: 'dark',
      shirt: 'colorful'
    }
  ];

  instructors = await Promise.all(instructors.map(instructor => Instructor.create(instructor)));

  return {
    instructors,
  }
};

module.exports = {
  Instructor,
  syncAndSeed
}
