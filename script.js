console.log("Hello World");

// PRIMÆRE DATATYPER
// String ""
string = "Hello";

// Number 10
number = 10;

// Boolean true/false
boolean = true;
boolean2 = false;

// VARIABLER
// let er en variabel som kan endre lagret informasjon
// let sayHello equals to Hello
let sayHello = "Hello";
sayHello = "Hi";
console.log(sayHello);

// const er en variabel som IKKE kan endre lagret informasjon
const sayGoodbye = "Goodbye";
// sayGoodbye = "Bye";
console.log(sayGoodbye);

// FUNKSJONER
// function er en blokk med kode som skal gjennomføres samtidig
function greeting() {
	// Mellom krøllparantesene skal en blokk med kode utføres
	let welcomeGreeting = "Welcome!";
	let guestName = "Julie";
	console.log(welcomeGreeting, guestName);
}
// function call for å aktivere funksjonen
// greeting();

// DOM MANIPULASJON
let button = document.querySelector("button");
console.log(button);

// En hendelse som lytter etter et klikk, og aktiverer en funksjon
button.addEventListener("click", greeting);

// En mer avansert måte å skrive en hendelse på som bruker arrow functions.
// button.addEventListener("click", () => {
// 	let welcomeGreeting = "Welcome!";
// 	let guestName = "Julie";
// 	console.log(welcomeGreeting, guestName);
// });

// DARK LIGHT MODE TOGGLE

// En funksjon som henter elementer fra HTML-dokumentet og modifiserer dem. Etterfulgt av en klikk hendelse som aktiverer funksjonen.
function darkLightMode() {
	let toggleButton = document.querySelector("#toggleButton");
	console.log(toggleButton);
	let body = document.querySelector("body");
	console.log(body);

	body.classList.toggle("dark");
}

toggleButton.addEventListener("click", darkLightMode);
