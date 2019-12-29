/* Make a div, Add a class of wrapper to it, Put it into a body: */
const mainDiv = document.createElement('div');
mainDiv.classList.add('wrapper');

document.body.appendChild(mainDiv);

/* Make un unordered list, add three list items with the words 'one','two','three', 
put that list in the above wrapper  */
const myUnorderedList = document.createElement('ul');
const myUnordredListItems = `
  <li>one</li>
  <li>two</li>
  <li>three</li>
`;
myUnorderedList.innerHTML = myUnordredListItems;
mainDiv.appendChild(myUnorderedList);

/* Create an 'image', set the 'source' to an image, set the width to '250',
add a class of 'cute', add an alt of 'Cute puppy' */
const img = document.createElement('img');
img.src = 'https://source.unsplash.com/random/';
img.width = 250;
img.classList.add('cute');
img.alt = 'Cute puppy';
mainDiv.appendChild(img);

/* With HTML String,
- make a div with two paragraphs inside of it.
- put this div before the unordered list from aboce
- add a class to the second paragraph called 'warning'
- remove the first paragraph
*/
