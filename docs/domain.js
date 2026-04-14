import { GetNewDeck } from "./home-api.js";

export const MakeDeck = async () => {
    deck = await GetNewDeck();
} 

var deck;
var hand = [];

export const DrawCard = () => {
    hand.push(deck[Math.floor(Math.random() * deck.length)]);
}

export const RemoveCard = (e) => {
    const index = hand.findIndex(i => i.image === e.image);

    if (index > -1) {
    hand.splice(index, 1)
    }
}

export const GrabStackTop = () => {
    var Top = deck[Math.floor(Math.random() * deck.length)];
    return Top;
}

export const LogDeck = () => {
    console.log(deck)
}

export const GetHand = () => {
    return hand;
}