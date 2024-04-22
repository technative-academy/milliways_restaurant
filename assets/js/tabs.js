const IMAGES = [
  {
    src: "outdoor.jpg",
    alt: "A table and chairs floating in space",
  },
  {
    src: "port.jpg",
    alt: "A number of small spaceships inside a massive spaceship",
  },
  {
    src: "accommodation.jpg",
    alt: "A dystopian but slightly futuristic looking corridor filled with small sleeping capsules",
  },
  {
    src: "chess.jpg",
    alt: 'A chess board in space with a banner at the bottom reading "End-of-time Chess".',
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
