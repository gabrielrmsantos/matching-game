// var cardIds = ['11', '12', '13', '14', '21', '22', '23', '24', '31', '32', '33', '34', '41', '42', '43', '44'];
// var cardTypes = [
//     {icon: '', color: '#b91a1a'},
//     {icon: '', color: '#ef7900'},
//     {icon: '', color: '#bf0073'},
//     {icon: '', color: '#7019d0'},
//     {icon: '', color: '#2226b3'},
//     {icon: '', color: '#32a26e'},
//     {icon: '', color: '#79bf0a'},
//     {icon: '', color: '#cec813'}
// ];
var flippedCards = [];

// function preparingCards(){

// }

function flipCard(idCard){
    flippedCards.push(idCard);
    var currentCard = document.getElementById(idCard);

    if(currentCard.classList.contains('flipped')){
        currentCard.classList.remove('flipped');
    } else{
        currentCard.classList.add('flipped');
    }

    // if(flippedCards.length === 2){
    //     compareCards();
    // }
}

// function compareCards(){
//     flippedCards = [];
// }