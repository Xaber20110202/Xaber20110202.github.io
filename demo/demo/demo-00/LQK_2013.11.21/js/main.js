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
window.onload=function(){
	var isIE6=/msie 6/i.test(navigator.userAgent);
	var oJustText=document.getElementById("just_for_text");
	var oNav=document.getElementById("navigation"),
		aNavAllLi=oNav.getElementsByTagName("li"),
		aNavLi=getByClass(oNav,"nav");
	//导航栏
	aNavLi.splice(aNavLi.length-1,1);	//去掉最后那个搜索框
	var backGr=""						//我挺好奇，为什么overcolor这个函数以及backGr这个变量会导致IE6的 invalid argument（无效参数） 问题
										//难道是因为没有给li单独设置背景，而只是给ul设置了，所以li得不到它的背景，然后出错了吗。应该就是这样了
										//解决办法应该有两个，单独设，不过测了下，即使设置了颜色，获取回来的也不能应用回去，还是 invalid argument错误
										//或者另一个的话，估计得改动很多代码，不是用background，而是另外的li覆盖上去
										//现在只是做个判断，勉强不出错先
	for(var i=0;i<anavli.length;i++){ backgr="getStyle(aNavLi[i],"background");" anavli[i].onmouseover="function(){" this.style.background="#990000" ;="" if(this.children[this.children.length-1].children[0]){="" this.more="true;" this.children[this.children.length-1].style.display="block" }="" anavli[i].onmouseout="function(){" if(this.more){="" if="" (isie6){="" else="" {="" overcolor(this,backgr);="" };="" 导航栏下li="" var="" changearr="[];" foreach(anavallli,function(k){="" changearr.push(k);="" })="" t="0;" while(t<changearr.length){="" if(changearr[t].classname="="nav"){" changearr.splice(t,1);="" t--;="" t++;="" for(var="" i="0;i<changeArr.length;i++){" changearr[i].onmouseover="function(){" changearr[i].onmouseout="function(){" 搜索框="" osearch="getByClass(document.getElementById("searchbox"),"search")[0];" osearch.onfocus="function(){" if(osearch.value="="search"){" osearch.value="" osearch.onblur="function(){" feature="" ofeature="document.getElementById("feature");" ofeaul="oFeature.children[0];" ofeaul.innerhtml+="oFeaUl.innerHTML;" timer="setInterval(featureMove,30);" ofeaul.style.left="-971px" afeali="oFeaUl.getElementsByTagName("li");" afeali[i].onmouseover="function()" this.children[1].style.display="block" clearinterval(timer);="" startmove(this.children[1],{opacity:80});="" afeali[i].onmouseout="function()" else{="" startmove(this.children[1],{opacity:0});="" 解决ie6="" filter属性是不是不支持？="" 将其放入链式中="" 不然会有种直接消失的感觉="" 链式好像也不行="" 就不放了="" 做个判断好了="" ie6="" 直接block="" 和none="" move的效果就不要了="" 而其实是ie="" teaster模拟的问题，实际的ie6="" 应该没问题="" function="" featuremove(){="" if(ofeaul.offsetleft="">0){
			oFeaUl.style.left ="-971px";
		}
		oFeaUl.style.left=oFeaUl.offsetLeft +1+"px";	
	}
	//content aside display
	var oContent=document.getElementById("content"),
		oAside=document.getElementById("aside");
	oAside.onmouseover=function(){
		startMove(oAside,{right:0})
	};
	oAside.onmouseout=function(){
		startMove(oAside,{right:-230})
	};
	//content aside "fixed"
	var oAsideBef=oAside.offsetTop;		//只是用来把oAside.offsetTop原来的值存起来，不然直接放进去会出问题
	window.onscroll=function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop	
									//让它等到滚到content的时候再动，动的长度等于原来top加上滚轮动掉的距离（不算content那部分）
									//因为和上面的mouseover、out用的是同一个定时器，出问题了
									//两个解决办法		一个是将其放在链式里，先隐藏再动，不过会有一点时间问题
									//第二个是直接让他“消失”
									//思考再三，还是用链式那个吧，不然会有种突兀感
		/*							
		startMove(oAside,{right:-230},function(){
			if (scrollTop>oContent.offsetTop){
			startMove(oAside,{top:(oAsideBef+scrollTop-oContent.offsetTop)});
			}
			else{						//关于scrollTop偏移问题，else逻辑没加，所以onscroll事件在小于oContent.offsetTop时候，还在上一个if逻辑的位置处
				startMove(oAside,{top:oAsideBef});
			}
			//oJustText.value=(oAsideBef+"+"+scrollTop+"-"+oContent.offsetTop+"="+tt);
		*/
		startMove(oAside,{right:-230},function(){
			if (scrollTop<=ocontent.offsettop){ startmove(oaside,{top:oasidebef});="" }="" else="" if="" (scrolltop="">oContent.offsetTop&&scrollTop<(ocontent.offsetheight-oaside.offsetheight)){ startmove(oaside,{top:(oasidebef+scrolltop-ocontent.offsettop)});="" }="" else="" {="" 再加个逻辑="" 加入content下面的div高度太大，aside会从content下面出去="" 现在让它“定”在下面="" startmove(oaside,{top:(ocontent.offsetheight-oaside.offsetheight)});="" content改成article好了，因为在content里放了comments="" });="" content="" aside="" selected var="" aasidespan="[]," smark="" ;="" aasidediv="oAside.getElementsByTagName("div");" for(var="" i="0;i<3;i++){" aasidespan.push(oaside.children[i]);="" aasidespan[i].index="i;" aasidespan[i].smark="aAsideSpan[i].className;" *="" aasidespan[i].onmouseover="function(){" this.classname="otherContSelected" };="" aasidespan[i].onmouseout="function(){" 和="" onclick="" 冲突了="" aasidespan[i].onclick="function(){" for="" (var="" aasidespan[i].classname="aAsideSpan[i].sMark;" aasidediv[i].style.display="none" this.style.height="0" startmove(this,{height:this.offsetheight});="" if="" (isie6){="" aasidediv[this.index].style.margintop="-20px" 解决ie6="" div下移问题="" 暂时先这样解决吧="" aasidediv[this.index].style.display="block" aasidediv[this.index].style.width="0" startmove(aasidediv[this.index],{width:210});="" article="" btn-connection="" oarticle="document.getElementById("article")," abtncon="getByClass(oArticle,"connection");" 用content的好了，因为还有个article设了margin="" 算了，还是用article吧，语义分清点，把article的margin改成padding好了="" 还是content吧，毕竟上篇下篇不是算在一篇article里面的="" abtncon[0].style.top="-120px" abtncon[1].style.left="120px" ocontent.onmouseout="function(){" abtncon[i].style.display="none" startmove(abtncon[0],{top:-120});="" startmove(abtncon[1],{left:120});="" ocontent.onmouseover="function(){" startmove(abtncon[0],{top:0});="" startmove(abtncon[1],{left:0});="" comment="" tocomment="getByClass(oArticle,"to_comment")[0]," ocomments="document.getElementById("comments");" to="null;" tocomment.onclick="function(){" yy="0;" window.scrollto(0,yy);="" yy+="10;" (yy="">oContent.offsetTop+oContent.offsetHeight-oComments.offsetHeight){
				clearInterval(to);
			}
		},30);  
	}
	*/
	var showMessage=getByClass(oComments,"show_message")[0],
		messageBoard=getByClass(oComments,"message_board")[0],
		toLeave=getByClass(oComments,"to_leave")[0],
		leaveMessage=getByClass(oComments,"leave_message")[0];
		messageBoard.isShowed=leaveMessage.isShowed=false;
	var _this=null;
	var userLeaved=getByClass(messageBoard,"user_leaved")[0];
	var atThatTime=getByClass(userLeaved,"at_that_time")[0];
	function cancleReply_mark(obj){			//点击取消回复的btn 的函数
			obj.parentNode.parentNode.removeChild(obj.parentNode);
			_this.isShowed=false;
	};
	function toDouble(num){
		if(num</(ocontent.offsetheight-oaside.offsetheight)){></=ocontent.offsettop){></anavli.length;i++){></arr.length;i++){>