const assert = require('assert'),
{ checkAge } = require('../blackjack')

describe('blackjack.js', function () {
  it('As 19 year im able to get in ', function () {
    assert.strictEqual(checkAge(19), 'Welcome to Blackjack!')

  })

  it('As 18 year im able to get in ', function () {
    assert.strictEqual(checkAge(18), 'Welcome to Blackjack!')
  
  })

  it('As 17 year im not able to get in ', function () {
    assert.strictEqual(checkAge(17), "You're not old enough")
  })

  it('As 16 year im not able to get in ', function () {
    assert.strictEqual(checkAge(17), "You're not old enough")
  })
  
})