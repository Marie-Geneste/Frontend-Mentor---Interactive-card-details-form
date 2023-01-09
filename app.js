//dynamisation du nom
const inputNameElmt = document.getElementById("cardName");
const nameOnTheCard = document.querySelector(".card_name");
function handleKeyboardForName (event) {
    const keyValue = event.target.value;
    nameOnTheCard.innerHTML = keyValue;
};
inputNameElmt.addEventListener("keyup", handleKeyboardForName);


//dynamisation du numéro
const inputNumberElmt = document.getElementById("cardNumber");
const numberOnTheCard = document.querySelector(".card_number");
function handleKeyboardForNumber (event) {
    const keyValue = event.target.value;
    numberOnTheCard.innerHTML = keyValue;
};
inputNumberElmt.addEventListener("keyup", handleKeyboardForNumber);



//dynamisation de la date d'expiration
const inputMonthElmt = document.getElementById("month");
const monthOnTheCard = document.querySelector(".month");
function handleKeyboardForMonth (event) {
    const keyValue = event.target.value;
    monthOnTheCard.innerHTML = keyValue;
};
inputMonthElmt.addEventListener("keyup", handleKeyboardForMonth);

const inputYearElmt = document.getElementById("year");
const yearOnTheCard = document.querySelector(".year");
function handleKeyboardForYear (event) {
    const keyValue = event.target.value;
    yearOnTheCard.innerHTML = keyValue;
};
inputYearElmt.addEventListener("keyup", handleKeyboardForYear);



//dynamisation du cvc
const inputCvcElmt = document.getElementById("cvc");
const cvcOnTheCard = document.querySelector(".card_back_number");
function handleKeyboardForCvc (event) {
    const keyValue = event.target.value;
    cvcOnTheCard.innerHTML = keyValue;
};
inputCvcElmt.addEventListener("keyup", handleKeyboardForCvc);
