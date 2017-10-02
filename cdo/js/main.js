$(window).on('load',function(){

  setTimeout(function(){

    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    const alertTimeComingUp = 1800;
    const alertTimeImminent = 600;
    const alertTimeElapsed = 0;

  $('.scheduleRow').each(function(){

    var countdown = $(this).attr('data-countdown');

    if (countdown <= alertTimeComingUp) { $(this).attr('data-status','comingup'); }
    if (countdown <= alertTimeImminent) { $(this).attr('data-status','imminent'); }
    if (countdown <= alertTimeElapsed)   { $(this).attr('data-status','elapsed'); }

    $(this).find('.deadline').countdown({
      until: +countdown, 
      compact: true, 
      layout: '{hnn}{sep}{mnn}{sep}{snn}',
      onTick: urgencyCheck
    });

  });

  $('body').on('hidden.bs.popover', function (e) {
    $(e.target).data("bs.popover").inState = { click: false, hover: false, focus: false }
  });

  function urgencyCheck(periods) { 
      
      if ($.countdown.periodsToSeconds(periods) === alertTimeComingUp) { 
          $(this).parent('.scheduleRow__col').parent('.scheduleRow').attr('data-status','comingup');
      }      
      if ($.countdown.periodsToSeconds(periods) === alertTimeImminent) { 
          $(this).parent('.scheduleRow__col').parent('.scheduleRow').attr('data-status','imminent');
      }      
      if ($.countdown.periodsToSeconds(periods) === alertTimeElapsed) { 
          // $(this).parent('.scheduleRow__col').parent('.scheduleRow').attr('data-status','elapsed');
      }
  } 

  // Publish button
  $(".btn-publish").popover({
    placement: 'bottom',
    html: 'true',
    content : '<strong>Are you sure you want to publish this event?</strong>' + 
              '<div style="display:block; padding: 5px 0; text-align: center;">' + 
                '<button type="button" class="btn btn-success btn-sm btn-publish-confirm">Publish event</button>&nbsp;' +
                '<button type="button" class="btn btn-default btn-sm btn-popup-close">Close</button>' +
              '</div>',
    viewport: { selector: 'body'}
  });

  $('body').on('click', 'button.btn-publish-confirm', function() {
   
    $('button').css('pointer-events','none');

    $(this).closest('.scheduleRow').find('.btn-publish').button('loading').addClass('loading');
    $(this).closest('.popover').popover('hide');
   
    setTimeout(function(){
      
      var countdown_clear = $('button.loading').closest('.scheduleRow').attr('data-countdown-clear');
      
      $('button.loading').closest('.scheduleRow').attr('data-status','');

      if (countdown_clear <= alertTimeComingUp) { 
         $('button.loading').closest('.scheduleRow').attr('data-status','comingup');
      }      
      if (countdown_clear <= alertTimeImminent) { 
         $('button.loading').closest('.scheduleRow').attr('data-status','imminent');
      }    

      var clearat = $('button.loading').closest('.scheduleRow').find('.duration .clear-at').text();
      $('button.loading').closest('.scheduleRow').find('.due .time').html(clearat);

      $('button.loading').closest('.scheduleRow').addClass('scheduleRow--live');
      $('button.loading').closest('.scheduleRow').find('.deadline').countdown('destroy');
      
      $('button.loading').closest('.scheduleRow').find('.deadline').countdown({
        until: +countdown_clear, 
        compact: true, 
        layout: '{hnn}{sep}{mnn}{sep}{snn}',
        onTick: urgencyCheck
      });

      $('button.loading').button('reset').removeClass('loading');

      $('button').css('pointer-events','auto');

    },1000);

  });

  // Clear button
  
  $(".btn-clear").popover({
    placement: 'bottom',
    html: 'true',
    content : '<strong>Are you sure you want to clear all triggers from the selected channel(s)?</strong>' + 
              '<div style="display:block; padding: 5px 0; text-align: center;">' + 
                '<button type="button" class="btn btn-danger btn-sm btn-clear-confirm">Clear</button>&nbsp;' +
                '<button type="button" class="btn btn-default btn-sm btn-popup-close">Close</button>' +
              '</div>',
    viewport: { selector: 'body'}
  }); 

  $('body').on('click', 'button.btn-clear-confirm', function() {
    
    $('button').css('pointer-events','none');
    
    $(this).closest('.scheduleRow').find('.btn-clear').button('loading').addClass('loading');
    $(this).closest('.popover').popover('hide');
    
    setTimeout(function(){

      $('button.loading').closest('.scheduleRow').removeClass('scheduleRow--live');
      $('button.loading').closest('.scheduleRow').find('button').hide();
      $('button.loading').closest('.scheduleRow').find('.deadline').countdown('destroy');
      $('button.loading').closest('.scheduleRow').find('.deadline').html('CLEARED');
      $('button.loading').closest('.scheduleRow').attr('data-status','elapsed');
      $('button.loading').button('reset').removeClass('loading');

      $('button').css('pointer-events','auto');

    },1000);

  });

  $('body').on('click', 'button.btn-popup-close', function() {
    $(this).closest('.popover').popover('hide');
  });

  },100);

});