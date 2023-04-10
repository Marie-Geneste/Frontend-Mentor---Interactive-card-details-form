// récupération de la valeur de l'input pour le champ du nom et mise en place sur la carte 
const inputNameElmt = document.getElementById("cardName");
const nameOnTheCard = document.querySelector(".card_name");
function handleKeyboardForName (event) {
    const keyValue = event.target.value;
    nameOnTheCard.textContent = keyValue;
};
inputNameElmt.addEventListener("keyup", handleKeyboardForName);


// récupération de la valeur de l'input pour le champ du numéro et mise en place sur la carte 
const inputNumberElmt = document.getElementById("cardNumber");
const numberOnTheCard = document.querySelector(".card_number");
function handleKeyboardForNumber (event) {
    const keyValue = event.target.value;
    //on enlève tous les espaces reçues et on en met un tous les 4 chiffres automatiquement grâce aux regex ci-après
    const formattedValue = keyValue.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ');
    numberOnTheCard.textContent = formattedValue;
};
inputNumberElmt.addEventListener("keyup", handleKeyboardForNumber);



// récupération de la valeur de l'input pour le champ du mois et de l'année et mise en place sur la carte 
const inputMonthElmt = document.getElementById("month");
const monthOnTheCard = document.querySelector(".month");
function handleKeyboardForMonth (event) {
    const keyValue = event.target.value;
    monthOnTheCard.textContent = keyValue;
};
inputMonthElmt.addEventListener("keyup", handleKeyboardForMonth);

const inputYearElmt = document.getElementById("year");
const yearOnTheCard = document.querySelector(".year");
function handleKeyboardForYear (event) {
    const keyValue = event.target.value;
    yearOnTheCard.textContent = keyValue;
};
inputYearElmt.addEventListener("keyup", handleKeyboardForYear);



//récupération de la valeur de l'input pour le champ du cdc et mise en place sur la carte 
const inputCvcElmt = document.getElementById("cvc");
const cvcOnTheCard = document.querySelector(".card_back_number");
function handleKeyboardForCvc (event) {
    const keyValue = event.target.value;
    cvcOnTheCard.textContent = keyValue;
};
inputCvcElmt.addEventListener("keyup", handleKeyboardForCvc);
