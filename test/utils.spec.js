const assert = require('assert'),
{ checkAge } = require('../utils/utils.js')

describe('blackjack.js', function () {  //"describe" grupperar en eller flera tester 
  it('Check if user is abve/or 18 years old,otherwise throw error', function () { //Varje test skapas med ett "it" anrop, som beskriver testen
    assert(checkAge() >= 18, 19) //och en testfunktion.
  })
})