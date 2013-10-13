$('document').ready(function(){
	
	/********************
	* 	File-selection	*
	*********************/
		var lastSelected = null;
			
		//Handles clicking on a selection-element, 
		$('.selectingBox').on('click', function(e){
			e.stopPropagation();
			
			//If ctrl isn't pressed, we clear the selection
			if(!e.ctrlKey)
				$('.selectedBox').removeClass('selectedBox');
				
			//Add the clicked file to the selection	
			$(this).addClass('selectedBox'); 
			//We update 'last selected file' if shift isn't pressed
			if(!e.shiftKey)
				lastSelected = $('.selectingBox').index($(this));
				
			//If shift is pressed and 'last selected file' is set we select all files in between clicked file and last selected file.
			if(e.shiftKey && lastSelected != null){
				var currentSelected = $('.selectingBox').index($(this));
				var inc = (lastSelected < currentSelected) ? 1 : -1;
				for(var i = lastSelected; i != currentSelected; i+= inc){
					$('.selectingBox').eq(i).addClass("selectedBox");
				}
			}
		});
	
		//Handler for clicking the background - clears the selection
		$('#back').on('click', function(e){
				$('.selectedBox').removeClass('selectedBox');
				lastSelected = null;
		});
	
		//Handles beginning of drag-select (mouse down on background)
		$('#back').on('mousedown', function(e){
			
			var beginX = e.pageX;
			var beginY = e.pageY;
			
			e.stopPropagation();
			
			//An eventhandler for mousemovement while drag-selecting is set.
			$('#back, #selection').on('mousemove', function(e){ 
				diffY = e.pageY-beginY;
				diffX = e.pageX-beginX;
				var height = 0;
				
				//We calculate dWith and dHeight
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
				
				//The properties for the selection-box is updated 
				var selectionBox = {
					'top': startY,
					'left': startX,
					'right': startX+width,
					'bottom':startY+height
				}
				
				//Files which are affexted by the drag-box are selected or deselected
				markOverlap(selectionBox);

				//The selection-box is redrawn using the previous set properties
				$('#selection').css({
					'left' : startX+"px",
					'width' : width+"px",
					'top' : startY+"px",
					'height': height+"px"
				}).show();
			});
		});
	
		//Handles the end of the drag-selection
		$('#back, #selection, #selectionBox').on('mouseup', function(e){
			$('#selection').css({'height': '0px', 'width':'0px'}).hide();
			$('.tempSelected').removeClass('tempSelected');
			$('#back').off('mousemove'); //The mousemove-eventhandler is unset.
		});	
	
		var files = [];
		
		//We cache the outline of each select-element
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
				if(yOverlap && xOverlap){
					if(!$(b.element).hasClass('selectedBox'))	
						$(b.element).addClass('selectedBox tempSelected');
				}else if($(b.element).hasClass('tempSelected'))	
					$(b.element).removeClass('selectedBox').removeClass('tempSelected');
			});
		}

	
	/********************
	*	File-movement	*
	*********************/
		$('.selectingBox').on('mousedown', function(e){
			$(this).addClass('moveBox');
			var beginX = e.pageX;
			var beginY = e.pageY;
			$(this).css('z-index', 5);
			e.stopPropagation();	
			$('.movebox').on('mousemove', function(e){
			
			e.stopPropagation();
				diffY = e.pageY-beginY;
				diffX = e.pageX-beginX;
				beginY = e.pageY;
				beginX = e.pageX;
				$(this).css({'position':"relative", "top":"+="+diffY+"px", "left":"+="+diffX+"px"});
			}) 
		}); 
		   
		$('.moveBox').on('mouseup', function(){ 
			$(this).off('mousemove').css('z-index', 2).animate({
				"top":"0px",
				"left":"0px"
			}); 
		});

	
	
	
	
	});	