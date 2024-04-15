const User = {
  _email: "js@gmail.com",
  _password: "12345",

  get email() {
    return this._email;
  },

  set email(value) {
    this._email = value;
  }
};

const data = Object.create(User);

console.log(data.email);
