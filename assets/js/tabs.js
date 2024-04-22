const IMAGES = [
  {
    src: "outdoor.jpg",
    alt: "A table and chairs floating in space",
  },
  {
    src: "port.jpg",
    alt: "A table and chairs floating in space",
  },
  {
    src: "accommodation.jpg",
    alt: "A table and chairs floating in space",
  },
  {
    src: "chess.jpg",
    alt: "A table and chairs floating in space",
  },
];

let selected = 0;
const img = document.querySelector(".tabs-img");
const buttons = document.querySelectorAll(".tabs-buttons button");
for (let buttonID = 0; buttonID < buttons.length; buttonID++) {
  const button = buttons[buttonID];
  button.addEventListener("click", () => {
    selected = buttonID;
    render();
  });
}

function render() {
  const imgInfo = IMAGES[selected];
  img.src = `./assets/imgs/tabs/${imgInfo.src}`;
  img.alt = imgInfo.alt;
}
render();
