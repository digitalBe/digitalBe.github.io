
window.addEventListener('scroll', fadeIn);

function fadeIn() {
    const text = document.querySelectorAll(".card");
    const textArr = Array.from(text);
    
    for (let t in textArr) {
        let windowHeight = window.innerHeight;
        let revealT = textArr[t].getBoundingClientRect().top;

        if (revealT < windowHeight) {
            text[t].classList.add('active');
        } 
        else {
            text[t].classList.remove('active');
        }

    }
}


document.querySelectorAll(".heart").forEach(heart => {
    heart.addEventListener('click', event => {
        event.target.classList.toggle('active');
        event.target.classList.toggle("heart");
    })
})


const menu = document.getElementById('menu');
const closeIcon = document.getElementById("toggle");

    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        closeIcon.checked = false;
      }
    }
