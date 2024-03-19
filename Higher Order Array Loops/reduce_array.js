// reduce

const array = [1, 2, 3, 4, 5];

const finalArray = array.reduce((accumulator, value) => {
  console.log(`acc : ${accumulator} and currVal : ${value}`);
  return accumulator + value;
}, 0); // initial value for accumulator is 0. The value will be added and updated value will be pushed to accumulator.

console.log(finalArray);

// Example

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "python course",
    price: 999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data scientist course",
    price: 12999
  }
];

const finalShoppingCartData = shoppingCart.reduce((accumulator, items) => {
  return accumulator + items.price;
}, 0);

console.log(finalShoppingCartData);
