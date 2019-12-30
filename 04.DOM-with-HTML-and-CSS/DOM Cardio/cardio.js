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
- put this div before the unordered list from above
- add a class to the second paragraph called 'warning'
- remove the first paragraph
*/
const myDivOfTwoParagraphs = document.createElement('div');
const myHTML = `
  <p>This is my first paragraph.</p>
  <p class="warning">This is my second paragraph with the class of warning.</p>
`;
myDivOfTwoParagraphs.innerHTML = myHTML;
mainDiv.appendChild(myDivOfTwoParagraphs);
myDivOfTwoParagraphs.querySelector('p').remove();
// I don 't know how to traverse an element to the top of the 'div' element

/* Create a function called generatePlayerCard that takes in three arguments:
  - name
  - age
  - height
  Have that function return HTML that looks like this:
  <div class='playerCard'>
    <h2>Name  - Age</h2>
    <p>They are height and age uears old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
  </div>
*/
function generatePlayerCard(name, age, height) {
  return `
  <div class='playerCard'>
  <h2>${name}  - ${age}</h2>
  <p>They are ${height}in height and ${age} years old. In Dog years this person would be ${age +
    7}. That would be a tall dog!</p>
</div>`;
}
/*
Make a new div with a class of card,
Have that function make 4 cards
Append those cards to the div
put the div into the DOM just before the wrapper element
* Bonus, put a delete button on each card so when you click it, the whole card is removed.
 */
