(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'Try3/ShoppingList/Templates/home.template.html'
  })

  .state('mainList', {
    url: '/main-List',
    templateUrl: 'Try3/ShoppingList/Templates/main-shoppingList.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      item_resolve: ['ShoppingListService', function (ShoppingListService) {
            return ShoppingListService.getItems();
      }]
    }

  })

.state('itemDetail', {
  url: '/item-detail/{itemId}',
  templateUrl: 'Try3/ShoppingList/Templates/item-detail.template.html',
  controller: 'ItemDetailController as itemdetail',
  resolve: {
    item_resolve: ['$stateParams', 'ShoppingListService', function ($stateParams, ShoppingListService) {
                 return ShoppingListService.getItems()
                .then(function (result) {
                    return result[$stateParams.itemId];
                })
    }]
  }
});


}










})();
