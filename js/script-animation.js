var header = $('.header');
var headerNumber = $('.header__number');
var arrow = $('.arrow');

$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   if(st < 180){
   	header.css({ 'opacity' : (1 - st/200) });
   	headerNumber.css({ 'margin-left' : ((120 - (st * 0.555)) + 'px')});
   	arrow.css({ 'opacity' : (1 - st/90)});
   } else {
   	header.css({ 'opacity' : 0.1 });
   	headerNumber.css({ 'margin-left' : (20 + 'px')});
   }
});
