const dateValue = new Date();
console.log(dateValue.toString());
console.log(dateValue.toDateString());
console.log(dateValue.toLocaleString());

let myCreatedDate = new Date(2024, 0, 20);
console.log(myCreatedDate.toLocaleString());

let formatDate = new Date("10-02-2024");
console.log(formatDate.toLocaleString());

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
