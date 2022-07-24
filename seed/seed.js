const { default: mongoose } = require("mongoose")
const Person = require("../models/person-info.model")

const dataToBeSeeded = [
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  }),
  new Person({
    firstName: "John",
    lastName: "Peter",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?k=20&m=1291318636&s=612x612&w=0&h=9W9vtNNYd8LHNeeM5_z8MUYX_HEKmbWIt6yU7wPoxrA="
  }),
  new Person({
    firstName: "Borris",
    lastName: "Gerrard",
    hairColor: 2,
    hairLength: 30,
    braSize: 0,
    profession: "actor",
    waistSize: 40,
    weight: 90,
    height: 182,
    castings: ["movies", "commercials"],
    dateOfBirth: new Date().toISOString(),
    picture:
      "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg"
  })
]

module.exports = dataToBeSeeded
