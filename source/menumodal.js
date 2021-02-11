'use strict'

const openModalbtns = {
    unsweet: document.getElementById('unsweetTea'),
    sweet: document.getElementById('sweetTea'),
    special: document.getElementById('specialDrink'),
    addon: document.getElementById('addonDrinks'),
    smoothies: document.getElementById('smoothies-drink'),
}
const modal = document.querySelector('.modal-1-bg')
// Close modal buttons
const closeModal = document.querySelector('.close-modal-button');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})
// open Smootie modal
openModalbtns.smoothies.addEventListener('click', () => {
    modal.style.display = 'flex';
})


// Now im going to add the new
