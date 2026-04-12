import { LogDeck, GetHand, DrawCard, MakeDeck, GrabStackTop, RemoveCard } from "./domain.js";

const displayHandElement = document.getElementById('Hand-Display')
const PlaystackElement = document.getElementById('Play-Card')
const DrawStackElement = document.getElementById('Draw-Card')

PlaystackElement.addEventListener('dragover', (e) => {
    e.preventDefault();
})

PlaystackElement.addEventListener('drop', (e) => {
    e.preventDefault();
    const card = e.dataTransfer.getData("text/plain");
    const cardElements = card.split(",");
    const formatCard = {
        number: cardElements[0],
        color: cardElements[1],
        image: cardElements[2],
    }

    if(formatCard.number === PlaystackElement.number || formatCard.color === PlaystackElement.color)
    {
        setStackTop(formatCard);
        RemoveCard(formatCard);
        displayHand();
    }
})

const OnOpen = async () => {
await MakeDeck();
LogDeck();

DrawCard();
DrawCard();
DrawCard();
DrawCard();
DrawCard();

const card = GrabStackTop()
setStackTop(card);

displayHand();
}

DrawStackElement.addEventListener("click", ()=> {
    DrawCard();
    displayHand();
})

const displayHand = () => {
    const hand = GetHand();
    displayHandElement.replaceChildren();
    hand.forEach((e) => {

        const card = document.createElement('img')
        card.draggable = true;
        card.src = `${e.image}`;
        card.classList.add('card');
        displayHandElement.appendChild(card);

        card.addEventListener('dragstart', (event) => {
            // console.log("Drag start")
            // console.log(`${e.number},${e.color},${e.image}`)
            event.dataTransfer.setData("text/plain", `${e.number},${e.color},${e.image}`)
        })
    });
};

const setStackTop = (e) => {
    PlaystackElement.src = e.image;
    PlaystackElement.number = e.number;
    PlaystackElement.color = e.color;
}


OnOpen();
