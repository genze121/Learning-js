// using Object literals

const user = {
  username: "JavaScript",
  loginCount: 10,
  signedIn: true,

  getUserDetails: function() {
    console.log("Got user details from the database");
    console.log(`${this.username} : ${this.loginCount} : ${this.signedIn}`);
    console.log(this); // refers to current context or the object
  }
};

console.log(user);

// using new keyword

const newUser = new Object();

newUser.username = "JavaScript";
newUser.loginCount = 15;
newUser.signedIn = false;

console.log(newUser);

console.log(user.getUserDetails());

console.log(this); // gets empty object in node but in browser we get the window object.

// ################################################################################ //

function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;

  return this;
}

// Here as we don't have new instance so the userData2 object will overwrite the userData1 object.
const userData1 = User("JS", 23, false);
const userData2 = User("Fanta aur JS", 53, true);
console.log(userData1); // here we will get userData2 object data, because it overwrites the userData1 to userData2.

console.log(userData1 === userData2); // true, because we have no instances.

// We have to use new keyword to create new instance so overwriting operation does not occur.
const userData3 = new User("JS", 23, false);
const userData4 = new User("Fanta aur JS", 53, true);
console.log(userData3);

console.log(userData1 === userData3); // false, because we have different instances.


const userData5 = User("JS", 23, false);
const userData6 = User("Fanta aur JS", 53, true);
console.log(userData5);