const cat = document.querySelector(".cat");
const fox = document.querySelector(".fox");
const dog = document.querySelector(".dog");


const catBtn = document.querySelector(".get-cat");
const foxBtn = document.querySelector(".get-fox");
const dogBtn = document.querySelector(".get-dog");

catBtn.addEventListener("click", getRandomCat);
foxBtn.addEventListener("click", getRandomFox);
dogBtn.addEventListener("click", getRandomDog);

function getRandomCat() {
    fetch("https://aws.random.cat/meow")
        .then((response) => response.json())
        .then((responseData) => {
            cat.innerHTML = `<img src="${responseData.file}" />`;
        });
}

function getRandomFox() {
    fetch("https://randomfox.ca/floof/")
        .then((response) => response.json())
        .then((responseData) => {
            fox.innerHTML = `<img src="${responseData.image}" />`;
        });
}

function getRandomDog() {
    fetch("https://random.dog/woof.json")
        .then((response) => response.json())
        .then((responseData) => {
            dog.innerHTML = `<img src="${responseData.url}" />`;
        });
}
