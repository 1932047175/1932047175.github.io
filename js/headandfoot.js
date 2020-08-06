$(function () {
	//顶部开始

	var $head = $(
		//第一行   
		"<div class=\"container-fuild\" style=\"background-color:darkgray;\">\n" +
		"	<div class=\"col-12 t1\">\n"+
		"		<div class=\"col-md-3 offset-1\">\n"+
		"			<img src=\"img/收藏本页.png\" />\n" +
		"			<a href=\"#\">收藏本页&nbsp;</a>\n" +
		"			<img src=\"img/手机.png\" />\n" +
		"			<a href=\"#\">手机版&nbsp;</a>\n" +
		"			<img src=\"img/二维码.png\" style=\"width: 15px;height: 15px;\" />\n" +
		"			<a href=\"#\">二维码</a>\n" +
		"		</div>\n" +
		"		<div class=\"col-md-3 offset-5\">\n" +
		"			<a href=\"#\">会员登录 |</a>\n" +
		"			<a href=\"#\"> 免费注册 |</a>\n" +
		"			<a href=\"#\"> 忘记密码</a>\n" +
		"		</div>\n" +
		"	</div>\n" +
		"</div>\n" +

		//第二行
		"<div class=\"container-fluid\" style=\"background-color: #FFFFFF;\">\n" +
		"	<div class=\"row\">\n" +
		"		<div class=\"col-2 offset-1\">\n" +
		"			<img src=\"img/logo.png\" width=\"200px\">\n" +
		"		</div>\n" +
		"		<div class=\"col-4\">\n" +
		"			<div class=\"search\">\n" +
		"				<form class=\"t2-2\">\n" +
		"					<div class=\"input-group mb-3 biankuang\">\n" +
		"						<input type=\"text\" class=\"form-control\" placeholder=\"请输入商品名称\" id=\"mail\" name=\"email\">\n" +
		"						<div class=\"input-group-append \">\n" +
		"							<span class=\"input-group-text bg-danger\">搜索</span>\n" +
		"						</div>\n" +
		"					</div>\n" +
		"				</form>\n" +
		"				<ul class=\"search-ul\">\n" +
		"					<li>\n" +
		"						<a href=\"#\">关键词：</a>\n" +
		"					</li>\n" +
		"					<li>\n" +
		"						<a href=\"#\">调味品</a>\n" +
		"					</li>\n" +
		"					<li>\n" +
		"						<a href=\"#\">复合调味品</a>\n" +
		"					</li>\n" +
		"					<li>\n" +
		"						<a href=\"#\">食品</a>\n" +
		"					</li>\n" +
		"					<li>\n" +
		"						<a href=\"#\">香精</a>\n" +
		"					</li>\n" +
		"					<li>\n" +
		"						<a href=\"#\">火锅</a>\n" +
		"					</li>\n" +
		"					<li>\n" +
		"						<a href=\"#\">烧烤</a>\n" +
		"					</li>\n" +
		"					<li>\n" +
		"						<a href=\"#\">调料</a>\n" +
		"					</li>\n" +
		"				</ul>\n" +
		"			</div>\n" +
		"		</div>\n" +
		"		<div class=\"col-3 offset-1\">\n" +
		"			<div class=\"t2-3\">\n" +
		"				<img src=\"img/phone.png\">\n" +
		"			</div>\n" +
		"			<div class=\"wenzi\">\n" +
		"				<p>\n" +
		"					<h3>18081111030</h3>\n" +
		"				</p>\n" +
		"				<p>服务时间:早9：00~晚18：00</p>\n" +
		"			</div>\n" +
		"		</div>\n" +
		"	</div>\n" +
		"</div>\n"
	);
	$("#head").append($head);
	
	//页脚开始
	var $footer = $(
		"<div class=\"container-fuild footer\">\n" +
			//页脚第一行
		"	<div class=\"col-12 footerbg1\">\n" +
		"		<div class=\"col-3 offset-2\">\n" +
		"			<div>\n" +
		"				<img src=\"img/anquan.png\" />\n" +
		"			</div>\n" +
		"			<div class=\"foot1-family\">\n" +
		"				<h4>自营保证品</h4>\n" +
		"				<p>现货自营 正品保证</p>\n" +
		"			</div>\n" +
		"		</div>\n" +
		"		<div class=\"col-3\">\n" +
		"			<div>\n" +
		"				<img src=\"img/yunshupeisong.png\" />\n" +
		"			</div>\n" +
		"			<div class=\"foot1-family\">\n" +
		"				<h4>自营店铺配送</h4>\n" +
		"				<p>不限品类 飞达配送</p>\n" +
		"			</div>\n" +
		"		</div>\n" +
		"		<div class=\"col-3\">\n" +
		"			<div>\n" +
		"				<img src=\"img/shandian.png\" />\n" +
		"			</div>\n" +
		"			<div class=\"foot1-family\">\n" +
		"				<h4>发货如闪电</h4>\n" +
		"				<p>极速发货 航空直达</p>\n" +
		"			</div>\n" +
		"		</div>\n" +
		"	</div>\n" +
			//页脚第二行
		"	<table class=\"table table-bordered footerbg2\" >\n" +
		"		<tr>\n" +
		"			<td>\n" +
		"				<div class=\"text-center mt-3\" id=\"table-td\" style=\"padding-left: 100px;\">\n" +
		"					<img src=\"img/xinrenzhinan.png\" style=\"margin-top: -55px;\"/>\n" +
		"					<p style=\"display: inline-block;\">新手指南<br />帮助中心<br />联系瓜粉</p>\n" +
		"				</div>\n" +
		"			</td>\n" +
		"			<td>\n" +
		"				<div class=\"text-center mt-3\" id=\"table-td\">\n" +
		"					<img src=\"img/caigou.png\" style=\"margin-top: -55px;\"/>\n" +
		"					<p style=\"display: inline-block;\">采购服务<br />找供应商<br />发布购物单</p>\n" +
		"				</div>\n" +
		"			</td>\n" +
		"			<td>\n" +
		"				<div class=\"text-center mt-3\" id=\"table-td\">\n" +
		"					<img src=\"img/gongyinshang.png\" style=\"margin-top: -55px;\"/>\n" +
		"					<p style=\"display: inline-block;\">供应商服务<br />找采购商<br />发布产品</p>\n" +
		"				</div>\n" +
		"			</td>\n" +
		"			<td>\n" +
		"				<div class=\"text-center mt-3\" id=\"table-td\" style=\"padding-right: 100px;\">\n" +
		"					<img src=\"img/guanyu.png\" style=\"margin-top: -55px;\"/>\n" +
		"					<p style=\"display: inline-block;\">关于我们<br />联系我们<br /></p>\n" +
		"					<img src=\"img/wangyeerweima .png\" style=\"margin-left: 40px;\"/>\n" +
		"				</div>\n" +
		"			</td>\n" +
		"		</tr>\n" +
		"	</table>\n" +
		//	第三行
		"	<div class=\"footerbg3\">\n" +	
		"		<div class=\"col-md-12 col-12 text-center \">\n" +	
		"			<p><a href=\"#\">首页 </a> | <a href=\"#\"> 分类 </a> | <a href=\"#\"> 清单 </a> | <a href=\"#\"> 购物车 </a> | <a href=\"#\"> 我的</a></p>\n" +			
		"			<p>四川工商学院2C203前端开发有限公司B组版权所有</p>\n" +			
		"		</div>\n" +
		"	</div>\n" +
		"</div>\n"
				
	);
	$('#footer').append($footer);
});