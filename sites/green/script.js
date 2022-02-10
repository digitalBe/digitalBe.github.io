
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

