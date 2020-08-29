//require('chai').assert means; import function assert from ./node_modules/chai.js
const app = require('../app')
// const app = require('../app').sayHello
const assert = require('chai').assert

describe('App', () => {
  it('App should return Hello', () => {
    let result = app.sayHello()
    assert.equal(result, 'Hello')
    //assert.equal(sayHello(),'Hello) //Only works if line 3 is uncommented
    //assert.equal(app.sayHello(),'Hello)
  })
})