// 显示分类
function showInform() {
	document.getElementById("inform1").style.display = 'inline-block';
}

function hiddenInform(event) {
	document.getElementById('inform1').style.display = 'none';
}

function show1() {
	document.getElementById("left-nav").style.display = 'inline-block';
}
// show1:显示分类
function hidden1(event) {
	document.getElementById('left-nav').style.display = 'none';
}

function openNav() {
	document.getElementById("mySidenav").style.width = "200px";
	document.getElementById("opennav").style.display = 'none';
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("opennav").style.display = 'block';
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
