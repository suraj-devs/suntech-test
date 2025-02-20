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
const teamData = [
    {
        title: 'Principal Dentist',
        name: 'Dr. Delly Martin',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
        image: 'media/doctor.png'
    },
    {
        title: 'Assistant Dentist',
        name: 'Dr. Jane Smith',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
        image: 'media/aboutImg_one.png'
    },
    {
        title: 'Assistant Dentist',
        name: 'Dr. Jane Smith',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
        image: 'media/aboutImg_two.png'
    },
    {
        title: 'Assistant Dentist',
        name: 'Dr. Jane Smith',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
        image: 'media/aboutImg_three.png'
    }
];
let currentIndex = 0;
function updateSlide(index) {
    titleElement.textContent = teamData[index].title;
    nameElement.textContent = teamData[index].name;
    descriptionElement.textContent = teamData[index].description;
    mainImageElement.src = teamData[index].image;
    underline.style.transform = `translateX(${index * 104}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    teamImages.forEach(img => img.classList.remove('active'));
    teamImages[index].classList.add('active');
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % teamData.length;
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