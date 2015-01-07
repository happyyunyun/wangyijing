var ById=function(id){
	return document.getElementById(id);
}
var nav=ById('picture').getElementsByTagName('li');
var num=ById('num').getElementsByTagName('li');
var i=0,len = nav.length;
var times;
var move=function(){
		if(i-1>=0){
			nav[i-1].style.display='';
			num[i-1].style.background="black";
		}
		if(i>len-1){i=0;}
		nav[i].style.display='block';
		num[i].style.background="#FF6666";
		i++;
	}
	move();
var begain=function(){ 
    times=setInterval(function(){move();},1000);
}
begain();
var stoptime=function(){
	clearInterval(times);
}
	/*点哪打哪*/
var s=function(r){
	var t=0;
	for(var e=0;e<num.length;e++){
		if(e==r) {
			t=e;	
		}	
	}
	for(var q=0;q<nav.length;q++){
		nav[q].style.display="none";
		num[q].style.background="rgba(0,0,0,0.3)";
	}
	nav[t].style.display="block";
	num[t].style.background="rgba(0,0,0,0.6)";
	i=t;
}