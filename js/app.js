 /**
  * Склонение существительных во множественном числе.
  */
function declination(number, one, two, five) {
	number = Math.abs(number);
	number %= 100;
	if (number >= 5 && number <= 20) {
		return five;
	}
	number %= 10;
	if (number == 1) {
		return one;
	}
	if (number >= 2 && number <= 4) {
		return two;
	}
	return five;
} 

$(function() {
	var start = new Date(2012, 1, 14);
	var end = new Date(2012, 5, 6);
	setInterval(function() {
		var current = new Date();

		var remain_days = Math.ceil((end - current) / (1000 * 60 * 60 * 24));
		remain_days = remain_days < 0 ? 0 : remain_days;
		$("#semester-days-pass").html(
			remain_days + " " + declination(remain_days, "день", "дня", "дней")
		);

		var pass = Math.round((current - start) * 100 / (end - start));
		pass = pass > 100 ? 100 : pass;
		$("#semester-days-pass-bar").css('width', pass + '%');
		var bar_class;
		if (pass > 80) {
			bar_class = 'progress-warning';
		} else if (pass > 90) {
			bar_class = 'progress-danger';
		} else {
			bar_class = 'progress-info';			
		}
		var parent = $("#semester-days-pass-bar").parent();
		if (!parent.hasClass(bar_class)) {
			parent.addClass(bar_class);
		}
	}, 60);
});