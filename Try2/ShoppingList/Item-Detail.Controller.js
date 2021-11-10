(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);



ItemDetailController.$inject = ['item_detail_resolve'];
function ItemDetailController(item_detail_resolve) {

  var item_detail = this;

  item_detail.name = item_detail_resolve.name;
  item_detail.quantity = item_detail_resolve.quantity;
  item_detail.description = item_detail_resolve.description;


}


})();
