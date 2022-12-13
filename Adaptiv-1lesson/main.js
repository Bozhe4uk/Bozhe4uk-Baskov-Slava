let nav = document.querySelector('#nav');
let navBtn = document.querySelector('#nav-btn');
let navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/NAV CLOSE.svg"
    } else {
        navBtnImg.src = "./img/icons/NAV (1).svg"
    }
}




// Прокрутка до якоря 

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click' , function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth' ,
            block: 'start' 
        })
    })
}

