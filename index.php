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
</body>
</html>