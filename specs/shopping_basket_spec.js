var assert = require('assert');
var basket = require('../shopping_basket');

describe('Shopping Basket', function(){
  it("Should find an empty basket without groceries", function(){
    assert.equal(0, basket.groceries);
  })
});