import { GetNewDeck } from "./home-api.js";

export const MakeDeck = async () => {
    deck = await GetNewDeck();
} 

var deck;
var hand = [];

export const DrawCard = () => {
    hand.push(deck[Math.floor(Math.random() * deck.length)]);
}

export const LogDeck = () => {
    console.log(deck)
}

export const GetHand = () => {
    return hand;
}