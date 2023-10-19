// RACCOLTA DATI
// DATI NOTI
const discounts = [0.20 , 0.40];

let disc18 = discounts.at();

let disc65 = discounts.at(1);
console.log(disc18, disc65);

const kmPrice = 0.21;
console.log(kmPrice);

// DATI IN INPUT DALL' UTENTE
let username = "";
let distance = "";
let userAge = "";
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", function() {
    let usernameInput = document.getElementById("name");
    let distanceInput = document.getElementById("distance");
    let ageInput = document.getElementById("age");

    let username = usernameInput.value;
    let distance = parseInt(distanceInput.value);
    let userAge = parseInt(ageInput.value);

    console.log("ok");
    console.log(username, distance, userAge);
})

console.log(username, distance, userAge);


// LOGICA DEL PROGRAMMA
