
//轮播图部分js
function showInform() {
	document.getElementById("inform").style.display = 'inline-block';
}

function hiddenInform(event) {
	document.getElementById('inform').style.display = 'none';
}
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

});