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
    templateUrl: 'Try1/ShoppingList/Templates/home.template.html'
  })

  .state('mainList', {
    url: '/main-List',
    templateUrl: 'Try1/ShoppingList/Templates/main-shoppingList.template.html',
    controller: 'MainShoppingListController as mainlist',
    resolve: {
      items_resolve: ['ShoppingListService', function (ShoppingListService) {
        return ShoppingListService.getItems();
      }]
    }

  })

  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'Try1/ShoppingList/Templates/item-detail.template.html',
    controller: 'ItemDetailController as itemdetail',
    resolve: {
      item_detail_resolve: ['$stateParams', 'ShoppingListService', function ($stateParams , ShoppingListService) {
          return ShoppingListService.getItems()
          .then(function (items) {
               return items[$stateParams.itemId];
          })
      }]
    }
  })

};



})();
