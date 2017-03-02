var suits = ['diamond', 'club', 'spade', 'heart'];
var numerals = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'jack': 10, 'queen': 10, 'king': 10};
var deck = [];
var dealt = 0;
var remain = 0;

function shuffle() {
    deck = []
    dealt = 0;
    var j = 0;
    var k = 0;
    var temp = null;
    
    for (i = 0; i < suits.length; i++) {
        $.each(numerals, function(numeral, value) {
            deck.push(numeral + '_' + suits[i]);
        })
    
    for (j = deck.length - 1; j > 0; j--) {
        k = Math.floor(Math.random() * (j + 1))
        temp = deck[j];
        deck[j] = deck[k];
        deck[k] = temp;
    }

    remain = deck.length;
    resetImage();
    updateDeck();
}
}

function deal() {
    if (deck.length == 0) {
        resetImage();
    }
    else {
        card = deck.pop()

        switch (card.split("_").pop()) {
            case 'spade':
            case 'club':
                $('#card_image').attr("fill","#000000");
                break;
        }

        dealt += 1;
        remain = deck.length;

        updateDeck();

        $('#card_image').attr("xlink:href","svg-cards-indented.svg#" + card);
    }
}

function resetImage() {
    $('#card_image').attr("xlink:href","svg-cards-indented.svg#back");
    $('#card_image').attr("fill","#800000");
}

function updateDeck() {
    $('#deck').html(dealt + " cards dealt, " + remain + " left.")
}

$(document).ready(function() {
    shuffle();
})

$('body').keyup(function(event) {
    if (event.keyCode == 32) {
        // Spacebar
        deal();
    }
})

$('#reset_corner').click(function() {
    shuffle();
})

$('#card').click(function() {
    deal();    
})