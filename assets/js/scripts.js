var cardIds = {'11': {}, '12': {}, '13': {}, '14': {}, '21': {}, '22': {}, '23': {}, '24': {}, '31': {}, '32': {}, '33': {}, '34': {}, '41': {}, '42': {}, '43': {}, '44': {}};
// var cardIds = ['11', '12', '13', '14', '21', '22', '23', '24', '31', '32', '33', '34', '41', '42', '43', '44'];

var cardClasses = [
    'MDAwMQ', 'MDAwMQ',
    'MDAwMg', 'MDAwMg',
    'MDAwMw', 'MDAwMw',
    'MDAwNA', 'MDAwNA',
    'MDAwNQ', 'MDAwNQ',
    'MDAwNg', 'MDAwNg',
    'MDAwNw', 'MDAwNw',
    'MDAwOA', 'MDAwOA'
];
var flippedCards = [];

var verifyingCards = false;
var movementCounter = 0;
var sorttedCards = [];

function preparingCards(){
    sorttedCards = [];
    var sorttedCardClasses = cardClasses;

    var cardElements = document.getElementsByClassName('gameCard');

    var i = 0;
    while(i < cardElements.length){
        var index = Math.floor(Math.random() * sorttedCardClasses.length);
        var filteredCards = sorttedCards.filter(function(value){ return value.class == sorttedCardClasses[index]; });

        if(filteredCards.length < 2){
            sorttedCards[cardElements[i].id] = { class: sorttedCardClasses[index]};
            i++;
        }
    }
}

function iterateMovementCounter(method){
    if(method === 'increase')
        movementCounter++;
    else if(method === 'reset')
        movementCounter = 0;
}

function flipCard(idCard){
    if(verifyingCards == false){
        var currentCard = document.getElementById(idCard);
        if(!currentCard.classList.contains('flipped')){
            iterateMovementCounter('increase');

            currentCard.classList.add(sorttedCards[idCard].class);
            currentCard.classList.add('flipped');
            flippedCards.push(idCard);
    
            if(flippedCards.length > 1){
                verifyingCards = true;
                setTimeout(function(){
                    compareCards();
                }, 600);
            }
        }
    }
}

function compareCards(){
    if(sorttedCards[flippedCards[0]].class != sorttedCards[flippedCards[1]].class){
        document.getElementById(flippedCards[0]).classList.remove('flipped');
        document.getElementById(flippedCards[1]).classList.remove('flipped');
    }

    flippedCards = [];    
    verifyingCards = false;
}

preparingCards();