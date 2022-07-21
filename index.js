document.getElementById("get-random").addEventListener("click", getRandomDog);

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
