
const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.card-container');

IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass() {
    const element = document.querySelector(`.${ACTIVECLASS}`);
    if (element) {
        element.classList.remove(ACTIVECLASS);
    }
}

function addClass(event) {
    removeActiveClass();
    const target = event.currentTarget;
    target.classList.add(ACTIVECLASS);
}

IMAGES.forEach(image => {
    image.addEventListener('click', addClass);
})





const mediaQuery = window.matchMedia('(max-width: 750px)')

function changeSlider(mediaQuery) {

    if (mediaQuery.matches) {

            removeActiveClass();

    }
    else {
        IMAGES[0].classList.add(ACTIVECLASS);
                
    }

}


mediaQuery.addEventListener('change',changeSlider)
changeSlider(mediaQuery);