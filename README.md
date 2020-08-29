* --- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- -*
This README describes ./test/appTest.js
* --- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- -*
Importing neccessary variables and functions from respective folders and files.

´´´
const app is importing * from ./app.js
  const app = require('../app')
const assert is strictly importing assert() function from chai.js or ./node_modules/chai/chai.js
  const assert = require('chai').assert
  ´´´

describe functions takes in two parameters 1st is what'll the test modules should be called.
  describe('App', () => { it('App should return Hello', 

The second parameters is a function which returns an imported function called equal() from const assert.
The equal functions then take 2 argument/parameters from const app which imports it's function and variables from app.js
  () => { assert.equal(app.sayHello()
The 2nd arguments/parameters of equal function is wha the result should be strictly 
    ,'Hello') }) })

i.e assert.equal(app.SayHello() === 'Hello')

* --- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- -*
This README describes ./test.js
* --- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- -*



* --- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- -*

