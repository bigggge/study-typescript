/**
 * Created by xiepan on 2016/10/27.
 */

function add(x, y) {
    return x + y;
}

let myAdd = function (x, y) {
    return x + y;
};

let z = 100;
function addToZ(x, y) {
    return x + y + z;
}


function add2(x: number, y: number): number {
    return x + y;
}

let myAdd2 = function (x: number, y: number): number {
    return x + y;
};

let deck = {
    suit: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        //箭头函数的作用域 http://www.infoq.com/cn/articles/es6-in-depth-arrow-functions
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suit[pickedSuit], card: pickedCard % 13};
        }
    }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

