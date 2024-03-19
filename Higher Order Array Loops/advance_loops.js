const coding = ["js", "ruby", "java", "python", "cpp"];

// Example - 1 => using foreach loop with function

coding.forEach(function (val) {
  console.log(val);
});

// Example - 2 => using foreach with arrow function

coding.forEach((element, index) => {
  console.log(`${index + ": " + element}`);
});

// Example - 3 => with function

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe); // just pass the reference of the function.

coding.forEach((element, index, arr) => {
  console.table([element, index, arr]);
}); // foreach takes multiple parameters too. [value,index,arr[]]

// Example - 4

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  },
  {
    languageName: "c++",
    languageFileName: "cpp"
  }
];

myCoding.forEach((element, index) => {
  if (
    element.languageName === "JavaScript" &&
    element.languageFileName === "js"
  ) {
    console.log("You selected javascript !!!");
  }
});