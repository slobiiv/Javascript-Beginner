// FIRST type of Scope : GLOBAL VARIABLES

/*
  Global variables refer to all varaibles written outside of any code block and you can access them from any other JavaScript that's running on the page, script tag or console .
*/
/* eslint-disable */
const cool = true;
let first = 'Slobodan';
var second = '100';
/*
    They are all global objects but 'var' is attached to window scope
    (only window.second will display a value, other are undefined). But don't sweat it. You don't need to use that
*/

function sayHi() {
  console.log('Hiiii!');
}
// window.sayHi();
/*
Anything that is in the global scope is attached to the window object with the exeption of 'let' and 'const' varaibles
*/



// SECOND type of Scope : FUNCTION VARIABLES

/* When variables are created inside of a function those variables are only ever available inside of that function */
const age = 100;
function go() {
  const hair = 'blonde';
}
console.log(age); // 100
console.log(hair); // ReferenceError: hair is not defined
go();



// THIRD type of Scope : BLOCK VARIABLES
/* Whenever you have a set of curly brackets that referrs to a block. Common example is a 'if statement' */
/* So 'let' and 'const' behaves same way as in functions. So if we want to access the var from the block scope, we need to declare it first globally, updated inside the {curly braces} and then we can access. */
let pretty = false;
if (1 === 1) {
  pretty = true;
}
console.log(cool);

function isCool(name) {
  let cool = false;
  if (name === 'wes') {
    cool = true;
  }
  return cool;
}