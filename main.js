const buttonContainer = document.getElementById("buttonContainer");
let screenHeight = window.screen.height;
let screenWidth = window.screen.width;

buttonContainer.addEventListener("mouseover", function() {
    let randomHeight = Math.floor(Math.random() * (screenHeight - 400));
    let randomWidth = Math.floor(Math.random() * (screenWidth - 400));
    buttonContainer.style.top = `${randomHeight}px`;
    buttonContainer.style.left = `${randomWidth}px`;
})

window.addEventListener("resize", function() {
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;
})