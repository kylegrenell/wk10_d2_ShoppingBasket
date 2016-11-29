var shoppingBasket = require( "../shopping_basket");
var assert = require( "assert" );

describe("Shopping Basket", function(){
  var vegemite = {
    name: "vegemite",
    price: 1.95,
  };
  var JD = {
    name: "Jack Daniels",
    price: 14.99
  };
  var irnBru = {
    name: "Irn Bru",
    price: 1
  };
  var chicken = {
    name: "Chicken",
    price: 5.75
  };

  beforeEach(function(){
    shoppingBasket.clear();
  })
  it("Should have no items in basket", function(){
    assert.equal(0, shoppingBasket.itemCount());
  })
  it("Should add items to basket", function(){
    shoppingBasket.add(vegemite);
    assert.equal(1, shoppingBasket.itemCount());
  })
  it("Should take several items", function(){
    shoppingBasket.add(vegemite);
    shoppingBasket.add(JD);
    shoppingBasket.add(chicken);
    shoppingBasket.add(irnBru);
    assert.equal(4, shoppingBasket.itemCount());
  })



})