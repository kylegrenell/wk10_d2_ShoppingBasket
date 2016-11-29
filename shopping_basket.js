
var shoppingBasket = {
  groceries: [],
  clear: function() {
    this.groceries = [];
  },
  itemCount: function() {
    return this.groceries.length;
  }
}

module.exports = shoppingBasket;