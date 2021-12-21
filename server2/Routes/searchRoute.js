const route = require('express').Router()
const users = require('../models/user.model')

route.get('/allresults', async (req, res) => {
  const school = await School.find({}, { usersID: 0 })
  const company = await Company.find({}, { usersID: 0 })
  const organization = await Organization.find({}, { usersID: 0 })

  const all = [...school, ...company, ...organization]
  return res.send(all)
})

module.exports = route
