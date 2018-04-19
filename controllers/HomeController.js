/******************************************************************************
 *  Purpose         : Home controller for sidebar list and filter operations.
 *  @description
 *  @file           : HomeController.js
 *  @overview       : controller for displaying sidenav data and option handler.
 *  @author         : Madhuri chaudhari
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
app.controller('homeCtrl', function($scope, $mdSidenav, $state, readJson, $filter) {
  var selectedManufacturer = [];
  var selectedStorage = [];
  var selectedOs = [];
  var selectedCamera = [];
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
  $scope.sendLogin = function() {
    $state.go('login');
  }

  $scope.getData = readJson.getJson();
  $scope.getData.then(function(response) {
    $scope.jsonRecord = response;
  })

  /*
   * @description auto load the dashboard.html inside nested ui-view.
   */
  $state.go('home.dashboard');

  /*
   * @description function to maintain checked item into selected list.
   * @param {string} category is a string from list of categories
   * @param {string} keyword is a string which is been checked
   */
  $scope.toggle = function(category, keyword) {
    switch (category) {
      case 'manufacturer':
        var indexManufacturer = selectedManufacturer.indexOf(keyword);
        if (indexManufacturer > -1) {
          selectedManufacturer.splice(indexManufacturer, 1);
        } else {
          selectedManufacturer.push(keyword);
        }
        break;
      case 'storage':
        var indexStorage = selectedStorage.indexOf(keyword);
        if (indexStorage > -1) {
          selectedStorage.splice(indexStorage, 1);
        } else {
          selectedStorage.push(keyword);
        }
        break;
      case 'os':
        var indexOs = selectedOs.indexOf(keyword);
        if (indexOs > -1) {
          selectedOs.splice(indexOs, 1);
        } else {
          selectedOs.push(keyword);
        }
        break;
      case 'camera':
        var indexCamera = selectedCamera.indexOf(keyword);
        if (indexCamera > -1) {
          selectedCamera.splice(indexCamera, 1);
        } else {
          selectedCamera.push(keyword);
        }
        break;
    }
  };
  $scope.arrayManufacturer = selectedManufacturer;
  $scope.arrayStorage = selectedStorage;
  $scope.arrayOs = selectedOs;
  $scope.arrayCamera = selectedCamera;
});

/*
 * @description filter for getting list of items based on selected options.
 * @return {array} filtered list using the selected items .
 */

app.filter('filteredString', function() {
  /*
   * @param {array} items is a list of items from ng-repeat
   * @param {array} arrayManufacturer is list of manufacturer selected options
   * @param {array} arrayStorage is list of storage selected options
   * @param {array} arrayOs is list of Os selected options
   * @param {array} arrayCamera is list camera of selected options
   * @return {array} list of filtered items.
   */
  return function(x, arrayManufacturer, arrayStorage, arrayOs, arrayCamera) {
    var filtered = [];
    var temparray = [];

    if (x != undefined)
    {
      if (arrayManufacturer.length > 0 )
      {
        for (var j = 0; j < x.length; j++) {
          var item = x[j];

          for (var i = 0; i < arrayManufacturer.length; i++) {
            var selectedItem = arrayManufacturer[i];
            if (item.specs.manufacturer == selectedItem || item.specs.storage == selectedItem ||
              item.specs.os == selectedItem || item.specs.camera == selectedItem) {
              filtered.push(item);
            }
          }
        }
        if (filtered.length > 0) {
          temparray = filtered;
          filtered = [];
        } else {
          temparray = x;
        }

        if (arrayStorage.length > 0) {
          for (var j = 0; j < temparray.length; j++) {
            var item = temparray[j];

            for (var i = 0; i < arrayStorage.length; i++) {
              var selectedItem = arrayStorage[i];
              if (item.specs.manufacturer == selectedItem || item.specs.storage == selectedItem ||
                item.specs.os == selectedItem || item.specs.camera == selectedItem) {
                filtered.push(item);
              }
            }
          }
          temparray = filtered;
          filtered = [];
        }

        if (arrayOs.length > 0) {
          for (var j = 0; j < temparray.length; j++) {
            var item = temparray[j];

            for (var i = 0; i < arrayOs.length; i++) {
              var selectedItem = arrayOs[i];
              if (item.specs.manufacturer == selectedItem || item.specs.storage == selectedItem ||
                item.specs.os == selectedItem || item.specs.camera == selectedItem) {
                filtered.push(item);
              }
            }
          }
          temparray = filtered;
          filtered = [];
        }

        if (arrayCamera.length > 0) {
          for (var j = 0; j < temparray.length; j++) {
            var item = temparray[j];

            for (var i = 0; i < arrayCamera.length; i++) {
              var selectedItem = arrayCamera[i];
              if (item.specs.manufacturer == selectedItem || item.specs.storage == selectedItem ||
                item.specs.os == selectedItem || item.specs.camera == selectedItem) {
                filtered.push(item);
              }
            }

          }
          temparray = filtered;
          filtered = [];
        }
      } else {
        temparray = x;
      }
    }
    return temparray;
  };
});
