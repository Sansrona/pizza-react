 export const addPizzaToCart = (obj) => ({
    type:'ADD_PIZZA',
    obj
}) 

export const clearBasket = () => ({
    type:'CLEAR_BASKET',
}) 

export const removeCartPizza = (id) => ({
    type:'REMOVE_CART_ITEM',
    id
})


export const plusCartPizza = (id) => ({
    type:'PLUS_CART_ITEM',
    id
})


export const minusCartPizza = (id) => ({
    type:'MINUS_CART_ITEM',
    id
})