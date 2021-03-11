let basket = {
    goods: [
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
    countBasketPrice() {
        return this.goods.reduce((total, cartItem, ) => total + (cartItem.weight*cartItem.price),0);    
   }
  
};
console.log(basket.countBasketPrice())