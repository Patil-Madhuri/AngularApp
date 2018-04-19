/**********************************************************************************
 *  Purpose         : Custom Service to get all the data from products.json file.
 *  @description
 *  @file           : ReadJsonData.js
 *  @author         : Madhuri chaudhari
 *  @version        : 1.0
 *  @since          : 16-04-2018
 **********************************************************************************/
 /*
  * @param {service} $http is a service to deal with getting data from url
  */
app.service('readJson',function($http)
{
  this.getJson=function(){
    return $http.get("products.json").then(function(response){
      return response.data;
      // console.log(myData);
    });
  }
});
