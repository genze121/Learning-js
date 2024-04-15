class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const teacher = new Teacher("Teacher", "teacher@gmail.com", "12345");
teacher.addCourse();
teacher.logMe();

const user = new User("User");
user.logMe();

console.log(teacher === user);

console.log(teacher instanceof User);
