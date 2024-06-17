

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Visualizzare in pagina 5 numeri casuali.

// collego la ul
const ulContainer = document.querySelector('.casualnumbers');

// creo degli elementi figli li
let liElement;

// creo array contenitori array dei numeri del pc e dell'utente
const pcNumbers=[];
const userNumbers=[];

// creo un ciclo for per inserire gli elementi li all'interno del ul
for(let i = 1; i <= 5; i++){
    let liElement= document.createElement('li');
    // lo aggiungo all'iterno della ul
    ulContainer.appendChild(liElement);
    // inserisco i numeri generati casualmente dentro i li
    let rNumber = generateRandomNumber(1,100);
    liElement.innerHTML= rNumber;
    // pusho i risultati nell'array
    pcNumbers.push(rNumber)
}

// Da lì parte un timer di 30 secondi.

// rendo invisibili i numeri
setTimeout(
    function(){
        ulContainer.classList.add('dnone');
        
        // chiedo i numeri all'utente
        setTimeout(
            function(){
                for (let i = 1; i <= 5; i++){
                    let input= parseInt(prompt('inserisci i numeri che hai letto!'));
                    userNumbers.push(input);
                    console.log(input)
                }
            }
            
        , 1);
    }
    
, 3000);


console.log(pcNumbers);


    

// creo il timer con il prompt

