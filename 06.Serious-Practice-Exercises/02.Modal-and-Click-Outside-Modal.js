/* Select your elements */
const cardButtons = document.querySelectorAll('.card-button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  // We need to grab something to show in the modal
  const button = event.currentTarget;
  // The closes method is like querySelectorAll(but opposite cause it's climbs up) for closest card
  const card = button.closest('.card');
  // Grab img source
  const imgSrc = card.querySelector('img').src;
  // Grab description
  const desc = card.dataset.description;
  // Card heading with names
  const name = card.querySelector('h2').textContent;
  // Populate the MODAL with new info
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '800')}" alt="${name}" />
  <p>${desc}</p>
  `;

  // show modal
  modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}
/* The "CLICK OUTSIDE" Technique */
modalOuter.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.modal-inner');
  /* if you click on itself or anything inside of it, it will find the modalInner(true). Otherwise, displays null(false) */
  if (isOutside) {
    closeModal();
  }
  // console.log(isOutside);
});

// The ESC key method of closing Modal
window.addEventListener('keydown', function (event) {
  // this.console.log(event); for debug
  if (event.key === 'Escape') {
    closeModal();
  }
});
