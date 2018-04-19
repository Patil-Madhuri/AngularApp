/******************************************************************************
 *  Purpose         : Side bar custom directive
 *  @description
 *  @file           : SideBarDirective.js
 *  @overview       : directive SideBarDirective.js for Sidenav.
 *  @author         : Madhuri chaudhari
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
app.directive('sidebar', function() {
  return {
    restrict:'EA',
    templateUrl: 'templates/SideBarDirective.html'
  };
});
