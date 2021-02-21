'use strict';
const pages = {
    aboutMe: document.querySelector('.second-container'),
    shakeSelector: document.querySelector('.landing-page-shake-container'),

}
// Creating a on click function inside the drink carousel where on the click the color to the circle, and the h1 changes to the corresponding drink color
// variable for the tea pic
const teaPic = document.querySelector('.tea-pic');
// Variable for the fa arrow btn 
const arrowBtn1 = document.querySelector('.fa-angle-double-right');
// Variable for the circle color
const circleColor = document.querySelector('.circle');
// Variable for the header color
const headerColor = document.querySelector('.nutrtion-color');
// Variable for the paragraph content 
const paragraph = document.querySelector('.p-color');
// Variable for the learn more button
const lrnBtn = document.querySelector('.learnBtn');
// Variable for the header span
const headerSpan = document.querySelector('.header-span');


// A variable containing all of the above to try and make the code footprint less
// const selectColor = document.querySelectorAll('.color-selector');
// console.log(selectColor)
lrnBtn.addEventListener('click', () => {
    
    pages.aboutMe.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})
arrowBtn1.addEventListener('click', () => {
    console.log('clickkkkkk');
    pages.shakeSelector.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
})




    // //  Saving this for loop for later
    // function colorChanger(color, text) {
    //     for (var i = 0, max = selectColor.length; i < max; i++) {
    //         selectColor[i].style.backgroundColor = color;
    //         selectColor[i].style.color = color;
    //         animation2;
    //         selectColor[i].textContent = text;
    //     }
    // }
function drinkSlider(image) {
    teaPic.src = image;
    
    // Animation in 
    let animation1 = teaPic.animate([
        // keyframes
        {transform: 'scale(0.5)'},
        
        {transform:'scale(1.0)'}
    ], {
        duration:1000,
    });
    // Animation fade in
    let animation2 = paragraph.animate([

        {opacity: '0'},

        {opacity: '1'},
    ], {
        duration: 1000,
    })
    
    // Teas
    if (image === '/css/pictures/tea1S.png') {
        circleColor.style.backgroundColor = '#048163';
        lrnBtn.style.backgroundColor = '#048163';
        headerColor.style.color = '#048163';
        paragraph.style.color ='#048163';
        headerSpan.style.color = '#048163';
        animation2;
        paragraph.textContent = 'Where we have delicious energizing drinks!';
        animation1;

    } else if (image === '/css/pictures/tea2S.png') {
        circleColor.style.backgroundColor = '#f6cd58';
        lrnBtn.style.backgroundColor = '#f6cd58';
        headerColor.style.color = '#f6cd58';
        headerSpan.style.color = '#f6cd58';
        paragraph.style.color ='#f6cd58'
        animation2;
        paragraph.textContent = 'Where we have delicious energizing drinks!'
        animation1;
    } else if (image === '/css/pictures/tea3S.png') {
        circleColor.style.backgroundColor = '#00bebe';
        lrnBtn.style.backgroundColor = '#00bebe';
        headerColor.style.color = '#00bebe';
        headerSpan.style.color = '#00bebe';
        paragraph.style.color ='#00bebe'
        animation2
        paragraph.textContent = 'Where we have delicious energizing drinks!'
        animation1;
        // Shake slides 
    } else if ( image === '/css/pictures/shake1.png') {
        circleColor.style.backgroundColor = '#2f231b';
        lrnBtn.style.backgroundColor = '#2f231b';
        headerColor.style.color = '#2f231b';
        headerSpan.style.color = '#2f231b';
        paragraph.style.color ='#2f231b';
        animation2;
        paragraph.textContent = 'Where we have delicious protein packed shakes!';
        animation1;
    } else if ( image === '/css/pictures/shake2.png') {
        circleColor.style.backgroundColor = '#eeb269';
        lrnBtn.style.backgroundColor = '#eeb269';
        headerColor.style.color = '#eeb269';
        headerSpan.style.color = '#eeb269';
        paragraph.style.color ='#eeb269'
        animation2;
        paragraph.textContent = 'Where we have delicious protein packed shakes!';
        animation1;
    } else if ( image === '/css/pictures/shake3S.png') {
        circleColor.style.backgroundColor = '#c2b7a1';
        lrnBtn.style.backgroundColor = '#c2b7a1';
        headerColor.style.color = '#c2b7a1';
        headerSpan.style.color = '#c2b7a1';
        paragraph.style.color ='#c2b7a1'
        animation2;
        paragraph.textContent = 'Where we have delicious protein packed shakes!';
        animation1;
        // Donut slides 

    // Donut number 1 slide
    } else if (image === '/css/pictures/donut1.png') {
        circleColor.style.backgroundColor = '#f1342f';
        lrnBtn.style.backgroundColor = '#f1342f';
        headerColor.style.color = '#f1342f';
        headerSpan.style.color = '#f1342f';
        paragraph.style.color ='#f1342f'
        animation2;
        paragraph.textContent = 'Where we have delicious nutritious protien packed donuts!';
        animation1;
    // Donut number 2 slide
    } else if (image === '/css/pictures/donut2.png') {
        circleColor.style.backgroundColor = '#251b1c';
        lrnBtn.style.backgroundColor = '#251b1c';
        headerColor.style.color = '#251b1c';
        headerSpan.style.color = '#251b1c';
        paragraph.style.color ='#251b1c'
        animation2;
        paragraph.textContent = 'Where we have delicious nutritious protien packed donuts!';
        animation1;
    }
}

/* SWITCH STATEMENTS */
// switch (image) {
//     case '/css/pictures/tea1S.png':
//         circleColor.style.backgroundColor = '#048163';
//         lrnBtn.style.backgroundColor = '#048163';
//         headerColor.style.color = '#048163';
//         paragraph.style.color ='#048163';
//         animation2;
//         paragraph.textContent = 'Where we have delicious energizing drinks!';
//         animation1;
//         break
//     case '/css/pictures/tea2S.png':
//         circleColor.style.backgroundColor = '#f6cd58';
//         lrnBtn.style.backgroundColor = '#f6cd58';
//         headerColor.style.color = '#f6cd58';
//         paragraph.style.color ='#f6cd58'
//         animation2;
//         paragraph.textContent = 'Where we have delicious energizing drinks!'
//         animation1;
//         break
//     case '/css/pictures/tea3S.png':

     

// }

