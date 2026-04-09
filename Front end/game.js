import { LogDeck, GetHand, DrawCard, MakeDeck } from "./domain.js";

const OnOpen = async () => {
await MakeDeck();
LogDeck();
DrawCard();
DrawCard();
DrawCard();
DrawCard();
DrawCard();

displayHand();
}


const displayHand = () => {
    const displayHandElement = document.getElementById('Hand-Display')
    const hand = GetHand();
    hand.forEach((e) => {
        const card = document.createElement('img')
        card.src = `${e.image}`;
        card.classList.add('card');

        

        displayHandElement.appendChild(card);
    });
};


OnOpen();
