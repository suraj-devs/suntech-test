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
// Change active doctor image on click
document.querySelectorAll('.doctor-images img').forEach((img, index) => {
    img.addEventListener('click', function () {
        document.querySelectorAll('.doctor-images img').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Update active doctor image when carousel slides
document.getElementById('dentistCarousel').addEventListener('slid.bs.carousel', function (e) {
    let activeIndex = e.to;
    document.querySelectorAll('.doctor-images img').forEach((img, index) => {
        img.classList.toggle('active', index === activeIndex);
    });
});