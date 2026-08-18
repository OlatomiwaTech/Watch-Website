// Loading Screen

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 700);

});

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold:0.15
});

reveals.forEach(section => {

    observer.observe(section);

});

// Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background="rgba(8,8,8,.92)";
        header.style.padding="18px 8%";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }else{

        header.style.background="rgba(0,0,0,.45)";
        header.style.padding="25px 8%";
        header.style.boxShadow="none";

    }

});

// Scroll Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    topBtn.style.display = window.scrollY > 400 ? "block" : "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};