class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }

  static createUserId() {
    return Math.floor(Math.random() * 10);
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const user = new User("Javascript");
console.log(user.createUserId());

const teacher = new Teacher("Javascript", "javascript@gmail.com");
teacher.logMe();
console.log(teacher.createUserId()); // as createUserId() is static in nature so it will not be accessible to any of the classes.
