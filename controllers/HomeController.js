/******************************************************************************
 *  Purpose         : Home controller for sidebar list and filter operations.
 *  @description
 *  @file           : HomeController.js
 *  @overview       : controller for displaying sidenav data and option handler.
 *  @author         : Madhuri chaudhari
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
app.controller('homeCtrl', function($scope, $mdSidenav, $state, readJson, $filter)
{
  var selectedManufacturerItems = [];
  var selectedStorageItems = [];
  var selectedOsItems = [];
  var selectedCameraItems = [];
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');
  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).open();
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
  var count;
  if(count %2 == 0)
  {
    $scope.isVisible = false;
  }
  else
   {
     $scope.isVisible = true;
   }
  $scope.ShowHide = function()
  {
    $scope.isVisible = !$scope.isVisible;
    count++;
  }
  /*
   * @description function to maintain checked item into selected list.
   * @param {string} category is a string from list of categories
   * @param {string} selectedItem is a string which is been checked
   */
  $scope.toggleFunction = function(category, selectedItem) {
    switch (category) {
      case 'manufacturer':
        var indexOfManufacturer = selectedManufacturerItems.indexOf(selectedItem);
        if (indexOfManufacturer > -1) {
          selectedManufacturerItems.splice(indexOfManufacturer, 1);
        } else {
          selectedManufacturerItems.push(selectedItem);
        }
        break;
      case 'storage':
        var indexOfStorage = selectedStorageItems.indexOf(selectedItem);
        if (indexOfStorage > -1) {
          selectedStorageItems.splice(indexOfStorage, 1);
        } else {
          selectedStorageItems.push(selectedItem);
        }
        break;
      case 'os':
        var indexOfOs = selectedOsItems.indexOf(selectedItem);
        if (indexOfOs > -1) {
          selectedOsItems.splice(indexOfOs, 1);
        } else {
          selectedOsItems.push(selectedItem);
        }
        break;
      case 'camera':
        var indexOfCamera = selectedCameraItems.indexOf(selectedItem);
        if (indexOfCamera > -1) {
          selectedCameraItems.splice(indexOfCamera, 1);
        } else {
          selectedCameraItems.push(selectedItem);
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
 * @return {array} filteredArray list using the selected items .
 */

app.filter('filteredString', function() {
  /*
   * @param {array} items is a list of items from ng-repeat
   * @param {array} arrayManufacturer is list of manufacturer selected options
   * @param {array} arrayStorage is list of storage selected options
   * @param {array} arrayOs is list of Os selected options
   * @param {array} arrayCamera is list camera of selected options
   * @return {array} list of filteredArray items.
   */
  return function(x, arrayManufacturer, arrayStorage, arrayOs, arrayCamera) {
    var filteredArray = [];
    var temparray = [];

    if (x != undefined) {
      if (arrayManufacturer.length > 0 || arrayStorage.length > 0 || arrayOs.length > 0 || arrayCamera.length > 0) {

        for (var j = 0; j < x.length; j++) {
          var item = x[j];

          for (var i = 0; i < arrayManufacturer.length; i++) {
            var selectedItem = arrayManufacturer[i];
            if (item.specs.manufacturer == selectedItem)
             {
              filteredArray.push(item);
            }
          }
        }

        if (filteredArray.length > 0) {
          temparray = filteredArray;

          filteredArray = [];
        } else {
          temparray = x;
        }

        if (arrayStorage.length > 0) {
          for (var j = 0; j < temparray.length; j++) {
            var item = temparray[j];

            for (var i = 0; i < arrayStorage.length; i++) {
              var selectedItem = arrayStorage[i];
              if (item.specs.storage == selectedItem) {
                filteredArray.push(item);
              }
            }
          }
          temparray = filteredArray;
          filteredArray = [];
        }

        if (arrayOs.length > 0) {
          for (var j = 0; j < temparray.length; j++) {
            var item = temparray[j];

            for (var i = 0; i < arrayOs.length; i++) {
              var selectedItem = arrayOs[i];
              if (item.specs.os == selectedItem) {
                filteredArray.push(item);
              }
            }
          }
          temparray = filteredArray;
          filteredArray = [];
        }

        if (arrayCamera.length > 0) {
          for (var j = 0; j < temparray.length; j++) {
            var item = temparray[j];

            for (var i = 0; i < arrayCamera.length; i++) {
              var selectedItem = arrayCamera[i];
              if (item.specs.camera == selectedItem) {
                filteredArray.push(item);
              }
            }
          }
          temparray = filteredArray;
          filteredArray = [];
        }
      } else {
        temparray = x;
      }
    }
    return temparray;
  };
});
