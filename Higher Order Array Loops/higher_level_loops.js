const coding = ["js", "py", "java"];

const result = coding.forEach((element) => {
  console.log(element);
});

console.log(result); // foreach loop doesn't return anything, so it gives undefined.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((element) => element > 4);
console.log(newNums);

const resultData = myNums.filter((element) => {
  element > 4;
});

console.log(resultData); // outputs empty array as [].

const finalData = myNums.filter((element) => {
  return element > 4;
});

console.log(finalData);

// using for each with if condition if we don't want to use filter

const newArr = [];
myNums.forEach((element) => {
  if (element > 4) {
    newArr.push(element);
  }
});

console.log(newArr);

// Eaxmple to understand more clearly

const books = [
  {
    title: "Book One",
    genre: "History",
    publish: 1987,
    edition: 1987
  },
  {
    title: "Book Two",
    genre: "Geography",
    publish: 2000,
    edition: 2000
  },
  {
    title: "Book Three",
    genre: "Maths",
    publish: 1980,
    edition: 2000
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: 2000,
    edition: 2009
  },
  {
    title: "Book Five",
    genre: "Economics",
    publish: 1976,
    edition: 1990
  },
  {
    title: "Book Six",
    genre: "History",
    publish: 2000,
    edition: 2010
  }
];

const filterData = books.filter((element) => element.genre === "History");
console.log(filterData);

const publishData = books.filter((element) => {
  return element.publish > 1980;
});

console.log(publishData);

const newfilteredData = books.filter((element) => {
  return element.publish > 1980 && element.genre === "History";
});

console.log(newfilteredData);

const bookData = books.filter((element) => element.title === "Book One");
console.log(bookData);
