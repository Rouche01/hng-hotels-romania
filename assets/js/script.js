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

const checkInDateInputValue = document.getElementById("check-in-date");
const checkOutDateInputValue = document.getElementById("check-out-date");

const makeOrdinalNumber = (i) => {
    const j = i % 10;
    if (j === 1 & i !== 11) {
        return `${i}st`
    } else if(j === 2 & i !== 12) {
        return `${i}nd`
    } else if(j === 3 & i !== 13) {
        return `${i}rd`
    } else {
        return `${i}th`
    }
}

const formatDate = (dateToFormat) => {
    inputValue = dateToFormat.value;
    const date = new Date (inputValue);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const weekDay = days[date.getDay()];
    const day = makeOrdinalNumber(date.getDate());
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${weekDay}, ${day} ${month} ${year}`
    return formattedDate
    // console.log(formattedDate);
}

const navMenuList = document.querySelectorAll('.main-nav a');
const formattedCheckInLabel = document.querySelector('.formatted-check-in-date');
const formattedCheckOutLabel = document.querySelector('.formatted-check-out-date');

window.addEventListener('DOMContentLoaded', () => {
    let url = window.location.href;
    navMenuList.forEach( (navMenu) => {
        if(url === (navMenu.href)) {
            // console.log(navMenu);
            navMenu.className += " active-menu";
        }
    })

    formattedCheckInLabel.innerHTML = formatDate(checkInDateInputValue);
    formattedCheckOutLabel.innerHTML = formatDate(checkOutDateInputValue);
})

checkInDateInputValue.onchange = function() {
    formattedCheckInLabel.innerHTML = formatDate(checkInDateInputValue);
}

checkOutDateInputValue.onchange = function() {
    formattedCheckOutLabel.innerHTML = formatDate(checkOutDateInputValue);
}