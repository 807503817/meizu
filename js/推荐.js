$(function(){
	$.ajax({
		type:"get",
		url:"js/listData.json",
		async:"true",
		datatype:"json"
	}).done(function(str){
		var olist=eval(str[0].data.list)
		$.each(olist,function(i){
			$(".head").append(`
			<div class="head1" articleId="${olist[i].sysId}" data-price="${olist[i].dataprice}">
				<img src="${olist[i].imgjpg}" >
				<p>
					<span class="vm-tit">${olist[i].title}</span>
					<span class="vm-sub sale-tag gray">${olist[i].classification}</span>
					<span class="vm-price sale-tag">
						${olist[i].money}
						<em>${olist[i].celect}</em>
					</span>
				</p>
			</div>
			`)
		})
		var olist1=eval(str[1].data.list)
		$.each(olist1,function(i){
			$(".head2").append(`
			<div class="head1">
				<img src="${olist1[i].imgjpg}" >
				<p>
					<span class="vm-tit">${olist1[i].title}</span>
					<span class="vm-price sale-tag">
						${olist1[i].money}
					</span>
				</p>
			</div>
			`)
		
	    })
		var olist2=eval(str[2].data.list)
		$.each(olist2,function(i){
			$(".head3").append(`
			<div class="head1">
				<img src="${olist2[i].imgjpg}" >
				<p>
					<span class="vm-tit">${olist2[i].title}</span>
					<span class="vm-sub sale-tag gray">${olist2[i].classification}</span>
					<span class="vm-price sale-tag">
						${olist2[i].money}
					</span>
				</p>
			</div>
			`)
		
		})
		var olist3=eval(str[3].data.list)
		$.each(olist3,function(i){
			$(".head4").append(`
			<div class="head1">
				<img src="${olist3[i].imgjpg}" >
				<p>
					<span class="vm-tit">${olist3[i].title}</span>
					<span class="vm-sub sale-tag gray">${olist3[i].classification}</span>
					<span class="vm-price sale-tag">
						${olist3[i].money}
					</span>
				</p>
			</div>
			`)
		
		})
		var olist4=eval(str[4].data.list)
		$.each(olist4,function(i){
			$(".head5").append(`
			<div class="head1">
				<img src="${olist4[i].imgjpg}" >
				<p>
					<span class="vm-tit">${olist4[i].title}</span>
					<span class="vm-sub sale-tag gray">${olist4[i].classification}</span>
					<span class="vm-price sale-tag">
						${olist4[i].money}
					</span>
				</p>
			</div>
			`)
		
		})
		
		var flag=-1;
		var arrLi=$('.head .head1')
		var temp=true
		$('.nav-bar a').eq(1).on('click',function(){
			$(this).addClass("lan").siblings().removeClass("lan")
			var arrList = [].slice.call(arrLi);
			arrList.sort(function(a,b){
				var aPrice = a.getAttribute('data-price'),
					bPrice = b.getAttribute('data-price');
					console.log(aPrice,bPrice)
				return (aPrice-bPrice)*flag;
			});
			for (var j = 0; j < arrList.length; j++) {
				$('.head').append(arrList[j]);
			}
			flag = -flag
			if (temp) {
				$(this).find("i").eq(0).css("color","#00c3f5").siblings().css("color","")
				temp=false
				
			} else{
				$(this).find("i").eq(1).css("color","#00c3f5").siblings().css("color","")
				temp=true
			}
		})

  })
  
  
  $("a").click(function(){
	  $(this).css("text-decoration","none")
  })
  
  $(".head").delegate('.head1','click',function(){
  	var articleId=$(this).attr('articleId')
  	window.open('详情.html?news=meizu_'+articleId)
  })
})