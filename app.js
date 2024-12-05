const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({ name: "Apple", rating: 7, review: "Pretty solid" });

//fruit.save();

const peopleSchema = new mongoose.Schema({ name: String, age: Number });

const Person = mongoose.model("Person", peopleSchema);

const person = new Person({ name: "John", age: 37 });

// person.save();

const kiwi = new Fruit({ name: "Kiwi", score: 10, review: "The best fruit" });

const orange = new Fruit({ name: "orange", score: 10, review: "Too sour" });

const banana = new Fruit({ name: "Banana", score: 9, review: "weird" });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success saved fruits");
//   }
// });

// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(fruits);
//   }
// });

Fruit.find({})
  .then((fruits) => {
    //console.log(fruits);
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
      mongoose.connection.close();
    });
  })
  .catch((err) => {
    console.error(err);
  });

// Object.values(Fruit).forEach((fruit) => {
//   console.log(fruit.name); // Logs: Apple, Banana, Cherry
// });
