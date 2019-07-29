var headerNumber = $('.header__number');
var header = $('.header');
var arrow = $('.arrow');

$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   if(st < 180){
   		headerNumber.css({ 'margin-left' : ((120 - (st * 0.555)) + 'px')});
   	header.css({ 'opacity' : (1 - st/200) });
   	arrow.css({ 'opacity' : (1 - st/90)});
   } else {
   		headerNumber.css({ 'margin-left' : (20 + 'px')});
   	header.css({ 'opacity' : 0.1 });
   }
});