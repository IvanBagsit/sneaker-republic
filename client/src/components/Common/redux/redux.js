import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        isSpeedDialHidden: true,
        numberOfCartItem: 0,
        totalQuantities: 0,
        grandTotal: 0,
        shoes: [],
    },
    reducers: {
        addCartShoes(state, action) {
            state.shoes.push(action.payload);
            state.numberOfCartItem = state.shoes.length;
            state.grandTotal = state.shoes.reduce(
                (accumulator, currentItem) =>
                    accumulator + currentItem.totalPrice,
                0
            );
            state.totalQuantities = state.shoes.reduce(
                (accumulator, currentItem) =>
                    accumulator + currentItem.quantity,
                0
            );
            if (state.numberOfCartItem > 0) {
                state.isSpeedDialHidden = false;
            } else {
                state.isSpeedDialHidden = true;
            }
        },
        deleteCartShoes(state, action) {
            state.shoes = state.shoes.filter(
                (item, index) => index !== action.payload.index
            );
            state.totalQuantities = state.shoes.reduce(
                (accumulator, currentItem) =>
                    accumulator + currentItem.quantity,
                0
            );
            state.grandTotal = state.shoes.reduce(
                (accumulator, currentItem) =>
                    accumulator + currentItem.totalPrice,
                0
            );
            state.numberOfCartItem = state.shoes.length;
            if (state.numberOfCartItem > 0) {
                state.isSpeedDialHidden = false;
            } else {
                state.isSpeedDialHidden = true;
            }
        },
        updateCartShoesQuantity(state, action) {
            const shoe = state.shoes.find(
                (item, index) =>
                    item.mainImage.code === action.payload.code &&
                    index === action.payload.index
            );
            if (shoe && action.payload.quantity > 0) {
                shoe.quantity = action.payload.quantity;
                shoe.totalPrice = shoe.quantity * shoe.price;
                state.grandTotal = state.shoes.reduce(
                    (accumulator, currentItem) =>
                        accumulator + currentItem.totalPrice,
                    0
                );
                state.totalQuantities = state.shoes.reduce(
                    (accumulator, currentItem) =>
                        accumulator + currentItem.quantity,
                    0
                );
            } else {
                console.error(`can't find shoes to update quantity`);
            }
        },
        toggleIsSpeedDialHidden(state, action) {
            state.isSpeedDialHidden = !state.isSpeedDialHidden;
        },
    },
});

export const {
    addCartShoes,
    deleteCartShoes,
    updateCartShoesQuantity,
    toggleIsSpeedDialHidden,
} = cartSlice.actions;
export default cartSlice.reducer;
