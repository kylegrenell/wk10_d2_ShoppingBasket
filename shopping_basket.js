
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
  },
  remove: function(item) {
   var i = this.groceries.indexOf(item);
   this.groceries.splice(i, 1);
 },
 sum: function() {
   var sum = 0;
   for(var i = 0; i < this.itemCount(); i++){
     return sum;
   }
 }
}

module.exports = shoppingBasket;