
var myScroll,myScrollR,myScrollC;
var errorFlag = true;

var currentObj;
var timer;

function loaded() {
	myScroll = new iScroll('wrapperLeft');
	myScrollR = new iScroll('wrapperRight');
	myScrollC = new iScroll('wrapperCenter');
	
	$(".icon").bind("touchend",function(){
			// Clear timeout
			clearTimeout(timer);
			return false;
	}).bind("touchstart",function(){
			// Set timeout
			currentObj = this;
			timer = setTimeout('longPress()',1000);
			return false; 
	});
}

function longPress() {
	
}


function showError(error) {
	if(errorFlag) {
		alert(error);
	}
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);

