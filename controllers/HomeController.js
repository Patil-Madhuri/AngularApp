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
  var selectedManufacturerItems = [];
  var selectedStorageItems = [];
  var selectedOsItems = [];
  var selectedCameraItems = [];
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
  $scope.toggleFunction = function(category, keyword) {
    switch (category) {
      case 'manufacturer':
        var indexOfManufacturer = selectedManufacturerItems.indexOf(keyword);
        if (indexOfManufacturer > -1) {
          selectedManufacturerItems.splice(indexOfManufacturer, 1);
        } else {
          selectedManufacturerItems.push(keyword);
        }
        break;
      case 'storage':
        var indexOfStorage = selectedStorageItems.indexOf(keyword);
        if (indexOfStorage > -1) {
          selectedStorageItems.splice(indexOfStorage, 1);
        } else {
          selectedStorageItems.push(keyword);
        }
        break;
      case 'os':
        var indexOfOs = selectedOsItems.indexOf(keyword);
        if (indexOfOs > -1) {
          selectedOsItems.splice(indexOfOs, 1);
        } else {
          selectedOsItems.push(keyword);
        }
        break;
      case 'camera':
        var indexOfCamera = selectedCameraItems.indexOf(keyword);
        if (indexOfCamera > -1) {
          selectedCameraItems.splice(indexOfCamera, 1);
        } else {
          selectedCameraItems.push(keyword);
        }
        break;
    }
  };
  $scope.arrayManufacturer = selectedManufacturerItems;
  $scope.arrayStorage = selectedStorageItems;
  $scope.arrayOs = selectedOsItems;
  $scope.arrayCamera = selectedCameraItems;
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

    if (x != undefined) {

      if (arrayManufacturer.length > 0 || arrayStorage.length > 0 || arrayOs.length > 0 || arrayCamera.length > 0) {

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