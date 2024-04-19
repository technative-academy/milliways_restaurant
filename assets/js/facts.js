const toggleHides = () => {
  const element = document.getElementById("facts2");
  const button = document.getElementById("viewMore");
  if (button.innerHTML === "View more") {
    element.classList.remove("hide1");
    button.innerHTML = "View less";
  } else {
    element.classList.add("hide1");
    button.innerHTML = "View more";
  }
};

document.getElementById("viewMore").addEventListener("click", toggleHides);
