// Introduced in ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abcd`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const user = new User("Js", "js@gmail.com", "12345");
console.log(user);
console.log(user.encryptPassword());
console.log(user.changeUserName());

// behind the scenes

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.changeUserName = function() {
  return `${this.username.toUpperCase()}`;
};

User.prototype.encryptedPassword = function() {
  return `${this.password}abcde`;
};

const newUser = new User("Javascript", "js@gmail.com", "12345");
console.log(newUser);
console.log(newUser.changeUserName());
console.log(newUser.encryptedPassword());
