// Images and icons taken from https://icons8.com/

//     This website was coded bu following WEB CIFAR's tutorial on Youtube:
//     https://www.youtube.com/watch?v=ZFQkb26UD1Y&t=7330s

// ********************************************************************************
// This JavaScript file's purpose is to toggle the hamburger animations
// and functionalities to have access to the navbar in a minimized window
// or for a tablet/phone and optimize the navbar's functionalities

// Declare Constants
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Lines effect when the user clicks
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// Add background color to the navbar when past the image
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;

    if(scroll_position > 600){ /* Tweak number*/
        header.style.backgroundColor = "#29323c";
    } else{
        header.style.backgroundColor = "transparent";
    }
});

// Automatically closes the menu item on minimized window when the user selects a 
// "location" in the website 

menu_item.forEach((item) =>{
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    });
});