//
//  Destruction
//

// const person = {
//   name: "Andrew",
//   age: 27,
//   location: {
//     city: "Philadelphia",
//     temp: 92
//   }
// };

// // const name = person.name;
// // const age = person.age;

// //POSSO SETTEARE UN VALOR￼E DI DEFAULT
// const { name: firstname = "Anonymous", age } = person;
// console.log(`${firstname} is ${age}. `);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Pinguin"
  }
};

const { name: publisherName = "Self-Publish" } = book.publisher;

console.log(publisherName); //Pinguin, Self-Publish

//
//  Array Distraction
//

const address = [
  "1299 S Jupiter Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];

const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
