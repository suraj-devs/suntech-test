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

const teamImages = document.querySelectorAll('.team-images img');
const underline = document.querySelector('.underline');
const titleElement = document.getElementById('title');
const nameElement = document.getElementById('name');
const descriptionElement = document.getElementById('description');
const mainImageElement = document.getElementById('main-image');
const dots = document.querySelectorAll('.slider-dots .dot');

let currentIndex = 0;

function updateSlide(index) {
    const selectedImage = teamImages[index];

    titleElement.textContent = selectedImage.title;
    
    // alt se name extract karna (title ke saath)
    const altText = selectedImage.alt.split(" - ");
    if (altText.length > 1) {
        nameElement.textContent = altText[1]; // "Dr. Delly Martin"
    } else {
        nameElement.textContent = altText[0]; // Backup
    }

    descriptionElement.textContent = selectedImage.getAttribute('aria-label');
    mainImageElement.src = selectedImage.src;

    underline.style.transform = `translateX(${index * 110}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    teamImages.forEach(img => img.classList.remove('active'));
    teamImages[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % teamImages.length;
    updateSlide(currentIndex);
}

setInterval(nextSlide, 3000);
updateSlide(currentIndex);

teamImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(currentIndex);
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(currentIndex);
    });
});
AOS.init();