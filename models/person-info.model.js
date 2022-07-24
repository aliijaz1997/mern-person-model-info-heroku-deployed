const mongoose = require("mongoose")

const Schema = mongoose.Schema

const personSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    picture: { type: String, required: true },
    profession: { type: String, required: true },
    hairColor: { type: Number, required: true },
    hairLength: { type: Number, required: true },
    braSize: { type: Number, required: true },
    waistSize: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    castings: { type: [String], required: true }
  },
  {
    timestamps: true
  }
)

const Person = mongoose.model("Person", personSchema)

module.exports = Person
