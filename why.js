var casper = require('casper').create({
		verbose: true,
		logLevel: "debug",
		userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
		javascriptEnabled: true
	});
var destinationPath = 'F:/person_projects/taokezhuanqian/autojs/goLoginHtml.txt';
var fs = require('fs');
var mouse = require('mouse').create(casper);
var x = [681, 683, 683, 683, 685, 685, 685, 685, 685, 685, 683, 683, 684, 682, 682, 682, 684, 684, 685, 686, 687, 689, 691, 692, 693, 695, 697, 700, 701, 702, 703, 704, 705, 706, 704, 704, 701, 702, 703, 704, 705, 706, 684, 684, 685, 686, 687, 689, 691, 692, 693, 695, 697, 681, 682, 682, 682, 683, 685, 683, 683, 684, 684, 684, 685, 686, 687, 689, 691, 692, 693, 695, 697, 700, 701, 702, 703, 704, 709, 709, 709, 712, 712, 712, 716, 716];
var y = [221, 220, 220, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 221, 221, 221, 221, 220, 220, 222, 220, 222, 220, 222, 222, 223, 224, 224, 225, 224, 225, 224, 224, 224, 224, 224, 225, 225, 225, 225, 221, 221, 221, 221, 220, 220, 222, 220, 222, 220, 222, 221, 220, 220, 221, 221, 220, 222, 222, 223, 224, 224, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 224, 225, 220, 222, 220, 222, 220, 222];
var t = [11, 15, 16, 8, 17, 8, 8, 7, 9, 7, 8, 8, 8, 7, 9, 7, 8, 16, 8, 16, 9, 7, 8, 8, 9, 7, 8, 8, 8, 16, 40, 16, 8, 24, 32, 80, 74];
phantom.outputEncoding = "gbk";
casper.start('https://login.taobao.com/member/login.jhtml?style=mini&newMini2=true&from=alimama&redirectURL=http%3A%2F%2Flogin.taobao.com%2Fmember%2Ftaobaoke%2Flogin.htm%3Fis_login%3d1&full_redirect=true&disableQuickLogin=true', function () {});
casper.then(function () {
	casper.wait(5000, function () {
		this.click('#J_Quick2Static');
		this.fill('form#J_Form', {
			'TPL_username': 'goldfish_sun', //
			'TPL_password': '524942442A'
		});
	});

	casper.wait(5000, function () {
		if (this.exists('#nc_1_n1z')) {
			this.mouse.down('#nc_1_n1z');
			this.mouse.move(x[0], y[0]);
			this.mouse.move(x[1], y[1]);
			this.mouse.move(x[2], y[3]);
			this.mouse.move(x[3], y[3]);
			this.mouse.move(x[4], y[4]);
			this.mouse.move(x[5], y[5]);
			this.mouse.move(x[6], y[6]);
			this.mouse.move(x[7], y[7]);
			this.mouse.move(x[8], y[8]);
			this.mouse.move(x[9], y[9]);
			this.mouse.move(x[10], y[10]);
			this.mouse.move(x[11], y[11]);
			this.mouse.move(x[12], y[12]);
			this.mouse.move(x[13], y[13]);
			this.mouse.move(x[14], y[14]);
			this.mouse.move(x[15], y[15]);
			this.mouse.move(x[16], y[16]);
			this.mouse.move(x[17], y[17]);
			this.mouse.move(x[18], y[18]);
			this.mouse.move(x[19], y[19]);
			this.mouse.move(x[20], y[20]);
			this.mouse.move(x[21], y[21]);
			this.mouse.move(x[22], y[22]);
			this.mouse.move(x[23], y[23]);
			this.mouse.move(x[24], y[24]);
			this.mouse.move(x[25], y[25]);
			this.mouse.move(x[26], y[26]);
			this.mouse.move(x[27], y[27]);
			this.mouse.move(x[28], y[28]);
			this.mouse.move(x[29], y[29]);
			this.mouse.move(x[30], y[30]);
			this.mouse.move(x[31], y[31]);
			this.mouse.move(x[32], y[32]);
			this.mouse.move(x[33], y[33]);
			this.mouse.move(x[34], y[34]);
			this.mouse.move(x[35], y[35]);
			this.mouse.move(x[36], y[36]);
			this.mouse.move(x[37], y[37]);
			this.mouse.move(x[38], y[38]);
			this.mouse.move(x[39], y[39]);
			this.mouse.move(x[40], y[40]);
			this.mouse.move(x[41], y[41]);
			this.mouse.move(x[42], y[42]);
			this.mouse.move(x[43], y[43]);
			this.mouse.move(x[44], y[44]);
			this.mouse.move(x[45], y[45]);
			this.mouse.move(x[46], y[46]);
			this.mouse.move(x[47], y[47]);
			this.mouse.move(x[48], y[48]);
			this.mouse.move(x[49], y[49]);
			this.mouse.move(x[50], y[50]);
			this.mouse.move(x[51], y[51]);
			this.mouse.move(x[52], y[52]);
			this.mouse.move(x[53], y[53]);
			this.mouse.move(x[54], y[54]);
			this.mouse.move(x[55], y[55]);
			this.mouse.move(x[56], y[56]);
			this.mouse.move(x[57], y[57]);
			this.mouse.move(x[58], y[58]);
			this.mouse.move(x[59], y[59]);
			this.mouse.move(x[60], y[60]);
			this.mouse.move(x[61], y[61]);
			this.mouse.move(x[62], y[62]);
			this.mouse.move(x[63], y[63]);
			this.mouse.move(x[64], y[64]);
			this.mouse.move(x[65], y[65]);
			this.mouse.move(x[66], y[66]);
			this.mouse.move(x[67], y[67]);
			this.mouse.move(x[68], y[68]);
			this.mouse.move(x[69], y[69]);
			this.mouse.move(x[70], y[70]);
			this.mouse.move(x[71], y[71]);
			this.mouse.move(x[72], y[72]);
			this.mouse.move(x[73], y[73]);
			this.mouse.move(x[74], y[74]);
			this.mouse.move(x[75], y[75]);
			this.mouse.move(x[76], y[76]);
			this.mouse.move(x[77], y[77]);
			this.mouse.move(x[78], y[78]);
			this.mouse.move(x[79], y[79]);
			this.mouse.move(x[80], y[80]);
			this.mouse.move(x[81], y[81]);
			this.mouse.move(x[82], y[82]);
			this.mouse.move(x[83], y[83]);
			this.mouse.move(x[84], y[84]);
			this.mouse.move(x[85], y[85]);
			this.mouse.up('#nc_1_n1z');
      this.capture('moveOK.png');
		}
	});
});

casper.waitUntilVisible('#nocaptcha a', function () {
	//this.click('#nocaptcha a');
	this.evaluate(function () {
		//document.querySelector('#nocaptcha a').click();
			noCaptcha.reset(1);
	});
	casper.click('#nocaptcha a');
	console.log('======>' + this.getElementAttribute('#nocaptcha a', 'href'));
	this.capture('0000.png');
}, function () {
	this.echo('failed founding #nocaptcha', 'INFO');
});

casper.then(function () {

	casper.wait(5000, function () {
		console.log('======>提取的内容为：' + this.fetchText('#nocaptcha a'));
		console.log('======>当前页面地址：' + this.getCurrentUrl());
    if(this.exists('#nc_1_n1z')||this.exists('#nocaptcha a')){
      console.log('======>滑动验证不通过，无法提交登录');
    }else{
      this.click('#J_SubmitStatic');
      console.log('======>滑动验证已经通过，开始提交登录');
    }
	});
  casper.wait(3000,function(){
      this.capture('123456.png');
  });
});

casper.run();
