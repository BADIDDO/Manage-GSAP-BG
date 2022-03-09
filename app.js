const btn = document.querySelector(".grid");

const links = document.querySelector("ul");

btn.addEventListener("click" , () => {
    links.classList.toggle("active");
});


gsap.from('nav' , {
    duration : 1,
    y : '-100%',
    ease: "bounce.out",
});

gsap.from(".intro-content" , {
    duration : 2,
    opacity : 0,
    delay : 2,
    stagger : .5,
})

gsap.from(".intro-img" , {
    duration : 2,
    x : '-100%' ,
    delay : 1,
})