const message = () => console.log(`I studying JavaScript !`);
message();
const memes1 = "./mem1.jpg";
const memes2 = "./mem2.jpg";

const gallertImage = document.getElementById("gallertImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentImage = memes1;

function changeImage (memes){
    gallertImage.src = memes;
}

nextButton.addEventListener("click", () => {
currentImage = memes2;
changeImage(currentImage);
});

prevButton.addEventListener("click", () => {
currentImage = memes1;
changeImage(currentImage);
});