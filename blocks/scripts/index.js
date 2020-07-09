const openPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const form = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameInput = document.querySelector(".popup__text-name");
const jobInput = document.querySelector(".popup__text-job");
const submitPopupButton = document.querySelector(".popup__submit-button");




function openPopup() {
    popup.classList.add("popup_is-open");
    profileName.textContent =  nameInput.value;
    profileJob.textContent = jobInput.value;
}

openPopupButton.addEventListener("click",  openPopup);


function closePopup() {
    popup.classList.remove("popup_is-open");
}

closePopupButton.addEventListener("click", closePopup);

form.addEventListener("submit", function formSubmitHandler(event) {
    event.preventDefault();
    
    let name = nameInput.value;
    let job = jobInput.value;
    profileName.textContent = name;
    profileJob.textContent = job;

    submitPopupButton.addEventListener("click", closePopup);   
   
})


/*
openPopupButton.addEventListener("click", () => {
    popup.classList.add("popup_is-open");

})

closePopupButton.addEventListener("click", () => {
    popup.classList.remove("popup_is-open");

})

*/

