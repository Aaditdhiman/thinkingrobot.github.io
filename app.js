const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Displey Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show sctive menu when scrolling

const highLightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#tute-page')
    const serviceMenu = document.querySelector('#proj-page')
    const featureMenu = document.querySelector('#about-page')

    let scrollpos = window.scrollY
    // console.log(scrollpos)

    //Adds The highlight Class to My menu items

    if (window.innerWidth > 960 && scrollpos < 500) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 960 && scrollpos < 1000) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        serviceMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 960 && scrollpos < 1590) {
        serviceMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        featureMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 960 && scrollpos < 2140) {
        featureMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        serviceMenu.classList.remove('highlight')
        return
    }

    if ((elem && window.innerWidth < 960 && scrollpos < 600) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll',highLightMenu)
window.addEventListener('click',highLightMenu)

//Close Mobile Menu

const hidMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 760 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click' , hidMobileMenu)
navLogo.addEventListener('click' , hidMobileMenu)