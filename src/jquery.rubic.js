// Biryukov Vyacheslav (NetWorm)
// Rubic gallery jQuery plugin
// 06.07.2012

(function($){
	jQuery.fn.rubic = function(options){
		options = $.extend({
			itemSize 		: 150,
			itemMargin		: 5,
			rubicCount 		: Math.sqrt(this.children("li").size()),
			itemRadius	 	: 15
    	}, options);

		/* Plugin actions */
		if (!isInt(options.rubicCount)) {
			alert("Sorry, but plugin can't work with your number of items. (Must be 4, 9, 16, 25, etc.)");
			return;
		}

		this.addClass("rubic");

		/* Restyling gallery items */
		this.children("li").each(function(index, object) {
			var li = $(object);
			li.css({
				'float': 'left',
				'background-image': 'url("' + li.find("img:first").attr("src") + '")',
				'width': options.itemSize + 'px',
				'height': options.itemSize + 'px',
				'marginRight': options.itemMargin + 'px',
				'marginBottom': options.itemMargin + 'px',
				'borderRadius': options.itemRadius + 'px',
				'position': 'relative',
				'cursor': 'pointer'
			});

			li.addClass("rubic-item");

			li.find("img:first").remove();


			/* Restyling span elements and setting up events */
			li.find("span").hide().css({
				'position': 'absolute',
				'bottom': '0px',
				'left': '0px',
				'background-color': 'rgba(0,0,0,0.5)',
				'padding': '5px',
				'color': 'white',
				'font-size': '11px',
				'height': '50px',
				'borderBottomLeftRadius': options.itemRadius + 'px',
				'borderBottomRightRadius': options.itemRadius + 'px'
			});	

			li.hover(
				function() {
					$(this).parent().find("li span:first").stop().fadeOut();
					$(this).find("span:first").delay(300).fadeIn(400, function() { $(this).stop(); });
				},
				function() {
					$(this).find("span:first").fadeOut(400);
				});
		});



		/* Scaling gallery & removing dots */
		var rubic_size = (options.itemSize + options.itemMargin) * options.rubicCount + options.itemMargin;
	
		this.css({
			'list-style-type': 'none',
			'list-style-image': 'none',		
			'width': rubic_size + 'px',
			'height': rubic_size + 'px',
			'margin': 0,
			'padding': 0,
			'overflow': 'hidden',
			'position': 'relative'
		});


		/* Marking items in corners of rubic */
		//set_position_classes(this);


		/* Writing coordinates in `rel` attribute for each element */
		set_coords(this);


		/* Setting up event for element click */
		this.children("li.rubic-item").on("click", function() {
			item_click($(this));
		});


		/* Frequently used functions */

		function item_click(object) {
			if (object.hasClass("overlay")) {
				object.fadeOut(400, function() {
					object.remove();
				});
				return;
			}

			/*$(this).parent().children("li.rubic-item").each(function() {
				$(this).children("span:first").stop().fadeOut();
			});*/


			var coords = get_coords(object);

			object.clone(true).insertAfter(object);

			/*object.parent().children("li.rubic-item").each(function() {

				if ($(this).hasClass("overlay")) { return; } else { $(this).bind('click',function() { item_click($(this));}) }

			});

			/*object.siblings().bind('click',function() {

				item_click($(this));

			})*/

			object.css({
				'position': 'absolute',
				'bottom': (options.rubicCount - coords[0]) * (options.itemSize + options.itemMargin) + options.itemMargin,
				'right': (options.rubicCount - coords[1]) * (options.itemSize + options.itemMargin) + options.itemMargin,
				'z-index': 200
				//'marginRight': 0 + 'px',
				//'marginBottom': 0 + 'px',
			});

			object.addClass("overlay");	

			if ((coords[1] - 1) >= 0) { // If we have a column to the left, then we pull overlay to the left
				var scaleWidth = (options.itemSize * coords[1]) + (options.itemMargin * (coords[1] - 1));

				object.animate({ // Scaling
					'width':scaleWidth + 'px'
				}, 200, function() {

					if ((coords[0] - 1) >= 0) { // If we have a column at the top, then we pull overlay the item up
						var scaleWidth = (options.itemSize * coords[0]) + (options.itemMargin * (coords[0] - 1));

						object.animate({ // Scaling
							'height': scaleWidth + 'px'
						}, 200, function() {

							object.css({ // Changin coordinates offset from the bottom right corner of gallery to the top left corner
								'top': '0px',
								'left': '0px',
								'bottom': '',
								'right': ''
							});

							if ((options.rubicCount - coords[1]) >= 0) { // If we have a column to the left, then we pull overlay to the left
								var scaleWidth = (options.rubicCount*options.itemSize)+(options.itemMargin*(options.rubicCount-1));

								$("ul.rubic").find("li.overlay").animate({ // Scaling
									'width': scaleWidth
								}, 200, function() {

									//if (console) console.log("Animation stage 2!" + $("ul.rubic").css("width"));

									if ((options.rubicCount - coords[0]) >= 0) { // If we have a column at the top, then we pull overlay the item up
										var scaleWidth = (options.rubicCount * options.itemSize) + (options.itemMargin * (options.rubicCount - 1));
										
										object.animate({ // Scaling
											'height': scaleWidth
										}, 200);
									}
								});

								object.children("span:first").animate({ // Scaling
									'width':(scaleWidth - 2 * options.itemMargin) + 'px'
								}, 200);
							}
						});
					}
				});

				object.children("span:first").animate({ // Scaling
					'width':(scaleWidth - 2 * options.itemMargin) + 'px'
				}, 200); // End of animations
			} // End IF
		}
		
		function get_coords(item) { // get coordinates of recieved element from 'rel' attribute
			var rel = item.attr("rel").split(',');
			return [parseInt(rel[0]), parseInt(rel[1])];
		}

		function set_coords(gallery) { // Writing coords for each element
			var num = 0;
			for (var x = 1; x <= options.rubicCount; x++) {
				for (var y = 1; y <= options.rubicCount; y++) {
					gallery.children("li:eq(" + num + ")").attr('rel', x + ',' + y);
					num++;
				}
			}
		}

		function isInt(value) {
			return parseInt(value) == value;
		}
	};
})(jQuery);