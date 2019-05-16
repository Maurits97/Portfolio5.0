var header = $('.header');
var headlineNumber = $('.headline__number');


$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   console.log(st);
   if(st < 180){
   	header.css({ 'opacity' : (1 - st/200) }); 
   } else {
   	header.css({ 'opacity' : 0.1 });
   }

   //50% - 30px
   //50% - 100px

   // 30 + ((1 - st/200) + 69)
   30 + 1 +69


});