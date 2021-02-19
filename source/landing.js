'use strict';

// Creating a on click function inside the drink carousel where on the click the color to the circle, and the h1 changes to the corresponding drink color
// variable for the tea pic
const teaPic = document.querySelector('.tea-pic');
// Variable for the circle color
const circleColor = document.querySelector('.circle');
// Variable for the header color
const headerColor = document.querySelector('.nutrtion-color');
// Variable for the paragraph content 
const paragraph = document.querySelector('.p-color');
// Variable for the learn more button
const lrnBtn = document.querySelector('.learnBtn');

function drinkSlider(image) {
    teaPic.src = image;
    
    // Animation in 
    let animation1 = teaPic.animate([
        // keyframes
        {transform: 'scale(0.5)'},
        {transform:'scale(1.0)'}
    ], {
        duration:1500,
    });
    let animation2 = paragraph.animate([
        {opacity: '0'},
        {opacity: '1'},
    ], {
        duration: 1000,
    })
    // Teas
    if (image === '/css/pictures/tea1S.png') {
        circleColor.style.backgroundColor = '#048163';
        headerColor.style.color = '#048163';
        paragraph.style.color ='#048163';
        animation2;
        paragraph.textContent = 'Where we have delicious energizing drinks!';
        animation1;
    } else if (image === '/css/pictures/tea2S.png') {
        circleColor.style.backgroundColor = '#f6cd58';
        headerColor.style.color = '#f6cd58';
        paragraph.style.color ='#f6cd58'
        animation2;
        paragraph.textContent = 'Where we have delicious energizing drinks!'
        animation1;
    } else if (image === '/css/pictures/tea3S.png') {
        circleColor.style.backgroundColor = '#0062be';
        headerColor.style.color = '#0062be';
        paragraph.style.color ='#0062be'
        animation2
        paragraph.textContent = 'Where we have delicious energizing drinks!'
        animation1;
    } else if ( image === '/css/pictures/shake1.png') {
        circleColor.style.backgroundColor = '#2f231b';
        headerColor.style.color = '#2f231b';
        paragraph.style.color ='#2f231b';
        animation2;
        paragraph.textContent = 'Where we have delicious protein packed shakes!';
        animation1;
    } else if ( image === '/css/pictures/shake2.png') {
        circleColor.style.backgroundColor = '#eeb269';
        headerColor.style.color = '#eeb269';
        paragraph.style.color ='#eeb269'
        animation2;
        paragraph.textContent = 'Where we have delicious protein packed shakes!';
        animation1;
    } else if ( image === '/css/pictures/shake3S.png') {
        circleColor.style.backgroundColor = '#c2b7a1';
        headerColor.style.color = '#c2b7a1';
        paragraph.style.color ='#c2b7a1'
        animation2;
        paragraph.textContent = 'Where we have delicious protein packed shakes!';
        animation1;
    } 
}