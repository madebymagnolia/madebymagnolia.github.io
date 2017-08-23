$(document).ready(function(){

	function leadingZero(n) {
		return String("00" + n).slice(-2);
	}

	$('#title').focus();

	$('[data-toggle="datepicker-start"]').datepicker({
		autoHide: true
	});

	$('[data-toggle="datepicker-end"]').datepicker({
		autoHide: true
	});

	$('[data-toggle="datepicker-start"]').on('pick.datepicker', function (e) {
		var day = e.date.getDate();
		var month = e.date.getMonth()+1;
		var year = e.date.getFullYear();
		$('#startday').val(leadingZero(day));
		$('#startmonth').val(leadingZero(month));
		$('#startyear').val(year);
	});	

	$('[data-toggle="datepicker-end"]').on('pick.datepicker', function (e) {
		var day = e.date.getDate();
		var month = e.date.getMonth()+1;
		var year = e.date.getFullYear();
		$('#endday').val(leadingZero(day));
		$('#endmonth').val(leadingZero(month));
		$('#endyear').val(year);		
	});

	$('input').on('focus',function(){
		$(this).select();
	});

	// $('input').on('keydown',function(){

	// 	if ($(this).val().length == $(this).attr('maxlength')) {
	//         $(this).next('input').focus();
	//     }

	// });

	$( "input[maxlength]" ).keyup(function(e) {
	    var maxLen = this.maxLength;
	    var currentLen = this.value.length;

	    if (maxLen === currentLen && e.keyCode != 9)
	    {
	        $(this).next('input,textarea').focus(); 
	    } 
	});

});