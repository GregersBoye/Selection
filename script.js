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
				var selectionBox = {
					'top': startY,
					'left': startX,
					'right': startX+width,
					'bottom':startY+height
				}
				markOverlap(selectionBox);
				$('#selection').css({
					'left' : startX+"px",
					'width' : width+"px",
					'top' : startY+"px",
					'height': height+"px"
				}).show();
				

				//FIND ALLE DERINDE (LISTE MED X- OG Y-KOORDINATER?)
			});
		});
	
		$('#back, #selection, #selectionBox').on('mouseup', function(e){
			$('#selection').css({'height': '0px', 'width':'0px'}).hide();
			$('#back').off('mousemove');
		});	
		
		
		
		var files = [];
		$('.selectingBox').each(function(){
			var offset = $(this).offset();
			var tempElement = {
				'top' : offset.top,
				'left': offset.left,
				'right': offset.left+$(this).outerWidth(),
				'bottom':offset.top+$(this).outerHeight(),
				
				'element': $(this)
			}
			files.push(tempElement);
			
		});
	
		function markOverlap(s){
			$.each(files, function(index, b){
				yOverlap = (s.top<b.bottom && s.bottom>b.top);
				xOverlap = (s.left < b.right && s.right > b.left);
				if(yOverlap && xOverlap)
					$(b.element).addClass('selectedBox')
			});
		}
	});	