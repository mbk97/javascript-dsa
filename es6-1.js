// ! VAR declaration

// ** Essentially, before any JavaScript code is executed, all variables declared with var are "hoisted", which means they're raised to the top of the function scope.

// ! Example

// ** Before run time
// function getClothing(isCold) {
//   if (isCold) {
//     var freezing = "Grab a jacket!";
//   } else {
//     var hot = "It’s a shorts kind of day.";
//     console.log(freezing);
//   }
// }

// ** At run time
function getClothing(isCold) {
  var freezing, hot;
  if (isCold) {
    freezing = "Grab a jacket!";
  } else {
    hot = "It’s a shorts kind of day.";
    console.log(hot);
  }
}

// ! let AND const

// ** Variables declared with let and const eliminate this specific issue of hoisting because they’re scoped to the block, not to the function.

// ** If a variable is declared using let or const inside a block of code (denoted by curly braces { }), then the variable is stuck in what is known as the  temporal dead zone until the variable’s declaration is processed.

// !! A temporal dead zone (TDZ) is the block where a variable is inaccessible until the moment the computer initializes it with a value
// *Example
{
  console.log(greet);
  let greet = "hello";
}

// !! Use the LET when you plan to reassign new values to a variable
let namez = "Samuel";
namez = "Ridwan";

// !! Use the CONST when you don’t plan on reassigning new values to a variable.
const gg = "Samuel";
gg = "Ridwan";
// ** This code will thrown an error

// !! TEMPLATE LITERALS
// ** This is a new way to concatenate strings together

const student = {
  name: "Richard Kalehoff",
  guardian: "Mr. Kalehoff",
};

const teacher = {
  name: "Mrs. Wilson",
  room: "N231",
};
const message = `Dear ${student.name}, ${teacher.name} said your guardian ${student.guardian} is waiting for you in room ${teacher.room}`;

console.log(student);

// console.log("hello");
