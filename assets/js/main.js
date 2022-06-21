let productCardItem = document.querySelectorAll('.card__bordered-content');
// console.log(productCardItem);

let productCardBuyBtn = document.querySelectorAll('.card__bottom-btn');
// console.log(productCardBuyBtn);

productCardItem.forEach(function (item) {
    item.addEventListener('click', () => {
        item.classList.toggle('card__bordered-content_selected')
        item.classList.add('no-hover')
    })
});
productCardItem.forEach(function (item) {
    item.addEventListener('mouseenter', () => {
        item.classList.remove('no-hover')
    })
});

productCardBuyBtn.forEach(function (item) {
    item.addEventListener('click', (e) => {
        const element = e.target.parentElement.previousElementSibling
        element.classList.add('card__bordered-content_selected')
    })
});
