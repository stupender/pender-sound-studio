// DOM Bindings 
let aboutButton = document.querySelector(".about");
let contactButton = document.querySelector(".contact");
let teachingButton = document.querySelector(".teaching");
let personalButton = document.querySelector(".personal");
let collaborationButton = document.querySelector(".collaboration");

let aboutCard = document.querySelector(".about-container");
let contactCard = document.querySelector(".contact-container");
let teachingCard = document.querySelector(".teaching-container")
let personalCard = document.querySelector(".personal-container");
let collaborationCard = document.querySelector(".collaboration-container");

// Event Listeners
aboutButton.addEventListener("click", displayAbout);
contactButton.addEventListener("click", displayContact);
teachingButton.addEventListener("click", displayTeaching);
collaborationButton.addEventListener("click", displayCollaboration);
personalButton.addEventListener("click", displayPersonal);

// Functions
function displayAbout() {
    aboutCard.classList.toggle("show");
    aboutButton.classList.toggle("showing");
}

function displayTeaching() {
    teachingCard.classList.toggle("show");
    teachingButton.classList.toggle("showing");
}

function displayContact() {
    contactCard.classList.toggle("show");
    contactButton.classList.toggle("showing");
}

function displayCollaboration() {
    collaborationCard.classList.toggle("show");
    collaborationButton.classList.toggle("showing");
}

function displayPersonal() {
    personalCard.classList.toggle("show");
    personalButton.classList.toggle("showing");
}

displayAbout();