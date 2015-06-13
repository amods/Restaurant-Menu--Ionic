// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
        $rootScope.givenData = {
            "data": [
                {
                    "category": "Chef's Special",
                    clicked:false,
                    "items": [
                        {
                            "id": "100",
                            "name": "test1",
                            "rating": "4",
                            "price": "100",
                            "type": "veg",
                            "description": "test menu item 1"
                        },
                        {
                            "id": "101",
                            "name": "test2",
                            "rating": "3",
                            "price": "120",
                            "type": "non-veg",
                            "description": "test menu item 2"
                        }
                    ]
                },
                {
                    "category": "Kababs",
                    clicked:false,
                    "items": [
                        {
                            "id": "102",
                            "name": "Paneer Tikka",
                            "rating": "5",
                            "price": "125",
                            "type": "veg",
                            "description": "Fresh paneer marinated in curd and spices"
                        },
                        {
                            "id": "103",
                            "name": "Kurkure Seekh Kabab",
                            "rating": "3",
                            "price": "135",
                            "type": "non-veg",
                            "description": "Kabab"
                        }
                    ]
                },
                {
                    "category": "Lunch Menu",
                    clicked:false,
                    "items": [
                        {
                            "id": "200",
                            "name": "Lunch Item1",
                            "rating": "2",
                            "price": "200",
                            "type": "veg",
                            "description": "Lunch test menu item 1"
                        },
                        {
                            "id": "201",
                            "name": "Lunch Item2",
                            "rating": "5",
                            "price": "220",
                            "type": "veg",
                            "description": "Lunch test menu item 2"
                        }
                    ]
                },
                {
                    "category": "Main Course",
                    clicked:false,
                    "items": [
                        {
                            "id": "300",
                            "name": "test300",
                            "rating": "4",
                            "price": "100",
                            "type": "veg",
                            "description": "test menu item 300"
                        },
                        {
                            "id": "301",
                            "name": "test 301",
                            "rating": "3",
                            "price": "120",
                            "type": "non-veg",
                            "description": "test menu item 301"
                        }
                    ]
                }
            ]
        }
        for(var i = 0; i< $rootScope.givenData.data.length; i++){
            angular.forEach($rootScope.givenData.data[i].items,function(item,i){
                item.rating = parseInt(item.rating);
            })
        }

})
