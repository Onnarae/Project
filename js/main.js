'use strict';

const navbar = document.querySelector('#navbar');
const about = document.querySelector('#about');
const navbarHeight = about.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--fixed')
    } else{
        navbar.classList.remove('navbar--fixed')
    }
});

// Handle scrolling when tapping on he navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {  
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});



// product
const productBtnContainer = document.querySelector('.product__categories');
const productContainer = document.querySelector('.product__projects')
const products = document.querySelectorAll('.product')
productBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');
    
    productContainer.classList.add('anim-out');
    setTimeout(() => {
        console.log(filter);
        products.forEach((product) => {
        console.log(product.dataset.type)
        if(filter === '*' || filter === product.dataset.type){
            product.classList.remove('invisible');
        }else {
            product.classList.add('invisible')
        }
    });
        productContainer.classList.remove('anim-out');
    }, 300)
    
});



