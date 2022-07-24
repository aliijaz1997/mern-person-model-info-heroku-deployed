const router = require("express").Router()
let Person = require("../models/person-info.model")

router.route("/").get((req, res) => {
  Person.find()
    .then(person => res.json(person))
    .catch(err => res.status(400).json("Error Occured is " + err))
})

router.route("/add").post((req, res) => {
  firstName = req.body.firstName
  lastName = req.body.lastName
  picture = req.body.picture
  profession = req.body.profession
  hairColor = req.body.hairColor
  hairLength = req.body.hairLength
  braSize = req.body.braSize
  waistSize = req.body.waistSize
  height = req.body.height
  weight = req.body.weight
  dateOfBirth = req.body.dateOfBirth
  castings = req.body.castings

  const newPerson = new Person({
    firstName,
    lastName,
    picture,
    profession,
    hairColor,
    hairLength,
    braSize,
    waistSize,
    height,
    weight,
    dateOfBirth,
    castings
  })

  newPerson
    .save()
    .then(addedPerson => res.json("Person added!"))
    .catch(err => res.status(400).json("Error Occured is " + err))
})

module.exports = router
