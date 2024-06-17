
// FUNZIONE PER CREAZIONE DI NUMERO RANDOM
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
