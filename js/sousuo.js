// 返回顶部
$(function() {

	$("#return").hover(function() {
		$("#return").css("cursor", "pointer");
	}, function() {
		$("#return").css("cursor", "defult");
	});


	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$("#return").fadeIn(700);
		} else {
			$("#return").fadeOut(700);
		}
	});

	$("#return").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
		return false; //防止冒泡
	});





	/* 改变窗口大小时执行的函数 */
	$(window).resize(function() {
		title();
	});
	/* 当像素小于768时显示的title */
	title();

	function title() {
		if ($(window).width() > 768) {

		} else if ($(window).width() <= 375) {

		} else {
			$(".touming2").css({
				"display": "none",
			});
			$(".search1").css({
				"display": "none",
			});
			$(".search2").css({
				"margin-left": "-150px"								
			});
			$(".biankuang").css({
				"width": "300px"			
			});
			$(".search3").css({
				"margin-left": "-350px"								
			});
			$(".rexiao1").css({
				"height":"420px"							
			});
			$(".rexiao1>p").css({
				"height":"100px",
				"line-height":"20px"
			});
			$(".rexiao2").css({	
				"height":"400px"							
			});
			$(".row3").css({
				"margin-top": "350px",
				"height":"600px"							
			});
		}
	};

});
