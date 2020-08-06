$(function() {
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
			$(".touming1").css({
					"height":"100px"
				}

			);
		}
	};
})
