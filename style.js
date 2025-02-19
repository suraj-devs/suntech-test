$(document).ready(function(){
// invoke the carousel
    $('#carousel-main').carousel({
      interval: false
    });

// scroll slides on mouse scroll 
$('#carousel-main').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
			
        }
        else{
            $(this).carousel('next');
			
        }
    });

//scroll slides on swipe for touch enabled devices 

 	$("#carousel-main").on("touchstart", function(event){
 
        var yClick = event.originalEvent.touches[0].pageY;
    	$(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});
 
  //$('.carousel .vertical .item').each(function(){
  //var next = $(this).next();
  //if (!next.length) {
  //  next = $(this).siblings(':first');
  //}
  //next.children(':first-child').clone().appendTo($(this));
  
  //for (var i=1;i<2;i++) {
  //  next=next.next();
   // if (!next.length) {
   // 	next = $(this).siblings(':first');
  	//}
    
    //next.children(':first-child').clone().appendTo($(this));
  //}
//});
    

$('.carousel-sync').on('mousewheel DOMMouseScroll', '.carousel-control[data-slide]', function (e) {
  if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $('.carousel-sync').carousel($(this).data('prev'));
        }
        else{
            $('.carousel-sync').carousel($(this).data('next'));
        }
    e.preventDefault();
    $('.carousel-sync').carousel($(this).data('slide'));
});


  
});
