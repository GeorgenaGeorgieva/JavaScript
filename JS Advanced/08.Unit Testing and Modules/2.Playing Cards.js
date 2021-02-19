function cardFactory(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const Suits = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣'
    }

    if (!faces.includes(face.toUpperCase())) {
        throw new Error('Invalid face');
    }

    if (!Suits[suit.toUpperCase()]) {
        throw new Error('Invalid suit');
    }

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        toString() {
            return
        }
    }

    return `${face}${Suits[suit]}`;
}

console.log(cardFactory('10', 's'));