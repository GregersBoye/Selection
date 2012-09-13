<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript">
$('document').ready(function(){
		var lastSelected = null;
		
		$('.selectingBox').on('click', function(e){
			e.stopPropagation();
			if(!e.ctrlKey)
				$('.selectedBox').removeClass('selectedBox');
			$(this).addClass('selectedBox');
			if(!e.shiftKey)
				lastSelected = $('.selectingBox').index($(this));
			if(e.shiftKey && lastSelected != null){
				var currentSelected = $('.selectingBox').index($(this));
				var inc = (lastSelected < currentSelected) ? 1 : -1;
				for(var i = lastSelected; i != currentSelected; i+= inc){
					$('.selectingBox').eq(i).addClass("selectedBox");
				}
			}
		});

		$('#back').on('click', function(){
			$('.selectedBox').removeClass('selectedBox');
		});

		$('#back').on('mousedown', function(e){
			var beginX = e.pageX;
			var beginY = e.pageY;
			
			e.stopPropagation();
			$('#back, #selection').on('mousemove', function(e){ 
				diffY = e.pageY-beginY;
				diffX = e.pageX-beginX;
				var height = 0;
				if(diffY < 0) {
					startY = e.pageY;
					height = -1*diffY;
				}else{
					startY = beginY;
					height = diffY;
				}
				
				if(diffX < 0){
					startX = e.pageX;
					width = -1*diffX;
				}else{
					startX = beginX;
					width = diffX;
				}
				
				$('#selection').css({
					'left' : startX+"px",
					'width' : width+"px",
					'top' : startY+"px",
					'height': height+"px"
				}).show();
			
				
				
				
				
		//LAV MOUSEMOVE - WHILE MOUSEDOWN	
		//TEGN FIRKANT
		//FIND ALLE DERINDE (LISTE MED X- OG Y-KOORDINATER?)



			});
		});
		

		
		$('#back, #selection, #selectionBox').on('mouseup', function(e){
			
			$('#selection').css({'height': '0px', 'width':'0px'}).hide();
			$('#back').off('mousemove');
		});
		
		
});
</script>


<title>Untitled Document</title>
<style type="text/css">

.selectingBox{
	width: 100px;
	height:100px;
	background-color:#0a0;
	border: 1px solid #000;
	float:left;
	margin: 0 10px 10px 0;
}

.selectedBox{
	background-color: #a00;
	
}
body{background-color: #ccc;} 
#back{
	width: 100%;
	background-color:#aaa;
	padding:10px;
}

#selection{
	  -moz-opacity: .20;
  -khtml-opacity: .20;
  -webkit-opacity: .20;
  opacity: .20;	
  background-color:#09F;
  height: 100px; 
  display: none;
  width: 100px;
  position: absolute;
  border: 1px solid  #00f;
}
</style>
</head>
 <body>
 <div id="back">
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectedBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<div class="selectingBox"></div>
	<br style="clear:both;"  />
</div>
<div id="selection"> </div>
</body>
</html>