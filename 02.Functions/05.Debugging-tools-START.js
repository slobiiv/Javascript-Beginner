const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console methods (BASIC - Wes is using these)
/*
    console.log();
    console.warn();
    console.error();
  * console.groupCollapsed(); .... ; console.groupEnd();helps when there is lot's of stuff to console.
    console.count(); counts how many times the function runs.
    console.table(); makes a table format out of data in console.
*/
