var divs = $('.header');
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   if(st < 180){
   	divs.css({ 'opacity' : (1 - st/200) }); 
   } else {
   	divs.css({ 'opacity' : 0.1 });
   }
});