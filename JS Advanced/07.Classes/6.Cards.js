(function() {
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }

    class Card {
        constructor(face, suit) {
            if (!Object.values(Suits).includes(suit)) {
                throw new Error('No suit!');
            }

            this.innerFace = face;
            this.innerSuit = suit;
        }

        get face() {
            return this.innerFace;
        }

        set face(f) {
            if (validFaces.includes(f.toString())) {
                this.innerFace = f;
            } else {
                throw new Error('This face does not exist!');
            }
        }

        get suit() {
            return this.innerSuit;
        }

        set suit(s) {
            if (Object.values(Suits).includes(s)) {
                this.innerSuit = s;
            } else {
                throw new Error('Invalid suit!');
            }
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}())