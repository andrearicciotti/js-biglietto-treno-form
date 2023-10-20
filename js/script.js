// RACCOLTA DATI
// DATI NOTI
const discounts = [0.20 , 0.40];

let disc18 = discounts.at();

let disc65 = discounts.at(1);
// console.log(disc18, disc65);

const kmPrice = 0.21;
// console.log(kmPrice);

// DATI IN INPUT DALL' UTENTE
const sendBtn = document.getElementById("send");
const usernameInput = document.getElementById("name");
const distanceInput = document.getElementById("distance");
const ageInput = document.getElementById("age");

sendBtn.addEventListener("click", function() {

    const username = usernameInput.value;
    const distance = parseInt(distanceInput.value);
    const userAge = parseInt(ageInput.value);

    // console.log(username, distance, userAge);
    if (isNaN(distance)) {
        alert(`"${distanceInput.value}" non e' un valore valido, riprova con un numero!`)
    } else if (isNaN(userAge)) {
        alert(`"${ageInput.value}" non e' un valore valido, riprova con un numero!`)
    } else {
        // console.log("ok");
        // console.log(username, distance, userAge);
    
    
        // LOGICA DEL PROGRAMMA
        const ticketPrice = distance * kmPrice;
        // console.log(ticketPrice);
        let finalPrice = ticketPrice.toFixed(2);
    
        if (userAge < 18) {
            finalPrice = (ticketPrice - (ticketPrice * disc18)).toFixed(2);
        } else if (userAge > 65) {
            finalPrice = (ticketPrice - (ticketPrice * disc65)).toFixed(2);
        }
        // console.log(finalPrice);

        const hidden = document.querySelector(".hidden");
        // console.log(hidden.classList);
        
        hidden.classList.remove("d-none");
        hidden.classList.add("d-block");
    
    
        // PREPARO IL MESSAGGIO
        document.getElementById("username").innerHTML = username;
        
        let ageType ="";
        if (userAge < 18) {
            ageType = "Under18"
        } else if (userAge > 65) {
            ageType = "Over65"
        } else {
            ageType = "Nessuna offerta"
        }
    
        // console.log(ageType);

        // OUTPUT MESSAGGIO
        document.getElementById("age-type").innerHTML = ageType;

        document.getElementById("final-price").innerHTML = finalPrice;

        const randomNumber = Math.floor(Math.random()*100);
        document.getElementById("random-place").innerHTML = `A-00${randomNumber}`;        
    }
})

// EVENTO TASTO CANCELLA
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function() {
    
    usernameInput.value = "";
    distanceInput.value = "";
    ageInput.value = "";

    const show = document.querySelector(".hidden");

    show.classList.add("d-none");
    show.classList.remove("d-block");
})



