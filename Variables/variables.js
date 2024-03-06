const accountId = 12345;
let accountEmail = "abc@gmail.com";
var accountPassword = "1234";
accountCity = "Delhi";
let accountState; // here accountState is not defined with any data so we will be getting undefined.

// accountId = 20000; // not allowed to update the data.

accountEmail = "check@mail.com";
accountPassword = "34562";
accountCity = "Bangalore";
console.log(
  accountEmail + " " + accountPassword + " " + accountCity + " " + accountState
);

/* Shows data in tabular format. */
//console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because of issue in block - scope and functional - scope.
*/
