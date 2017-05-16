var app = angular.module('app',[]);
app.controller("mainController",['$scope','$http','$location','$http',
	function($scope,$http,$location,$http){

		$scope.getSearch = function(){
			var result = {},count = 0;
			var str = window.location.search;
		    str = str.substr(1);
		    if(str == ""){
		    	return null
		    }
		    var tempArr = str.split("&");
		    if(tempArr.length == 0){
		      result = null;
		    }else{
		      for(var i = 0; i < tempArr.length; i++){
		        var tempParam = tempArr[i].split("=");
		        result[tempParam[0]] = tempParam[1];
		        count++;
		      }
		    }
		    return result;
		}
		var search = $scope.getSearch();

		if(search == null || search.article == undefined){
			$scope.data = {
				"type":404,
				"data":null
			};
			
		}else{
			$http.get("resource/json/"+search.article+".json").then(
				function(resp){
					$scope.data = resp.data;
					$("#headerContent").css({
						"background":"url('../resource/img/"+$scope.data.bgimg+"') no-repeat center"
					});
				}
			);

		}
		
}]);