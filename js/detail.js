$(function(){
	function Detail(){};
	Detail.prototype = {
		"load":function(){
			this.loadDefault();
		},
		"loadDefault":function(){
			this.loadHeadImg();
		},
		"loadHeadImg":function(){
			var height = $(window).height();
			$("#headerContent").css({
				height:height
			});
			
		},
		"loadingData":function(){
			var search = this.getUrlParameter();
			console.log(search);
			if(search == null || search.article == undefined){
				var data = {
					"type":404,
					"data":null
				};
				this.renderPage(data);
			}else{
				$.ajax({
					"url":"resource/json/"+search.article+".json",
					"type":"get",
					"success":function(data){
						data.type = 200;
						detail.renderPage(data);
					}
				});
			}
		},
		"renderPage":function(data){
			if(data.type == 404){

			}else{
				$("#meta1").attr({
					"name":"keywords",
					"content":data.keywords
				});
				$("#meta1").attr({
					"name":"description",
					"content":data.description
				});

				
			}
		},
		"getUrlParameter":function(){

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
	};
	var detail = new Detail();
	detail.load();
});