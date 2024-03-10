const tinderUser = new Object();

console.log(tinderUser); // prints empty object {}

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sam",
      lastname: "Test"
    }
  }
}; // we can use nesting of objects

console.log(regularUser.fullname.userfullname);

const object1 = {
  1: "a",
  2: "b"
};

const object2 = {
  3: "a",
  4: "b"
};

const object3 = { object1, object2 }; // gives object of object.
console.log(object3);

const object4 = Object.assign(object1, object2); // use to assign the object in a single object.
console.log(object4); // gives us the one complete single object without nesting of objects.

// using spread operator.
const object5 = { ...object1, ...object2 };
console.log(object5);

// while operating with the database.
const users = [
  {
    id: 1,
    email: "abc@gmail.com"
  },
  {
    id: 2,
    email: "abc@gmail.com"
  }
];

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // checks whether object has the defined property or not.
