$(function(){
	var news=getUrlParams('news');
	console.log(news)
	var data=articleData[news].data;
	
	console.log(1)
	console.log(data)
	$(".slide1 img").attr('src',data.creatAt1)
	$(".slide2 img").attr('src',data.creatAt2)
	$(".slide3 img").attr('src',data.creatAt3)
	$(".slide4 img").attr('src',data.creatAt4)
	
	$(".vm-title").html(data.creatAt5)
	$(".prod-info-price").html(data.creatAt6)
	$(".vm-price").html(data.creatAt7)
	$(".active").html(data.creatAt8)
	$(".vm-props").html(data.creatAt9)
	$(".J_siteText").html(data.creatAt10)
	$(".img1").attr('src',data.creatAt11)
	$(".img2").attr('src',data.creatAt12)
	$(".img3").attr('src',data.creatAt13)
	$(".img4").attr('src',data.creatAt14)
	$(".img5").attr('src',data.creatAt15)
	$(".img6").attr('src',data.creatAt16)
	$(".img7").attr('src',data.creatAt17)
	$(".img8").attr('src',data.creatAt18)
	$(".img9").attr('src',data.creatAt19)
	$(".img10").attr('src',data.creatAt20)
	$(".img11").attr('src',data.creatAt21)
	$(".img12").attr('src',data.creatAt22)
	$(".img13").attr('src',data.creatAt23)
	$(".img14").attr('src',data.creatAt24)
	$(".img15").attr('src',data.creatAt25)
	$(".img16").attr('src',data.creatAt26)
	$(".img17").attr('src',data.creatAt27)
	$(".img18").attr('src',data.creatAt28)
	$(".img19").attr('src',data.creatAt29)
	$(".img20").attr('src',data.creatAt30)
	$(".img21").attr('src',data.creatAt31)
	$(".img22").attr('src',data.creatAt32)
	$(".img23").attr('src',data.creatAt33)
	$(".img24").attr('src',data.creatAt34)
	function getUrlParams(name){  //news
		// 获取页面URL传过来的参数article.html?news=xiaoniaoNews1
		var reg=new RegExp('(^|&)'+name+'=([^|&]*)(&|$)')
		var r=window.location.search.substr(1).match(reg)
		//  news=xiaoniaoNews1  ''  xiaoniaoNews1  ''
		if (r!=null) {
			console.log(r)
			return r[2]
		} else{
			return ''
		}
	}
})