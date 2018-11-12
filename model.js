const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/plantr')
module.exports = db

const Gardener = db.define('gardener', {
  name: {type: Sequelize.STRING},
  age: {type: Sequelize.INTEGER}
})

const Plot = db.define('plot', {
  size: {type: Sequelize.INTEGER},
  shaded: {type: Sequelize.BOOLEAN}
})

const Vegetable = db.define('vegetable', {
  size: {type: Sequelize.STRING},
  color: {type: Sequelize.STRING},
  'planted_On': {type: Sequelize.DATE}
})

// Friend.belongsToMany(Pug, {through: 'friendship'})
// Pug.belongsToMany(Friend, {through: 'friendship'})

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

Plot.belongsTo(Gardener, {as: 'gardener'})

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
