const modal = document.querySelector('.modal');
const buttonCart = document.querySelector('.button__cart');
const buttonClosed = document.querySelector('.button-closed');
const cancelButton = document.getElementById('cancelButton');
const countSpan = document.querySelector('.count');
const countBlocks = document.querySelectorAll('.count-block')
const fullPrice =  document.querySelector('.fullprice');

let countMinButton;
let countPlusButton;

const getFullPrice = function() {
    fullPrice.textContent = 
}

const toggleModal = function() {
    modal.classList.toggle('open');
}

const removeOfModal = function(event) {
    if (event.target.classList === modal.classList) {
        modal.classList.remove('open')
    }
}

buttonCart.addEventListener('click', toggleModal);
buttonClosed.addEventListener('click', toggleModal);
cancelButton.addEventListener('click', toggleModal);
modal.addEventListener('click', removeOfModal);

for (let i = 0; i <countBlocks.Length; i++{
    countMinButton = countBlock.querySelector('.count-min');
    countPlusButton = countBlock.querySelector('.count-min');
    let countSpan = countBlock.querySelector('.count');
    const counterMinus = function () {
        if(+countSpan.textContent === 0) {
            countSpan.textContent = 0
        } else {
            count = +countSpan.textContent;
            count--
            countSpan.textContent = count;
        }
    };
    const counterPlus = function () {
        count = +countSpan.textContent;
        count++
        countSpan.textContent = count;
    };

    countMinButton.addEventListener('click', counterMinus);
    countPlusButton.addEventListener('click', counterPlus);
})

countMinButton.forEach(function(countMinButton) {
    countMinButton.addEventListener('click', counterMinus);
})

countPlusButton.forEach(function(countPlusButton) {
    countPlusButton.addEventListener('click', counterPlus);
})


console.log (typeof +countSpan.textContent)
// console.log(modal);
// console.log(buttonCart);
// console.log(buttonClosed);
//  console.log(cancelButton);\

