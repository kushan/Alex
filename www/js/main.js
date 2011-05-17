
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
	
	addEventListener("orientationChanged", updateOrientation);
	
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

function updateOrientation(e) {
	try {
		switch (e.orientation) {
			case 0: // portrait
			case 180: // portrait
				$('#wrapperCenter').css('height','480px');
				myScrollC.refresh();
				$('#wrapperLeft').fadeOut();
				$('#wrapperRight').fadeOut();
				break;
			case -90: // landscape
			case 90: // landscape
				$('#wrapperCenter').css('height','320px');
				myScrollC.refresh();
				$('#wrapperLeft').fadeIn();
				$('#wrapperRight').fadeIn();
				break;
		}
	} catch(ex) {
		showError('updateOrientation ex:' + ex);
	}
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);

