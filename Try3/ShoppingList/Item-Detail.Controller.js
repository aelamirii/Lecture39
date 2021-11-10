(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['item_resolve'];
function ItemDetailController(item_resolve) {

  var item_detail = this;

  item_detail.name = item_resolve.name;
  item_detail.quantity = item_resolve.quantity;
  item_detail.description = item_resolve.description;

}



})();
