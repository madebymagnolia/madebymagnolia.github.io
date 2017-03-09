$(document).ready(function() {

	// Press a key
	$(document).keydown(function(e){

		// All state
		if($('body').hasClass('state-all')){

			var allcardcount = $('.all-inner .card').length;
			var allcardcurrent = $('.all-inner .card.focus').index();

			// Press Right
			if(e.keyCode == 39) {

				var allcardnext = allcardcurrent + 1;

				if(allcardnext < allcardcount) {

					$('.all-inner .card').removeClass('focus');
					$('.all-inner .card:eq(' + allcardnext + ')').addClass('focus');

					if (allcardnext > 1 ) {

						var allcardpos = (allcardnext * 240) - 480;
						$('.all-inner').css('left', '-' + allcardpos + 'px');

					}

				}

			}

			// Press Left
			if(e.keyCode == 37) {

				var allcardprev = allcardcurrent - 1;

				if(allcardprev > -1) {

					$('.all-inner .card').removeClass('focus');
					$('.all-inner .card:eq(' + allcardprev + ')').addClass('focus');

					var allcardpos = (allcardprev * 240) - 480;
					$('.all-inner').css('left', '-' + allcardpos + 'px');

				}

			}

			// Press Enter
			if(e.keyCode == 13) {

				if(!$('.all-inner .card.focus').hasClass('selected')) {

					var selected = $('.all-inner .card.focus').attr('data-title');
					$('.all-inner .card.focus').addClass('selected');

					if($('.five-inner .card:eq(0)').hasClass('unchosen')){
						$('.five-inner .card:eq(0)').removeClass('unchosen').text(selected).attr('data-title',selected);
					} else if ($('.five-inner .card:eq(1)').hasClass('unchosen')){
						$('.five-inner .card:eq(1)').removeClass('unchosen').text(selected).attr('data-title',selected);
					} else if ($('.five-inner .card:eq(2)').hasClass('unchosen')){
						$('.five-inner .card:eq(2)').removeClass('unchosen').text(selected).attr('data-title',selected);
					} else if ($('.five-inner .card:eq(3)').hasClass('unchosen')){
						$('.five-inner .card:eq(3)').removeClass('unchosen').text(selected).attr('data-title',selected);
					} else if ($('.five-inner .card:eq(4)').hasClass('unchosen')){
						$('.five-inner .card:eq(4)').removeClass('unchosen').text(selected).attr('data-title',selected);
						$('body').removeClass();
						setTimeout(function(){
							$('.message').fadeOut(200);
							$('.all-container').fadeOut(300);
							setTimeout(function(){
								$('.message').text('Hand the remote to someone else and choose 2 from that list');
								$('.message').fadeIn(200);
								$('.five-container').css('top','200px');
								$('.two-container').css('top','440px');
								setTimeout(function(){
									$('.five-inner .card:eq(0)').addClass('focus');
									$('body').addClass('state-five');
								},200);
							},300);
						},200);
					}

				}

			}

		}

		// Five state
		if($('body').hasClass('state-five')){

			var fivecardcount = $('.five-inner .card').length;
			var fivecardcurrent = $('.five-inner .card.focus').index();

			// Press Right
			if(e.keyCode == 39) {

				var fivecardnext = fivecardcurrent + 1;

				if(fivecardnext < fivecardcount) {

					$('.five-inner .card').removeClass('focus');
					$('.five-inner .card:eq(' + fivecardnext + ')').addClass('focus');

				}

			}

			// Press Left
			if(e.keyCode == 37) {

				var fivecardprev = fivecardcurrent - 1;

				if(fivecardprev > -1) {

					$('.five-inner .card').removeClass('focus');
					$('.five-inner .card:eq(' + fivecardprev + ')').addClass('focus');

				}

			}

			// Press Enter
			if(e.keyCode == 13) {

				if(!$('.five-inner .card.focus').hasClass('selected')) {

					var selected = $('.five-inner .card.focus').attr('data-title');
					$('.five-inner .card.focus').addClass('selected');

					if($('.two-inner .card:eq(0)').hasClass('unchosen')){
						$('.two-inner .card:eq(0)').removeClass('unchosen').text(selected).attr('data-title',selected);
					} else if ($('.two-inner .card:eq(1)').hasClass('unchosen')){
						$('.two-inner .card:eq(1)').removeClass('unchosen').text(selected).attr('data-title',selected);
						$('body').removeClass();
						setTimeout(function(){
							$('.message').fadeOut(200);
							$('.five-container').fadeOut(300);
							setTimeout(function(){
								$('.message').text('Hand the remote back and make your selection from the final two');
								$('.message').fadeIn(200);
								$('.two-container').css('top','200px');
								$('.one-container').css('top','440px');
								setTimeout(function(){
									$('.two-inner .card:eq(0)').addClass('focus');
									$('body').addClass('state-two');
								},200);
							},300);
						},200);
					}

				}

			}

		}

		// Two state
		if($('body').hasClass('state-two')){

			var twocardcount = $('.two-inner .card').length;
			var twocardcurrent = $('.two-inner .card.focus').index();

			// Press Right
			if(e.keyCode == 39) {

				var twocardnext = twocardcurrent + 1;

				if(twocardnext < twocardcount) {

					$('.two-inner .card').removeClass('focus');
					$('.two-inner .card:eq(' + twocardnext + ')').addClass('focus');

				}

			}

			// Press Left
			if(e.keyCode == 37) {

				var twocardprev = twocardcurrent - 1;

				if(twocardprev > -1) {

					$('.two-inner .card').removeClass('focus');
					$('.two-inner .card:eq(' + twocardprev + ')').addClass('focus');

				}

			}

			// Press Enter
			if(e.keyCode == 13) {

				if(!$('.two-inner .card.focus').hasClass('selected')) {

					var selected = $('.two-inner .card.focus').attr('data-title');
					$('.two-inner .card.focus').addClass('selected');

					if($('.one-inner .card:eq(0)').hasClass('unchosen')){
						$('.one-inner .card:eq(0)').removeClass('unchosen').text(selected).attr('data-title',selected);
						$('body').removeClass();
						setTimeout(function(){
							$('.message').fadeOut(200);
							$('.two-container').fadeOut(300);
							setTimeout(function(){
								$('.message').text('Ta-da! Democracy in action!');
								$('.message').fadeIn(200);
								$('.one-container').css('top','200px');
								setTimeout(function(){
									$('.calltoaction').css('opacity','1');
									$('.calltoaction').css('top','448px');
									$('body').addClass('state-one');
								},200);
							},300);
						},200);
					}

				}

			}

		}

	});

});