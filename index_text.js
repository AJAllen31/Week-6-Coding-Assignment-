const assert = chai.assert;

describe('MyFunctions', function() {
    describe('#shuffle', function() {
        it('Should return an array of 52 cards', function() {
            const deck = new Deck;
            let shuffle = deck.shuffle();
            assert.equal(shuffle.length, 52);
        });

        it('Should return an array that is not in the same order as the original', function() {
            const controlDeck = new Deck;
            const shuffledDeck = new Deck;
            shuffle = shuffledDeck.shuffle();
            assert.notEqual(shuffle, controlDeck.deck);
        });
    });
});