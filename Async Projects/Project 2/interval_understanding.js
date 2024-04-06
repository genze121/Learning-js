const sayHi = () => {
  console.log("Hello JavaScript", Date.now());
};

const interval = setInterval(sayHi, 1000); // setting the interval for every 1 sec.

clearInterval(interval); // stopping the interval
