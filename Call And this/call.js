function setUserName(username) {
  this.username = username;
  console.log("CALLED");
}

function createUser(username, email, password) {
  // here this is used to set the current execution context. call is generally used to hold the reference from the setUserName function to the current execution context.
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const user = new createUser("JS", "js@gmail.com", "12345");
console.log(user);
