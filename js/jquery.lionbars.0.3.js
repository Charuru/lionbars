(function( $ ) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
	$.fn.lionbars = function(color, showOnMouseOver, visibleBar, visibleBg) {
		// Initialization
		var elements = $(this),
			targets = new Array(),
			id = 0,
			vScrollWidth=0, hScrollWidth=0,
			addHScroll=false, addVScroll=false,
			paddingTop, paddingLeft, paddingBottom, paddingRight,
			i = 0;
		
		// Main Loop
		mainLoop();
		
		function mainLoop() {
			for (var i=0; elements[i] !== undefined; i++) {
				if (needScrollbars(elements[i]) && !$(elements[i]).hasClass('nolionbars')) {
					// add the element to the main array
					target = elements[i];
				
					// wrap the element
					wrap(target, addVScroll, addHScroll);
					
					// hide the default scrollbar
					hideScrollbars(target, addVScroll, addHScroll);
					reduceScrollbarsWidthHeight(target);
					setSlidersHeight(target);
					
					// prepare for next element
					resetVars();
				}
			}
		}
		
		// Core functions
		function setSlidersHeight(elem) {
			var el = $(elem);
			
			if (el.find('.lb-v-scrollbar')) {
				var h1, h2, hmin, hmax, gap, height;
				h1 = parseInt(el.find('.lb-content').height()) + parseInt(paddingTop) + parseInt(paddingBottom);
				h2 = el.find('.lb-wrap').outerHeight();
				hmin = 10;
				gap = h2 - el.find('.lb-v-scrollbar').height();
				hmax = h2 - gap - hmin;
				height = Math.round((h2*hmax)/h1 + hmin);
				el.find('.lb-v-scrollbar-slider').css({ "height" : height });
			}
		}
		function resetVars() {
			vScrollWidth = 0;
			hScrollWidth = 0;
			addHScroll=false;
			addVScroll=false;
			paddingTop = 0;
			paddingLeft = 0;
			paddingBottom = 0;
			paddingRight = 0;
		}
		function reduceScrollbarsWidthHeight(el) {
			var el = $(el);
			
			if (addVScroll && addHScroll) {
				el.find('.lb-v-scrollbar').css({ "height" : el.height()-12 });
				el.find('.lb-h-scrollbar').css({ "width" : el.width()-12 });
			} else {
				el.find('.lb-v-scrollbar').css({ "height" : el.height()-4 });
				el.find('.lb-h-scrollbar').css({ "width" : el.width()-4 });
			}
		}
		function hideScrollbars(elem, vscroll, hscroll) {
			var el = $(elem);
			
			if (vscroll || hscroll) {
				el.css({ "overflow" : 'hidden' });
				movePadding(el, el.find('.lb-wrap'));
				resizeInnerWrap(el, el.find('.lb-wrap'));
			}
		}
		function movePadding(from, to) {
			var fromEl = $(from);
			var toEl = $(to);
					// 	
					// paddingTop = fromEl.css('padding-top').replace('px', '');
					// paddingLeft = fromEl.css('padding-left').replace('px', '');
					// paddingBottom = fromEl.css('padding-bottom').replace('px', '');
					// paddingRight = fromEl.css('padding-right').replace('px', '');
			
			fromEl.css({ "padding" : 0 });
			toEl.css({
				"padding-top" : paddingTop+'px',
				"padding-left" : paddingLeft+'px',
				"padding-bottom" : paddingBottom+'px',
				"padding-right" : paddingRight+'px' 
			});
		}
		function resizeInnerWrap(main, child) {
			var mainEl = $(main);
			var childEl = $(child);
			mainEl.css({ "position" : 'relative' });
			childEl.css({
				"width" : mainEl.width()+vScrollWidth - paddingLeft - paddingRight, 
				"height" : mainEl.height()+hScrollWidth - paddingTop - paddingBottom 
			});
		}
		function setVScrollbarWidth(el) {
			vScrollWidth = el.width() - el.find('.lb-v-dummy').width();
		}
		function setHScrollbarWidth(el) {
			hScrollWidth = el.height() - el.find('.lb-h-dummy').height();
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
				el.prepend('<div class="lb-v-scrollbar"></div>');
				el.find('.lb-v-scrollbar').append('<div class="lb-v-scrollbar-slider"></div>');
			}
			if (hscroll) {
				el.prepend('<div class="lb-h-scrollbar"></div>');
				el.find('.lb-h-scrollbar').append('<div class="lb-h-scrollbar-slider"></div>');
			}

			// preparation for the next element
			id = id + 1;
		}
		function needScrollbars(elem) {
			var el = $(elem);
			addVScroll = false;
			addHScroll = false;
			
			getPadding(el);
			
			// Check for vertical scroll
			el.prepend('<div class="lb-v-dummy"></div>');
			if (el.width() > $('.lb-v-dummy').width()) {
				addVScroll = true;
				setVScrollbarWidth(el);
			}			
			el.find('.lb-v-dummy').remove();
			
			// Check for horizontal scroll
			el.prepend('<div class="lb-h-dummy"></div>');
			if (el.height() > $('.lb-h-dummy').height()) {
				addHScroll = true;
				setHScrollbarWidth(el);
			}			
			el.find('.lb-h-dummy').remove();
			
			if (addVScroll || addHScroll) {
				return true;
			}
		}
		function getPadding(elem) {
			var el = $(elem);
			
			paddingTop = el.css('padding-top').replace('px', '');
			paddingLeft = el.css('padding-left').replace('px', '');
			paddingBottom = el.css('padding-bottom').replace('px', '');
			paddingRight = el.css('padding-right').replace('px', '');
			
			// console.log(paddingTop, paddingLeft, paddingBottom, paddingRight);
		}
		
		return this.each(function() {
			var $this = $(this);
		});
	};
})( jQuery );