var shoppingBasket = require( "../shopping_basket");
var assert = require( "assert" );

describe("Shopping Basket", function(){
  var vegemite = {
    name: "vegemite",
    price: 1.95,
  };
  var jackDaniels = {
    name: "JD",
    price: 14.99
  };

  beforeEach(function(){
    shoppingBasket.clear();
  })
  it("Should have no items", function(){
    assert.equal(0, shoppingBasket.itemCount());
  })

})