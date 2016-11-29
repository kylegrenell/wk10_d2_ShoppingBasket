var assert = require('assert');

describe('Water bottle', function() {
  beforeEach(function() {
    shoppingBasket.food = [];
  });
  describe('Shopping Basket', function(){
    it("should find the price of the Basket", function(){
      assert.equal(0, basket.purchases.length);
    });
  });