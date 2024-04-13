// 1st way to declare promise
const promiseOne = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("Task is completed successfully!!");
    resolve(); // If resolve is not used here then we will not be able to get the promise is consumed.
  }, 1000);
});

promiseOne.then(function() {
  console.log("Promise is consumed!!");
});

// 2nd way to declare promise
new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function() {
  console.log("Async task 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve({
      username: "JavaScript",
      email: "js@gmail.com"
    }); // We can send the data using resolve in object format
  }, 1000);
});

promiseThree.then(data => {
  console.log(`${data.username} ${data.email}`);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "JavaScript",
        password: "123"
      });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(data => {
    console.log(data);
    return data.username;
  })
  .then(username => {
    console.log(username);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "JS",
        password: "12345"
      });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  } // try - catch is basically used in async - await to handle the error gracefully.
}

consumePromiseFive();

// Getting the data using fetch ->> using try - catch
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

// Getting the data using fetch ->> using then() - catch()
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));
