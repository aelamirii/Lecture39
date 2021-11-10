(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['item_resolve'];
function ItemDetailController(item_resolve) {

  var item_detail = this;

  item_detail.name_detail = item_resolve.name;
  item_detail.quantity_detail = item_resolve.quantity;
  item_detail.description_detail = item_resolve.description;

};



})();
