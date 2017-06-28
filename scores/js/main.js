$(document).ready(function() {

	// Templating
	var template = $('#score').html();
	var templateScript = Handlebars.compile(template);

	var scores_epl = templateScript(epl);
	var scores_championship = templateScript(championship);
	var scores_leagueone = templateScript(leagueone);
	var scores_leaguetwo = templateScript(leaguetwo);
	var scores_nationalleague = templateScript(nationalleague);
	
	$('.epl').append(scores_epl);
	$('.championship').append(scores_championship);
	$('.leagueone').append(scores_leagueone);
	$('.leaguetwo').append(scores_leaguetwo);
	$('.nationalleague').append(scores_nationalleague);

	// Indexing
	$('.pane-content-page').each(function(){
		$(this).find('.score').each(function(i){
			$(this).attr('data-index',i++);
		});
	});

	// Height judgment
	$('.score').each(function(){
		
		var scorerhome = $(this).find('.score-scorers-home').text();
		var scoreraway = $(this).find('.score-scorers-away').text();
		
		// if (scorerhome != '' || scoreraway != '' ) {

			var totalheight = $(this)[0].scrollHeight;
			$(this).attr('data-height',totalheight);
			$(this).find('.score-cta').show();

		// }
	});

	// Nav shift
	function navshift() {

		var current = parseInt($('ul.nav li.focus').index() + 1);
		var shift = 156 - (current * 52);

		$('ul.nav').css('top',shift + 'px');

	}

	navshift();

	// Show page
	var current = parseInt($('ul.nav li.focus').index());
	$('.pane-content-page').hide();
	$('.pane-content-page:eq(' + current + ')').show();

	function showpage() {

		var current = parseInt($('ul.nav li.focus').index());

		$('.pane-content-page').hide();
		$('.pane-content-page:eq(' + current + ')').show();

		$('.pane-content-page').css('top','0px');
		$('.pane-content-page:visible .score').removeClass('focus');
		$('.pane-content-page:visible .score[data-index="0"]').addClass('focus');

	}

	// Scroll functions
	function scrollhandlesize () {

		var pageheight = $('.pane-content-page:visible')[0].scrollHeight;
		var numberofpages = parseInt(pageheight / 525);
		var handleheight = (672 / numberofpages) + 1;

		// console.log('Page Height: ' + pageheight);
		// console.log('Number of pages: ' + numberofpages);
		// console.log('handleheight: ' + handleheight);

		$('.scrollbar-handle').css('top','0px');
		$('.scrollbar-handle').css('height',handleheight + 'px');

	}

	scrollhandlesize();

	// Pagination
	function nudge() {

		var focusfromtop = $('.pane-content-page:visible .focus').position().top;
		var pageheight = $('.pane-content-page:visible')[0].scrollHeight;
		var numberofpages = (pageheight / 553) + 1;
		var page = parseInt(focusfromtop / 553);

		var handleheight = $('.scrollbar-handle').height();
		var handlepos = handleheight * page;
		
		// console.log('Focus: ' + focusfromtop);
		// console.log('Page height: ' + pageheight);
		// console.log('Page: ' + page);
		
		if (focusfromtop < 601) {

			$('.pane-content-page:visible').css('top', '0px');
			$('.scrollbar-handle').css('top', '0px');

		} else {

			$('.pane-content-page:visible').css('top', '-' + (page * 553) + 'px');
			$('.scrollbar-handle').css('top', + handlepos + 'px');

		}

	}

	// Default score focus
	$('.pane-content-page:visible .score:eq(0)').addClass('focus');

	// On Keypress
	$(document).keydown(function(e){

		// Nav State
		if ($('body').hasClass('state-nav')) {

			var total = $('ul.nav li').length;
			var current = parseInt($('ul.nav li.focus').index());

			// Up
			if(e.keyCode == 38) {

				var prev = current - 1;

				if (prev > -1) {

					$('ul.nav li').removeClass('focus');
					$('ul.nav li:eq(' + prev + ')').addClass('focus');

					navshift();
					showpage();
					scrollhandlesize();

				} 

			}

			// Down
			if(e.keyCode == 40) {

				var next = current + 1;

				if (next < total) {

					$('ul.nav li').removeClass('focus');
					$('ul.nav li:eq(' + next + ')').addClass('focus');

					navshift();
					showpage();
					scrollhandlesize();

				} 

			}

			// Right
			if(e.keyCode == 39) {

				$('.pane-nav').removeClass('active');
				$('.pane-content-page').addClass('active');
				$('body').removeClass();
				setTimeout(function(){ $('body').addClass('state-page') },5);

			}

		}

		// Page State
		if ($('body').hasClass('state-page')) {

			var total = $('.pane-content-page:visible .score').length - 1;
			var current = parseInt($('.pane-content-page:visible .score.focus').attr('data-index'));
			// console.log(total);
			// console.log(current);

			// Left
			if(e.keyCode == 37) {

				$('.pane-content-page').removeClass('active');
				$('.pane-nav').addClass('active');
				$('.score').css('height','50px').removeClass('expanded');
				$('body').removeClass();
				setTimeout(function(){ $('body').addClass('state-nav') },5);

			}

			// Right
			if(e.keyCode == 39) {

				$('.pane-content-page:visible').removeClass('active');
				$('.pane-content-scrollbar').addClass('active');
				$('.score').css('height','50px').removeClass('expanded');
				$('body').removeClass();
				setTimeout(function(){ $('body').addClass('state-scrollbar') },5);

			}

			// Up
			if(e.keyCode == 38) {

				var prev = current - 1;	

				if (prev > -1) {

					$('.pane-content-page:visible .score.focus').removeClass('focus');
					$('.pane-content-page:visible .score[data-index="'+ prev + '"]').addClass('focus');

					// var animheight = $('.score.focus').attr('data-height');
					$('.score').css('height','50px').removeClass('expanded');
					// $('.score.focus').css('height',animheight).addClass('expanded');

					nudge();

				}

			}

			// Down
			if(e.keyCode == 40) {

				var next = current + 1;	

				if (next <= total) {

					$('.pane-content-page:visible .score.focus').removeClass('focus');
					$('.pane-content-page:visible .score[data-index="'+ next + '"]').addClass('focus');

					// var animheight = $('.score.focus').attr('data-height');
					$('.score').css('height','50px').removeClass('expanded');
					// $('.score.focus').css('height',animheight).addClass('expanded');

					nudge();

				}

			}

			// Enter
			if(e.keyCode == 13) {

				if ($('.score.focus').hasClass('expanded')){

					$('.score.focus').css('height','50px').removeClass('expanded');

				} else {

					var animheight = $('.score.focus').attr('data-height');
					// $('.score').css('height','50px').removeClass('expanded');
					$('.score.focus').css('height',animheight).addClass('expanded');

				}

			}

		}

		// Scrollbar State
		if ($('body').hasClass('state-scrollbar')) {

			var focusfromtop = $('.pane-content-page:visible .focus').position().top;
			var pageheight = $('.pane-content-page:visible')[0].scrollHeight;
			var numberofpages = parseInt(pageheight / 553) + 1;
			var page = parseInt(focusfromtop / 553);

			var nextpage = page + 1;
			var prevpage = page - 1;

			var handleheight = $('.scrollbar-handle').height();
			var handlepos = handleheight * page;

			var handleposnext = handleheight * nextpage;
			var handleposprev = handleheight * prevpage;

			// console.log('Focus: ' + focusfromtop);
			// console.log('Page height: ' + pageheight);
			// console.log('Page: ' + page);

			// console.log('Number of page: ' + numberofpages);
			// console.log('Prevpage: ' + prevpage);
			// console.log('Nextpage: ' + nextpage);

			// Left
			if(e.keyCode == 37) {

				$('.pane-content-scrollbar').removeClass('active');
				$('.pane-content-page:visible').addClass('active');
				$('body').removeClass();
				setTimeout(function(){ $('body').addClass('state-page') },5);

			}

			// Down
			if(e.keyCode == 40) {

				if (nextpage < (numberofpages-1)) {

					$('.pane-content-page:visible').css('top', '-' + (nextpage * 553) + 'px');
					$('.scrollbar-handle').css('top', + handleposnext + 'px');

					setTimeout(function(){

						$('.score').removeClass('focus');
						$('.score').overlaps('.overlap-top').addClass('focus');

					},205);

				}

			}

			// Up
			if(e.keyCode == 38) {

				if (prevpage > -1) {

					$('.pane-content-page:visible').css('top', '-' + (prevpage * 553) + 'px');
					$('.scrollbar-handle').css('top', + handleposprev + 'px');

					setTimeout(function(){

						$('.score').removeClass('focus');
						$('.score').overlaps('.overlap-top').addClass('focus');

					},205);

				}

			}

		}

	});

});