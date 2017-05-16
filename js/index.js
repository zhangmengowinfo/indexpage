$(function(){
	function Index(){};
	Index.prototype = {
		"load":function(){
			this.loadDefault();
			$('#custom').terseBanner({ 
				animation: 'fade'
			});
		},
		"loadDefault":function(){
			this.loadcarousel();
			this.loadNavPanel();
			this.animateLayout();
			this.format();
		},
		"loadcarousel":function(){
			$(".item").each(function(i){
				var index = i+1;
				var height = $(window).height() * 0.8;
				$(this).css({
					background:"url('/resource/img/"+index+".jpg')",
					backgroundRepeat:"no-repeat",
					backgroundPosition:"center top",
					height:height,
					width:"100%"
				});
			});

		},
		"loadNavPanel":function(){
			var height = $(window).height() * 0.2;
			$("#navPanel li").css({
				height:height
			});
		},
		"animateLayout":function(){
			var leftPoiter = [10,26,43,59,75,91];
			$(".iconList li").click(function(){
				var index = $(this).index();
				var left = leftPoiter[index];
				left = left + "%";
				$(".layout-first .listContent .triangle").css("left",left)
				$(".content_info").addClass("hidden").removeClass("active");
				
				$(".content_info").eq(index).removeClass("hidden").addClass("active");
			});
			// $("#layout-first .list li").eq(0).addClass("active");
			// $("#layout-first .list li").each(function(i){
			// 	$(this).mouseenter(function(){
			// 		$("#layout-first .list li").removeClass("active");
			// 		$("#layout-first .list li").eq(i).addClass("active");
			// 	});
			// 	// $(this).mouseout(function(){
			// 	// 	$("#layout-first .list li").removeClass("active");
			// 	// });
			// });
		},
		"format":function(){
			$(".contentBorder p").each(function(){
				var text = $(this).html();
				if(text.length > 40){
					text = text.substr(0,37);
					text = text + "...";
				}
				$(this).html(text);
			});
		}
	};
	var index = new Index();
	index.load();
});