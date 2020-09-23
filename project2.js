burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
right = document.querySelector('.right')
navlist = document.querySelector('.nav-list')

burger.addEventListener('click' , ()=>{
     navlist.classList.toggle('v-class') ;
     right.classList.toggle('v-class') ;
     navbar.classList.toggle('h-nav') ;
     
})