
var shoppingBasket = {
  groceries: [],
  clear: function() {
    this.groceries = [];
  },
  itemCount: function() {
    return this.groceries.length;
  },
  add: function(item) {
    this.groceries.push(item);
  }
}

module.exports = shoppingBasket;