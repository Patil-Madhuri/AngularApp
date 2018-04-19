/******************************************************************************
 *  Purpose         : Tool bar custom directive
 *  @description
 *  @file           : ToolBarDirective.js
 *  @overview       : directive ToolBarDirective.js for tool bar.
 *  @author         : Madhuri chaudhari
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
app.directive('navbar', function() {
  return {
    restrict:'EA',
    templateUrl: 'templates/ToolBarDirective.html'
  };
});
