
var myScroll,myScrollR,myScrollC;
var errorFlag = true;

var currentObj;
var currentObjTemp;
var timer;

var currentCBlockImgObj;
var currentCBlockImgObjTemp;
var currentCBlockObj;
var timerCBlock;

var currentListDivObj;
var currentListimgObj;
function loaded() {
	myScroll = new iScroll('wrapperLeft');
	myScrollR = new iScroll('wrapperRight');
	myScrollC = new iScroll('wrapperCenter');
	
	$(".icon").click(function(){

				currentObjTemp = this;
					 longPress();
				return false; 
				});
	$(".iconR").click(function(){
					 
					 currentObjTemp = this;
					 longPress();
					 return false; 
					 });
	$(".cBlock").click(function(){
					 
					 currentCBlockObj = this;
					 longPressForCBlock();
					 return false; 
					 });
	
	/*$(".cBlock").bind("touchstart",function(){
					  currentCBlockObj =this;
					  timerCBlock = setTimeout('longPressForCBlock()',800);
	}).bind("touchend",function(){
			clearTimeout(timerCBlock);
			clearSelection();
	});
	*/
	
	
	
	/*
	
	$(".cBlock img").bind("touchend",function(){
					// Clear timeout
					clearTimeout(timer);		
					currentObjTemp=undefined;		
					return false;
					}).bind("touchstart",function(){
							// Set timeout
							//showError('touchstart');
							currentCBlockImgObjTemp = this;
							timer = setTimeout('longPressBlockImage()',800);
							return false; 
							}); */
	
	$(".thelist li").click(function(){
						   currentListDivObj =this;
						   longPressForList();
						   });
	
	$(".thelistR li").click(function(){
						   currentListDivObj =this;
						   longPressForListR();
						   });
	
	
	
}

function longPress() {
	currentObj = currentObjTemp;
	clearSelection();
	$(currentObj).css('border','solid 2px #AAA');

}
function clearSelection()
{
	$(".icon").css('border','0px');
	$(".iconR").css('border','0px');
}
function longPressForCBlock()
{
	if(currentObj!=undefined)
	{
		if($(currentObj).attr("class")=="icon")
		{
			if ($("#"+$(currentCBlockObj).attr("id")+" > .icon").size()>0) 
				return;
			else
				$(currentCBlockObj).append(currentObj);
				
		}
		else
		{
			if ($("#"+$(currentCBlockObj).attr("id")+" > .iconR").size()>0) 
				return;
			else
				$(currentCBlockObj).append(currentObj);
			$(currentObj).css('float','right');
		}
		
		currentObj=undefined;
		currentCBlockObj = undefined;
		clearSelection();
	}
	
}

function longPressForList()
{
	if(currentObj!=undefined)
	{
		if($(currentObj).attr("class")=="iconR")return;
		
		$(currentListDivObj).append(currentObj);
		currentObj=undefined;
		currentListDivObj = undefined;
		clearSelection();
	}
	
}
function longPressForListR()
{
	if(currentObj!=undefined)
	{
		if($(currentObj).attr("class")=="icon") return;
		$(currentListDivObj).append(currentObj);
		currentObj=undefined;
		currentListDivObj = undefined;
		clearSelection();
	}
	
}

function showError(error) {
	if(errorFlag) {
		alert(error);
	}
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);

