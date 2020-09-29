var headerNumber = $('.header__number');
var header = $('.header');
var arrow = $('.arrow');
var title = $('.title');

$(window).on('scroll', function() {
	var st = $(this).scrollTop();
	if(st < 180){
		if (screen.width > 768){
			headerNumber.css({ 'margin-left' : ((120 - (st * 0.555)) + 'px')});
			//    title.css({ 'top' : ((60 - (st * 0.222)) + 'px')});
			title.css({ 'top' : ((60 - (st * 0.6)) + 'px')});
		}
		   
		header.css({ 'opacity' : (1 - st/200) });
		arrow.css({ 'opacity' : (1 - st/90)});
	} else {
		if (screen.width > 768){
			headerNumber.css({ 'margin-left' : (20 + 'px')});	
			}

		header.css({ 'opacity' : 0.1 });
		
	}
});

