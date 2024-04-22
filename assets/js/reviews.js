let testimonialElements = document.querySelectorAll(".testimonial");
console.log(testimonialElements);

testimonialElements.forEach(testimonialClickedListener);

function testimonialClickedListener(testimonialElement) {
  testimonialElement.addEventListener("click", elementClick);
}

function elementClick(event) {
  let reviewObject = {
    dave: "'Would go back for the free bread alone.'",
    ragnar: "'So expensive, my wallet just filed for bankruptcy.'",
    brynhildr: "'Dinner here feels like a slow dance with flavors.'",
  };

  let clickedElement = event.currentTarget;

  let resultElement = document.querySelector("blockquote");
  resultElement.textContent = reviewObject[clickedElement.id];
}
