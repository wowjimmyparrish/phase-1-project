document.getElementById("get-random").addEventListener("click", getRandomDog);
document.getElementById("get-breed").addEventListener("click", searchByBreed);
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