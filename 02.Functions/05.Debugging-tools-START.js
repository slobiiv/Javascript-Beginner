const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// 1.Console methods (BASIC - Wes is using these)
/*
    console.log();
    console.warn();
    console.error();
  * console.groupCollapsed(); .... ; console.groupEnd();helps when there is lot's of stuff to console.
    console.count(); counts how many times the function runs.
    console.table(); makes a table format out of data in console.
*/
function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  // doesntExist();
  return `Hello ${name}`;
}

function go() {
  debugger;
  const name = doctorize(greet('Slobodan'));
  console.log(name);
}

// 2. Callstack, Stack Trace - The stack trace will tell you what function called what function
/*
    THIS IS WHERE THE GOOD STUFF IS. IF YOU WANT TO KNOW WHAT WENT WRONG, YOU HAVE TO GET GOOD AT READING THESE CALL STACKS
    ReferenceError: doesntExist is not defined
    debugger eval code:25:3
    greet http://127.0.0.1:5500/02.Functions/05.Debugging-tools-START.js:25
    go http://127.0.0.1:5500/02.Functions/05.Debugging-tools-START.js:30
    <anonymous> debugger eval code:1
 */

// 3. Grabbing Elements (Handy one)
/*
    If you go on the website that you want to figure out how it works follow these steps:
      a) Enter the Developer mode CTRL+SHIFT+C
      b) Click on the element you want to debugg
      c) Select Console window(or CTRL+SHIFT+i), and type $0. It will copy the whole element data that's been selected previously. 0(zero) means the last element clicked...

    Inside console :
     $('p') will give us document.queryselector and that will match the first thing that matches the selector here('p').
     $$('p') will match all of the ones that match selector. It founds all of the paragraph tags, in this case.

*/

// 4. BREAKPOINTS
/*
    Using Debugger
*/

// 4. SCOPE

// 5. Network Request
// A dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

// 6. Break on Attribute

/* in 98% of debugging Wes  uses Network Request, Breakpoints, Console Methods  */

/* About the rest, it is good to know them and if you need them look up for them. */
