const randomBtn = document.getElementById('get-random').addEventListener('click',getRandomDog)
const searchBreedBtn = document.getElementById('get-breed').addEventListener('click', searchByBreed)
const darkLightToggle = document.getElementById('dark-light').addEventListener('click', toggleDarkMode)

function getRandomDog(){
    fetch("https://dog.ceo/api/breed/hound/afghan/images/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('random-img').src = data.message
    })
}

function searchByBreed(){
    const searchInput = document.getElementById('search-input').value;
    console.log(searchInput)
    
    fetch(`https://dog.ceo/api/breed/${searchInput}/images`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('breed-img').src = data.message[0]
    })

}

function toggleDarkMode(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    
}
