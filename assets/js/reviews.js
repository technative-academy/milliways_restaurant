// find all testimonial elements
let testimonialElements = document.querySelectorAll(".testimonial");
console.log(testimonialElements);

// loop through all testimonial elements and perform a task for each element
testimonialElements.forEach(testimonialClickedListener);

// add an event listener to each testimonial element
function testimonialClickedListener(testimonialElement) {
  testimonialElement.addEventListener("click", elementClick);
}

// on click, do something with the selected element from the reviewObject
function elementClick(event) {
  let reviewObject = {
    dave: "'Would go back for the free bread alone.'",
    ragnar: "'So expensive, my wallet just filed for bankruptcy.'",
    brynhildr: "'Dinner here feels like a slow dance with flavors.'",
  };

  // find the HTML element that was clicked
  let clickedElement = event.currentTarget;

  let resultElement = document.querySelector("blockquote");
  resultElement.textContent = reviewObject[clickedElement.id];
  //   console.log(reviewObject[clickedElement.id]);
}
