/*
Dess nedanstående funktionerna är mocha's rättelse funktioner medans require('../input') specifiera att den ska jämföra den här filen (input.spec.js) me filen utanför den här mappen (blackjack.js),
sen så ska input.js köras och jämför svaret med vad output.spec.js.
*/
const assert = require('assert'), //Om ett utryck blir 0 eller false så kommer programmet att stänga ner sig själv. Ett utryck i javascript kan vara "var","alert","if() { }","result = true".
  { createDeck, draw } = require('../input') //importera input.js och funktionerna draw(),createDeck().
  describe('input.js', function () { /*
  Describe i samband med it() utgör ett såkallade definering eller gruppering av vad det är mocha ska leta efter, i den ovanstående fallen så är det en fil och en function (input,js och function ())
  */
  it('produces a deck with a length of 52', function () { //it() anrop beskriver innehåller strängar som beskriver vad funktionen ska utföra, skriv på det viset att it("should say Hello World!")
    assert.strictEqual(createDeck().length, 52) /* if(createDeck.length === 52) {
      return;
    }*/
  })

  it('has a draw function which reduces the array length by 1', function () {
    const deck = createDeck() //const liknar variabel men kan ej ändras.
    draw(deck)
    assert.strictEqual(deck.length, 51)
  })
})