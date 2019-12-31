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
// mainDiv.innerHTML = myUnordredListItems; // How Wes Bos did it.
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
- 1) make a div with two paragraphs inside of it.
- 2) put this div before the unordered list from above
- 3) add a class to the second paragraph called 'warning'
- 4) remove the first paragraph
*/
// 1)
const myHTML = `
<div class="myDiv">
  <p>This is my first paragraph.</p>
  <p>This is my second paragraph with the class of warning.</p>
</div>
`;
// I don 't know how to traverse an element to the top of the 'div' element*
// 2) *** Wes Bos  method of positioning elements ***
const ulElement = document.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);
console.log(ulElement);

// 3) and 4) *** Wes Bos  method of adding class and removing element elements ***
const myDiv = document.querySelector('.myDiv');
myDiv.children[1].classList.add('warning'); // children property returns a COLLECTION of child elements. (WRITE IT DOWN!) Again, Wes Bos did it better
myDiv.firstElementChild.remove(); // myDivOfTwoParagraphs.querySelector('p').remove(); not the best way to remove an item (at least use class or id to get the element!)

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
  const html = `
  <div class='playerCard'>
  <h2>${name}  - ${age}</h2>
  <p>Their height are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
</div>
`;
  return html;
}
/* Not the best practice cause we dont know Arrays yet
1) Make a new div with a class of card,
2) Have that function make 4 cards
3) Append those cards to the div
4) put the div into the DOM just before the wrapper element
* Bonus, put a delete button on each card so when you click it, the whole card is removed.
 */
// 1)
const cards = document.createElement('div');
cards.classList.add('card');
// 2)
let cardsHTML = generatePlayerCard('wes', '35', 184);
cardsHTML += generatePlayerCard('slob', '31', 179);
cardsHTML += generatePlayerCard('relja', '1', 65);
cardsHTML += generatePlayerCard('sanela', '41', 164);
// 3)
cards.innerHTML = cardsHTML;
// 4)
myDiv.insertAdjacentElement('beforebegin', cards);
// Bonus:
// 1) select all buttons
const buttonDelete = document.querySelectorAll('.delete');
// 2) make a function to delete cards
function deleteCard(event) {
  const buttonClicked = event.currentTarget;
  // buttonClicked.parentElement.remove();
  buttonClicked.closest('.playerCard').remove(); // Using .closest, it will search for the div or any element that has a playerCard class and remove that.
}
// 3) loop over every button
buttonDelete.forEach(button => button.addEventListener('click', deleteCard));
