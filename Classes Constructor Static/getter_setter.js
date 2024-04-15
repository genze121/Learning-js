class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(passwordValue) {
    this._password = passwordValue; // setting password using _password so that the maximum call stack size will not be filled.
  }

  get email() {
    return this._email;
  }

  set email(emailvalue) {
    this._email = emailvalue;
  }
}

const user = new User("js@gmail.com", "test");
console.log(user.password);
console.log(user.email);

// Note :- race condition between constructor and get - set begins and we will be eventually getting the error.
