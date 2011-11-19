(function( $ ) {
	$.fn.lionbars = function(color, showOnMouseOver, visibleBar, visibleBg) {
		// Initialization
		var elements = $(this),
			targets = new Array(),
			id = 0,
			vScrollWidth=0,
			hScrollWidth=0,
			addHScroll=false, 
			addVScroll=false,
			i = 0;
		
		// Main Loop
		mainLoop();
		function mainLoop() {
			for (var i=0; elements[i] !== undefined; i++) {
				if (needScrollbars(elements[i])) {
					// setVScrollbarWidth(), setHScrollbarWidth() have been called from needScrollbars(). 
					// add the element to the main array
					targets[i] = elements[i];
				
					// wrap the element
					wrap(targets[i], addVScroll, addHScroll);
				}
			}
		}
		
		// Core functions
		function setVScrollbarWidth(elem) {
			vScrollWidth = elem.width() - elem.find('.lb-v-dummy').width();
			console.log(elem, 'v:', vScrollWidth);
		}
		function setHScrollbarWidth(elem) {
			hScrollWidth = elem.height() - elem.find('.lb-h-dummy').height();
			console.log(elem, 'h:', hScrollWidth);
		}
		function needScrollbars(elem) {
			var elem = $(elem);
			addVScroll = false;
			addHScroll = false;
			
			// Check for vertical scroll
			elem.prepend('<div class="lb-v-dummy"></div>');
			if (elem.width() > $('.lb-v-dummy').width()) {
				addVScroll = true;
				setVScrollbarWidth(elem);
			}
			elem.find('.lb-v-dummy').remove();
			
			// Check for horizontal scroll
			elem.prepend('<div class="lb-h-dummy"></div>');
			if (elem.height() > $('.lb-h-dummy').height()) {
				addHScroll = true;
				setHScrollbarWidth(elem);
			}
			elem.find('.lb-h-dummy').remove();
			
			if (addVScroll || addHScroll) {
				return true;
			}
		}
		function wrap(el, vscroll, hscroll) {
			var el = $(el);
			var elemId = el.attr('id');

			if (elemId !== undefined) {
				el.wrapInner('<div class="lb-wrap" id="lb-wrap-'+id+'-'+elemId+'"></div>');
				var wrap = $('#lb-wrap-'+id+'-'+elemId);
			} else {
				el.wrapInner('<div class="lb-wrap" id="lb-wrap-'+id+'"></div>');
				var wrap = $('#lb-wrap-'+id);
			}
			wrap.wrapInner('<div class="lb-content"></div>');
			if (vscroll) {
				wrap.prepend('<div class="lb-v-scrollbar"></div>');
				wrap.find('.lb-v-scrollbar').append('<div class="lb-v-scrollbar-slider"></div>');
			}
			if (hscroll) {
				wrap.prepend('<div class="lb-h-scrollbar"></div>');
				wrap.find('.lb-h-scrollbar').append('<div class="lb-h-scrollbar-slider"></div>');
			}
			
			// preparation for the next element
			id = id + 1;
		}
		
		return this.each(function() {
			var $this = $(this);
		});
	};
})( jQuery );