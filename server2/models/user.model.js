const { Schema, model } = require('mongoose')

const users = new Schema({
  name: { type: String, required: true },
  id: { type: String },
  lastname: { type: String, required: true },
  descriptions: [{ type: String }],
})

module.exports = model('user', users)
