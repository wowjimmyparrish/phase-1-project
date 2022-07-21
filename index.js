document.getElementById("get-random").addEventListener("click", getRandomDog);
document.getElementById("get-breed").addEventListener("click", searchByBreed);
document.getElementById("dark-light").addEventListener("click", toggleDarkMode);
document.getElementById("h1").addEventListener("mouseenter", mouseEnter);
function getRandomDog() {
  //clear previous image, if any
  document.getElementById("rando").replaceChildren();
  const randoContainer = document.getElementById("rando");
  //get random img from API
  fetch("https://dog.ceo/api/breed/hound/afghan/images/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //display image in DOM
      const img = document.createElement("img");
      img.src = data.message;
      randoContainer.append(img);
    });
}
function searchByBreed() {
  //clear previous image, if any
  document.getElementById("breed").replaceChildren();
  //grab input value
  const searchInput = document.getElementById("search-input").value;
  console.log(searchInput);
  const breed = document.getElementById("breed");
  //get images by breed
  fetch(`https://dog.ceo/api/breed/${searchInput}/images`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //console.log(data.message)
      if (data.status === "success") {
        data.message.forEach((element, index) => {
          if (index <= 2) {
            const img = document.createElement("img");
            img.src = element;
            breed.append(img);
          }
        });
      } else {
        console.log("inside else condition");
        const message = document.createElement("p");
        message.textContent = "BREED NOT FOUND";
        breed.append(message);
      }
    });
}
function toggleDarkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
function mouseEnter() {
  console.log("enter the mouse");
  const div = document.getElementById("mouse");
  const paragraph = document.createElement("p");
  paragraph.textContent = "FIND DOGGIES!";
  div.append(paragraph);
}
