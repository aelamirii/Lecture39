(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['item_resolve'];
function MainShoppingListController(item_resolve) {

  var mainList = this;

  mainList.Items = item_resolve;

};


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
//
//   var mainList = this;
//
//   mainList.Items = [];
//
//   mainList.$onInit = function () {
//
//     ShoppingListService.getItems()
//     .then(function (result) {
//
//       mainList.Items = result;
//
//     });
//
//   };
//
// };



})();
