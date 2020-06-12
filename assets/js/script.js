const createCarousel = (carouselGroup, activeClass) => {
    const sliderIndicators = document.querySelectorAll(carouselGroup);
    sliderIndicators.forEach( (indicator) => {
        indicator.addEventListener('click', function()  {
            let currentIndicator = document.querySelector(`.${activeClass}`);
            currentIndicator.className = currentIndicator.className.replace(` ${activeClass}`, "");
            this.className += ` ${activeClass}`;
        })
    })
}

createCarousel('.slider-indicator', 'current-slide');
createCarousel('.slider-indicator-2', 'current-slide-2');
createCarousel('.slider-indicator-3', 'current-slide-3');

const mobileMenu = document.querySelector('.burger-menu');
mobileMenu.addEventListener('click', function () {
    // console.log('Working');
    const mainNav = document.querySelector('.main-nav');
    this.classList.toggle('clicked');
    mainNav.classList.toggle('menu-popped')
    console.log(mainNav)
})

const navMenuList = document.querySelectorAll('.main-nav a');

window.addEventListener('DOMContentLoaded', () => {
    let url = window.location.href;
    navMenuList.forEach( (navMenu) => {
        if(url === (navMenu.href)) {
            console.log(navMenu);
            navMenu.className += " active-menu";
        }
    })
})