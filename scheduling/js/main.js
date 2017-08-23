$(document).ready(function(){

	function leadingZero(n) {
		return String("00" + n).slice(-2);
	}

	$('#title').focus();

	var today = new Date();

	var day = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();
	var hours = today.getHours();
	var minutes = today.getMinutes();

	$('#startday,#endday').val(leadingZero(day));
	$('#startmonth, #endmonth').val(leadingZero(month));
	$('#startyear, #endyear').val(year);	

	var starttime = leadingZero(hours) + leadingZero(minutes);
	var endtime = leadingZero(hours) + leadingZero(minutes+1);

	$('#starttime').val(starttime);
	$('#endtime').val(endtime);

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