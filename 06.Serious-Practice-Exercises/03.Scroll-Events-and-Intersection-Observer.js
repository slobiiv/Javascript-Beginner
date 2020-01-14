/* A scroll event is when somebody goes ahead and scrolls on the page, or scrolls inside of an element. */
/*
      A pretty common thing that I've had to code a couple times in my life, and I'm sure you'll have to code,
      is TERMS AND CONDITIONS, scroll to accept.
*/
console.log('it might works');
/*
      If you wanna listen for a window scroll event, you just listened for window dot addEventListener.
      But if it's the case of another element that has an overflow scroll set on it, like I have done with CSS right here,
      we have to select that element and listen for scroll on it.
*/
/*
       IntersectionObserver method is used to figure out if something is currently viewable on the page. IntersectionObserver is something that will watch if an element is on or off or partway on or off of the page.
 */
const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallback(payload) {
      if (payload[0].intersectionRatio === 1) {
            button.disabled = false;
            console.log('Removing Disabled');
            // stop observing the button
            ob.unobserve(terms.lastElementChild);
      }
      // else {
      // this is fun and maybe good looking for something else
      //       button.disabled = true;
      // }
}

const ob = new IntersectionObserver(obCallback, {
      root: terms,
      threshold: 1,
});

ob.observe(terms.lastElementChild);
console.log(terms.lastElementChild); // hr
