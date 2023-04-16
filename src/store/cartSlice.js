import { createSlice } from "@reduxjs/toolkit";

const fetchExistingCart = ()=>{
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'));
    }
    else{
         return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}
const initialState = {
    cart : fetchExistingCart(),
    itemCount : 0,
    totalAmount : 0,
    
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : (state, action)=>{
            const isItemInCart = state.cart.find(item => item.id === action.payload.id);
// for a poarticular type of item
            if(isItemInCart){
                const tempCart = state.cart.map(item=> {
                    if(item.id === action.payload.id){
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty * item.price;

                        return { ... item , quantity : tempQty, totalAmount :  tempTotalPrice}
                    }
                    else{
                        return item;
                    }
                });
            state.cart = tempCart;

            }
            else{
                state.cart.push(action.payload);
            }

            storeInLocalStorage(state.cart);
        },
        removeFromCart : (state, action) =>{
            // remving individual items from the cart
            const tempCart = state.cart.filter(item => item.id !== action.payload);
            state.cart = tempCart;
            storeInLocalStorage(state.cart); 
        },
        clearCart: (state)=> {
            state.cart = [];
            storeInLocalStorage(state.cart);
        },

        getCartTotal :(state) => {
            state.totalAmount = state.cart.reduce((cartTotal, cartItem)=> {
                return cartTotal += cartItem.totalAmount
            }, 0);

            state.itemCount = state.cart.length;
        },

        toggleCartQty : (state, action) => {
            const tempCart = state.cart.map((item)=> {
                if(item.id===action.payload.id){
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalAmount;

                    // for incrementing the cart
                    if(action.payload.type === 'INC'){
                        tempQty++;
                        tempTotalPrice = tempQty * item.price;
                    }

                    // for decrementing the cart 
                    if(action.payload.type == 'DEC'){
                        tempQty --;
                        if(tempQty<1){
                            tempQty = 1;
                        }
                        tempTotalPrice = tempQty * item.price;
                    }
                    return ({ ... item, quantity: tempQty, totalAmount: tempTotalPrice})

                }
                else{
                    return item;
                }
            });
        state.cart = tempCart;
        storeInLocalStorage(state.cart);
        }

    }
})


// exporting the cart functions
export const  {addToCart, getCartTotal, toggleCartQty, removeFromCart} = cartSlice.actions;

// exporting the cart and the total qty
export const getAllCarts = (state) => state.cart.cart;
export const getCartItemsCount = (state)=> state.cart.itemCount

export default cartSlice.reducer;