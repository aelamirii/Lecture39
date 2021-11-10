(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['item_detail_resolve'];
function ItemDetailController(item_detail_resolve) {

  var itemDetail = this;

  itemDetail.name = item_detail_resolve.name;
  itemDetail.quantity = item_detail_resolve.quantity;
  itemDetail.description = item_detail_resolve.description;

}


})();
