$(function(){
	var $li = $("#wrapper .nav li"),
		$navbox = $("#wrapper .navbox"),
		aLeft = [];
	(function(){
		var li_width = $li[0].offsetWidth;
		var m = 0, left ="";
		for (var i = $li.length;i--; ) {
			m = li_width*(i+1);
			left = ((i%2) ? m : (-m)) + "px";
			$li[i].style.left = left;
			aLeft.push(left);
		}
		aLeft.reverse();
	})();
	/*function hide($li) {
		var $l = null; 
		for (var i = $li.length; i--;) {
			$l = $($li[i]);
			$l.animate({'left': aLeft[i]},i*1000,'linear');
		}
	}*/
	function hide($li) {
		var $l = null; 
		var i = $li.length;
		(function cal(i){
			if(i--){
				$l = $($li[i]);
				$l.animate({'left': aLeft[i]}, 100, (function(i){
					return function(){
						cal(i);
					}
				})(i));
			}
		})(i);
	}
	function show($li) {
		var $l = null; 
		var i = 0;
		(function cal(i){
			if(i >= $li.length){
				return;
			}
			$l = $($li[i]);
			i++;
			$l.animate({'left': 0}, 100, (function(i){
				return function(){
					cal(i);
				}
			})(i));
		})(i);
	}
	var m = true;
	$navbox.on('click',function(){	//JQuery 1.9之后的toggle方法移传递函数模拟连续点击的作用
		$li.stop(true);
		$(this).stop(true);
		//m ? $li.animate({'left': "0px"},500,'linear') : hide($li);
		//m ? show($li) : hide($li);
		if(m){
			$(this).animate({'color':'black',
							'backgroundColor':'#CC0033'
						})
					.find('.icon').html('&#125;');
			show($li);
		} else {
			$(this).animate({'color':'#CC0033',
							'backgroundColor':'black'
						})
					.find('.icon').html('&#123;');
			hide($li);
		}
		m = !m;
	})
});