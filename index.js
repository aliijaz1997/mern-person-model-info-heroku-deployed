const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dataToBeSeeded = require("./seed/seed")
const Person = require("./models/person-info.model")
const path = require("path")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const mongooseConnection = mongoose.connection
mongooseConnection.once("open", () => {
  console.log("MongoDB Connected Successfully!")
})

const seeDataBase = async () => {
  await Person.deleteMany({})
  await Person.insertMany(dataToBeSeeded)
}

seeDataBase().then(() => {
  console.log("Data base is seeded !")
})
const personsRouter = require("./routes/persons")

app.use("/api/v1/persons", personsRouter)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./person-info-app-mern/build"))
  app.get("/*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "/person-info-app-mern/build", "index.html")
    )
  })
}
app.listen(port, () => {
  console.log(`Server is running at port number = ${port}`)
})
