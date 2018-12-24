function forEach(arr,action){
	for(var i=0;i<arr.length;i++){ action(arr[i]);="" }="" function="" map(func,arr){="" var="" result="[];" foreach(arr,function(element){="" result.push(func(element));="" })="" return="" result;="" myaddevent(obj,ev,fn){="" if(obj.attachevent){="" obj.attachevent("on"+ev,fn);="" else{="" obj.addeventlistener(ev,fn,false);="" getstyle(obj,attr){="" if(obj.currentstyle){="" obj.currentstyle[attr];="" getcomputedstyle(obj,false)[attr]="" getbyclass(oparent,sclass){="" aele="oParent.getElementsByTagName("*")," aresults="[];" foreach(aele,function(k){="" if(k.classname="=sClass){" aresults.push(k)="" aresults;="" overcolor(obj,color){="" obj.style.background="color;" startmove(obj,json,fnend)="" {="" clearinterval(obj.timer);="" obj.timer="setInterval(function(){" bstop="true;" for(var="" attr="" in="" json){="" cur="0;" if(attr="="opacity"){" speed="(json[attr]-cur)/9;">0?Math.ceil(speed):Math.floor(speed);	
			if(attr=="opacity"){
				obj.style.filter="alpha(opacity:"+(cur+speed)+")";
				obj.style.opacity=(cur+speed)/100;
			}
			else{
				obj.style[attr]=cur+speed+"px";
			}
			if(cur!=json[attr]){bStop=false;}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
	},30);
}
//var oJustText=document.getElementById("just_for_text");

//针对IE6  模拟li hover
var isIE6=/msie 6/i.test(navigator.userAgent);
if(isIE6){
	(function() {
		var sfEls = getByClass(document.getElementById("navigation"),"nav");
		for (var i=0; i<sfels.length; i++)="" {="" sfels[i].onmouseover="function()" this.classname+=" sfhover" ;="" }="" sfels[i].onmouseout="function()" this.classname="this.className.replace(new" regexp("="" sfhover\\b"),="" "");="" })();="" window.onload="function(){" 搜索框="" var="" osearch="getByClass(document.getElementById("searchbox"),"search")[0];" osearch.onfocus="function(){" if(osearch.value="="search"){" osearch.value="" osearch.onblur="function(){" feature="" function="" featuremove(){="" if(ofeaul.offsetleft="">0){
			oFeaUl.style.left ="-971px";
		}
		oFeaUl.style.left=oFeaUl.offsetLeft +1+"px";	
	}
	var oFeature=document.getElementById("feature");
	var oFeaUl=oFeature.children[0];
		oFeaUl.innerHTML+=oFeaUl.innerHTML;
	var timer=setInterval(featureMove,30);
	oFeaUl.style.left="-971px";
	var aFeaLi=oFeaUl.getElementsByTagName("li");
	for(var i=0;i<afeali.length;i++){ afeali[i].onmouseover="function(){" if="" (isie6){="" this.children[1].style.display="block" ;="" }="" else="" {="" startmove(this.children[1],{opacity:80});="" ie6="" 的透明无效="" 估计是ie="" tester="" 的模拟有问题="" 其实应该是好的="" clearinterval(timer);="" afeali[i].onmouseout="function(){" else{="" startmove(this.children[1],{opacity:0});="" timer="setInterval(featureMove,30);" content="" aside="" display="" var="" ocontent="document.getElementById("content")," oaside="document.getElementById("aside");" oaside.onmouseover="function(){" startmove(oaside,{right:0})="" };="" oaside.onmouseout="function(){" startmove(oaside,{right:-230})="" "fixed"="" oasidebef="oAside.offsetTop;" 只是用来把oaside.offsettop一开始的值存起来="" window.onscroll="function(){" scrolltop="document.documentElement.scrollTop||document.body.scrollTop" 让它等到滚到content的时候再动，动的长度等于原来top加上滚轮动掉的距离（不算content那部分）="" 因为和上面的mouseover、out用的是同一个定时器，出问题了="" 两个解决办法="" 一个是将其放在链式里，先隐藏再动，不过会有一点时间问题="" 第二个是直接让他“消失”="" 思考再三，还是用链式那个吧，不然会有种突兀感="" *="" startmove(oaside,{right:-230},function(){="" (scrolltop="">oContent.offsetTop){
			startMove(oAside,{top:(oAsideBef+scrollTop-oContent.offsetTop)});
			}
			else{						//关于scrollTop偏移问题，else逻辑没加，所以onscroll事件在小于oContent.offsetTop时候，还在上一个if逻辑的位置处
				startMove(oAside,{top:oAsideBef});
			}
			//oJustText.value=(oAsideBef+"+"+scrollTop+"-"+oContent.offsetTop+"="+tt);
		*/
		startMove(oAside,{right:-230},function(){
			if (scrollTop<=ocontent.offsettop){ startmove(oaside,{top:oasidebef});="" }="" else="" if="" (scrolltop="">oContent.offsetTop&&scrollTop<(ocontent.offsetheight-oaside.offsetheight)){ startmove(oaside,{top:(oasidebef+scrolltop-ocontent.offsettop)});="" }="" else="" {="" 再加个逻辑="" 加入content下面的div高度太大，aside会从content下面出去="" 现在让它“定”在下面="" startmove(oaside,{top:(ocontent.offsetheight-oaside.offsetheight)});="" });="" content="" aside="" selected var="" aasidespan="[]," smark="" ;="" aasidediv="oAside.getElementsByTagName("div");" for(var="" i="0;i<3;i++){" aasidespan.push(oaside.children[i].children[0]);="" 之前是用的顶上的span="" 为了让a填满整个span="" 相应的css规则改了下="" 这里改成a了="" aasidespan[i].index="i;" aasidespan[i].smark="aAsideSpan[i].className;" *="" aasidespan[i].onmouseover="function(){" this.classname="otherContSelected" };="" aasidespan[i].onmouseout="function(){" 和="" onclick="" 冲突了="" aasidespan[i].onclick="function(){" for="" (var="" aasidespan[i].classname="aAsideSpan[i].sMark;" aasidediv[i].style.display="none" this.style.height="0" startmove(this,{height:this.offsetheight});="" if="" (isie6){="" aasidediv[this.index].style.margintop="-20px" 解决ie6="" div下移问题="" 暂时先这样解决吧="" aasidediv[this.index].style.display="block" aasidediv[this.index].style.width="0" startmove(aasidediv[this.index],{width:210});="" return="" false;="" article="" btn-connection="" oarticle="document.getElementById("article")," abtncon="getByClass(oArticle,"connection");" 用content的好了，因为还有个article设了margin="" 算了，还是用article吧，语义分清点，把article的margin改成padding好了="" 还是content吧，毕竟上篇下篇不是算在一篇article里面的="" abtncon[0].style.top="-120px" abtncon[1].style.left="120px" ocontent.onmouseout="function(){" abtncon[i].style.display="none" startmove(abtncon[0],{top:-120});="" startmove(abtncon[1],{left:120});="" ocontent.onmouseover="function(){" startmove(abtncon[0],{top:0});="" startmove(abtncon[1],{left:0});="" function="" gettop(obj){="" top="0;" while(obj){="" top+="obj.offsetTop;" obj="obj.offsetParent;" top;="" comment="" tocomment="getByClass(oArticle,"to_comment")[0]," ocomments="document.getElementById("comments");" tocomment.onclick="function(){" 点击评论数滚动到留言板="" j="document.documentElement.scrollTop||document.body.scrollTop;" k="getTop(oComments);" t="setInterval(function(){" if(k-j="">15){
				j+=(k-j)/15;
				scrollTo(0,j);
			}
			else{
				clearInterval(t);
			}
		},30)
		return false;
	}
	var showMessage=getByClass(oComments,"show_message")[0],
		messageBoard=getByClass(oComments,"message_board")[0],
		toLeave=getByClass(oComments,"to_leave")[0],
		leaveMessage=getByClass(oComments,"leave_message")[0];
		messageBoard.isShowed=leaveMessage.isShowed=false;
	var _this=null;
	var userLeaved=getByClass(messageBoard,"user_leaved")[0];
	var atThatTime=getByClass(userLeaved,"at_that_time")[0];
	function cancleReply_mark(obj){			//点击取消回复的btn 的函数
			obj.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode);
			_this.isShowed=false;
	};
	function toDouble(num){
		if(num</(ocontent.offsetheight-oaside.offsetheight)){></=ocontent.offsettop){></afeali.length;i++){></sfels.length;></arr.length;i++){>