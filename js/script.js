// const modal = document.querySelector('.modal');
// const buttonCart = document.querySelector('.button__cart');
// const buttonClosed = document.querySelector('.button-closed');
// const cancelButton = document.getElementById('cancelButton');
// const countSpan = document.querySelector('.count');
// const fullPrice =  document.querySelector('.fullprice');
// const countBlock = document.querySelectorAll('.count-block');

// const countMinButton = document.querySelectorAll('.button-count--min')
// const countPlusButton = document.querySelectorAll('.button-count--plus')




// const toggleModal = function() {
//     modal.classList.toggle('open');
// }

// const removeOfModal = function(event) {
//     if (event.target.classList === modal.classList) {
//         modal.classList.remove('open')
//     }
// }

// buttonCart.addEventListener('click', toggleModal);
// buttonClosed.addEventListener('click', toggleModal);
// cancelButton.addEventListener('click', toggleModal);
// modal.addEventListener('click', removeOfModal);

// countBlock.forEach(countBlock => {
//     console.log(countBlock.countSpan);
// })

// countMinButton.forEach(countMinButton => {
//     countMinButton.addEventListener('click', () => {
//         if (countSpan.textContent > 1) {
//             let count
//             count = countSpan.textContent
//             count--
//             countSpan.textContent = count
//         }
//     })
// });
// countPlusButton.forEach(countPlusButton => {
//     countPlusButton.addEventListener('click', () => {
//         let count
//         count = countSpan.textContent
//         count++
//         countSpan.textContent = count
//     })
// })

// console.log(fullPrice.textContent);

// console.log (+countSpan.textContent)
// console.log(modal);
// console.log(buttonCart);
// console.log(buttonClosed);
//  console.log(cancelButton);\

const modal = document.querySelector('.modal');
const btnCart = document.querySelector('.button__cart');
const btnClose = document.querySelector('.button-closed');
const btnCancel = document.getElementById('cancelButton');
const rows = modal.querySelectorAll('.cart-string');
const total = modal.querySelector('.fullprice');

btnCart.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
btnCancel.addEventListener('click', toggleModal);



function toggleModal() {
	modal.classList.toggle('open');
};

modal.addEventListener('click', (event)=>{
	if(event.target == modal){
		toggleModal()
	}
})



const getFullPrice = () => {
	let fullPrice = 0;
	const rows = modal.querySelectorAll('.cart-string');
	rows.forEach(row => {
		let priceBlock = row.querySelector('.price-dish')
		let price = +priceBlock.textContent 
		fullPrice += price;
	})
	total.textContent = fullPrice
}

const getNewPrice = (count, price, priceBlock) => {
	newPrice = count * price
	priceBlock.textContent = newPrice
	getFullPrice()
}

rows.forEach(row => {
	let priceBlock = row.querySelector('.price-dish')
	let price = +priceBlock.textContent 
	let countBlock = row.querySelector('.count')
	let count = +countBlock.textContent
	const btnMinus = row.querySelector('.button-count--min')
	const btnPlus = row.querySelector('.button-count--plus')


	
	btnMinus.addEventListener('click', () => {
		if (count > 0) {
			count--
			countBlock.textContent = count
			getNewPrice(count, price, priceBlock)
		}
	})

	btnPlus.addEventListener('click', () => {
		count++
		countBlock.textContent = count
		getNewPrice(count, price, priceBlock)
	})
	
})

getFullPrice()
