/* switch (key) {
    case value:
        
        break;

    default:
        break;
}
Syntax for writing switch statements in JS.
*/

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Invalid Month");
    break;
}

// Using String

const newMonth = "March";
updatedMonth = newMonth.toLowerCase();

switch (updatedMonth) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "march":
    console.log("March");
    break;
  default:
    console.log("Invalid Month");
    break;
}
