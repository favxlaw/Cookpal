// switch recipe type
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="#f18f01";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#ffffff');







// animate on scroll
const elements = document.querySelectorAll('.form, .inner-cont, .cards, .benefits-container .left, .benefits-container .right, .testimonial');

const animateOnIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target); // Optionally, stop observing once animation has been triggered
        }
    });
};

const options = {
    threshold: 0.05, // Adjust this threshold as per your needs
};

const observer = new IntersectionObserver(animateOnIntersection, options);

elements.forEach((element) => {
    observer.observe(element);
});
//animate on scroll end



// scroll back to top button
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}








// testimonial section
var swiper = new Swiper(".mySwiper", {
    autoplay: {
    delay: 6000,
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 120,
        slideShadows: false,
    },
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    speed: 1200,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});











// NAVBAR TOGGLE
