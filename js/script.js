// RACCOLTA DATI
// DATI NOTI
const discounts = [0.20 , 0.40];

let disc18 = discounts.at();

let disc65 = discounts.at(1);
console.log(disc18, disc65);

const kmPrice = 0.21;
console.log(kmPrice);

// DATI IN INPUT DALL' UTENTE
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", function() {
    const usernameInput = document.getElementById("name");
    const distanceInput = document.getElementById("distance");
    const ageInput = document.getElementById("age");

    const username = usernameInput.value;
    const distance = parseInt(distanceInput.value);
    const userAge = parseInt(ageInput.value);

    console.log("ok");
    console.log(username, distance, userAge);


    // LOGICA DEL PROGRAMMA
    const ticketPrice = distance * kmPrice;
    console.log(ticketPrice);
    let finalPrice = "";

    if (userAge < 18) {
        finalPrice = (ticketPrice - (ticketPrice * disc18)).toFixed(2);
    } else if (userAge > 65) {
        finalPrice = (ticketPrice - (ticketPrice * disc65)).toFixed(2);
    }

    finalPrice = parseInt(finalPrice);
    console.log(finalPrice);
})




