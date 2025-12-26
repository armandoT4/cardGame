
var deck = [];

const createDeck = () => {
    if (deck && deck.length > 0) {
        return;
    }
    const cardSeed = ['denari', 'bastoni', 'spade', 'coppe'];
    const cardValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    cardSeed.forEach(seedElement => {
        cardValue.forEach(cardElement => {
            deck.push({ cardSeed: seedElement, cardValue: cardElement })
        })

    });
}

const shuffleDeck = () => {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }


}

const drawDeck = () => {
    if (deck.length > 0) {
        const card = deck.pop();
        return card
    }
    else return
}
const pushCard = (card) => {
    deck.unshift(card)
}
const getDeckLength = () => {
    return deck.length
}
export { createDeck, shuffleDeck, drawDeck, getDeckLength, pushCard };