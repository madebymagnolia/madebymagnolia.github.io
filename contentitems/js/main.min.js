$(document).ready(function() {

	// Reith Mode
	$(document).keydown(function(e){
		if(e.keyCode == 82) {
			var attr = $('body').attr('data-font');
			if (attr == 'reith'){
				$('body').attr('data-font','');
				$('.instruction span').text('Reith Sans');
			} else {
				$('body').attr('data-font','reith');
				$('.instruction span').text('Helvetica Neue');
			}
		}
	});

	// Card Positioning
	$('.card').each(function(){

		var positionx = $(this).attr('data-pos-x');
		var positiony = $(this).attr('data-pos-y');

		$(this).css('left',positionx + 'px').css('top',positiony + 'px').attr('data-active',0);

	});

	// Animation Calculations
	$('.card').each(function(){
		height = $(this).find('.card-label-title').height();
		console.log(height);
		if (height > 30) {
			$(this).addClass('card-doubleline');
		}
	});

	// Set initial state for cards
	var homeindex = $('.card.home').attr('data-index-a');
	$('.card.home').addClass('focus').attr('data-active',homeindex);

	// Press a key
	$(document).keydown(function(e){

		// Up
		if(e.keyCode == 38) {

			var currentcard = parseInt($('.card.focus').attr('data-active'));
			var prev = currentcard - 10;

			if ($('.card[data-index-a="' + prev + '"],.card[data-index-b="' + prev + '"]').length){

				if($('.card.focus').hasClass('tall') || $('.card.focus').hasClass('mega')) {

					$('.card.focus').removeClass('focus');
					$('nav[role="secondary"]').addClass('active');

				} else {

					$('.card.focus').removeClass('focus').attr('data-active','0');
					$('.card[data-index-a="' + prev + '"],.card[data-index-b="' + prev + '"]').addClass('focus').attr('data-active',prev);

				}

			}

		}

		// Left
		if(e.keyCode == 37) {

			var currentcard = parseInt($('.card.focus').attr('data-active'));
			var prev = currentcard - 1;

			if ($('.card[data-index-a="' + prev + '"],.card[data-index-b="' + prev + '"]').length){

				$('.card.focus').removeClass('focus').attr('data-active','0');
				$('.card[data-index-a="' + prev + '"],.card[data-index-b="' + prev + '"]').addClass('focus').attr('data-active',prev);					

				var position = $('.card.focus').position();
				var width = $('.card.focus').width();
				if(position.left > 256) {
					var positionadjust = 274 - position.left;
					$('.container-inner').css('left',positionadjust + 'px');
				} else {
					$('.container-inner').css('left','76px');
				}

			}

		}

		// Right
		if(e.keyCode == 39) {

			var currentcard = parseInt($('.card.focus').attr('data-active'));
			var next = currentcard + 1;

			if ($('.card[data-index-a="' + next + '"],.card[data-index-b="' + next + '"]').length){

				$('.card.focus').removeClass('focus').attr('data-active','0');
				$('.card[data-index-a="' + next + '"],.card[data-index-b="' + next + '"]').addClass('focus').attr('data-active',next);

				var position = $('.card.focus').position();
				var width = $('.card.focus').width();
				if(position.left > 256) {
					var positionadjust = 274 - position.left;
					$('.container-inner').css('left',positionadjust + 'px');
				}

			}

		}

		// Down
		if(e.keyCode == 40) {

			var currentcard = parseInt($('.card.focus').attr('data-active'));
			var next = currentcard + 10;

			if ($('.card[data-index-a="' + next + '"],.card[data-index-b="' + next + '"]').length){

				if($('.card.focus').hasClass('tall')) {

				} else {

					$('.card.focus').removeClass('focus').attr('data-active','0');
					$('.card[data-index-a="' + next + '"],.card[data-index-b="' + next + '"]').addClass('focus').attr('data-active',next);

				}

			}

		}

	});

});