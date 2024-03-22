// Using document

const useId = document.getElementById("title"); // access using the document id
console.log(useId.id); // to access id
console.log(useId.className); // to access class, we can't use class, in place of that we need to use className.

const useClass = document.getElementsByClassName("heading");
console.log(useClass); // gives html - collection

// accessing values

const dataOne = useId.innerText; // use to access the value.
console.log(dataOne);

const dataTwo = useId.innerHTML; // use to access the value and also html tags.
console.log(dataTwo);

const dataThree = useId.textContent; // use to access the values.
console.log(dataThree);

// using CSS to the document

useId.style.backgroundColor = "green";
useId.style.padding = "10px";
useId.style.borderRadius = "15px";
useId.style.fontSize = "40px";
useId.style.display = "block";
useId.style.textAlign = "center";
useId.style.fontFamily = "Garamond";
useId.innerHTML = "Hello JavaScript !!";

// using query selector & query selector all

const fetchData = document.querySelector("h1"); // gives first h1 tag.
console.log(fetchData);

const fetchUsingId = document.querySelector("#title");
console.log(fetchUsingId);

const myUl = document.querySelector("ul");
const liItems = myUl.querySelector("li"); // gives first tag i.e with li with one
console.log(liItems);

liItems.style.backgroundColor = "green";
liItems.style.padding = "10px";
liItems.style.borderRadius = "15px";

const allItems = document.querySelectorAll("li"); // gives nodeList, seems like array but it is not exactly an array.
console.log(allItems);

// access query selector all with the help of [] -> this tag giving the index value.

allItems[0].style.color = "red";

// using for each loop

allItems.forEach((element, index) => {
  if (element.innerHTML === "One") {
    element.style.color = "Purple";
  }

  if (element.innerHTML === "Two") {
    element.style.color = "Violet";
  }

  if (element.innerHTML === "Three") {
    element.style.color = "Yellow";
  }

  if (element.innerHTML === "Four") {
    element.style.color = "Red";
  }
});

// using class name

const items = document.getElementsByClassName("list-item"); // returns html collection, for each loop is not defined in class name html collection.
console.log(items);

// convert to array from html collection.

const convertToArray = Array.from(items);

convertToArray.forEach((element) => {
  element.style.backgroundColor = "orange";
  element.style.padding = "10px";
});
