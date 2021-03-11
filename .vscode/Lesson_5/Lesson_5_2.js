const cartItem =

{
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product}</div>
                    <div><b>Цена за кг.</b>: ${good.price}</div>
                    <div><b>Вес</b>: ${good.weight}</div>
                    <div><b>Стоимость</b>: ${good.weight * good.price}</div>
                </div>`;
    }
  
}


const cart =

{
    cartListBlock: null,
    cartButton: null,
    cartItem,
            goods: 
            [
            {product: 'Груши',
            weight: 10,
            price: 50},
            {product: 'Хлеб',
            weight: 10,
            price: 60},
            {product: 'Молоко',
            weight: 10,
            price: 30},
            {product: 'Кофе',
            weight: 10,
            price: 50}
        ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине <b>${this.goods.length}</b> позиций(а) стоимостью <b>${this.countBasketPrice()}</b>`);
        } else {
            this.cartListBlock.textContent = 'Ваша корзина пуста';
        }
    },
    countBasketPrice() {
        return this.goods.reduce((total, cartItem, ) => total + (cartItem.weight*cartItem.price),0);    
   },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();