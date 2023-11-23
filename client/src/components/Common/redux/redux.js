import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        isSpeedDialHidden: true,
        numberOfCartItem: 0,
        shoes: [
            // {
            //     mainImage: {
            //         image: null,
            //         code: "",
            //     },
            //     title: "",
            //     brand: "",
            //     quantity: 1,
            //     price: 0,
            //     sizes: {
            //         availability: "",
            //         sizes: "",
            //     },
            // },
        ],
    },
    reducers: {
        addCartShoes(state, action) {
            state.shoes.push(action.payload);
            if (state.shoes.length > 0) {
                state.isSpeedDialHidden = false;
            } else {
                state.isSpeedDialHidden = true;
            }
            state.numberOfCartItem = state.shoes.length;
        },
        deleteCartShoes(state, action) {
            state.shoes = state.shoes.filter(
                (item) => item.mainImage.code === action.payload
            );
            if (state.shoes.length > 0) {
                state.isSpeedDialHidden = false;
            } else {
                state.isSpeedDialHidden = true;
            }
            state.numberOfCartItem = state.shoes.length;
        },
        updateCartShoesQuantity(state, action) {
            const shoe = state.shoes.find(
                (item) => item.mainImage.code === action.payload.code
            );
            if (shoe && action.payload.quantity > 0) {
                shoe.quantity = action.payload.quantity;
            } else {
                console.error(`can't find shoes to update quantity`);
            }
        },
        updateCartShoesSize(state, action) {
            const shoe = state.shoes.find(
                (item) => item.mainImage.code === action.payload.code
            );
            if (shoe) {
                shoe.sizes = action.payload.sizes;
            } else {
                console.error(`can't find shoes to update size`);
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
    updateCartShoesSize,
    toggleIsSpeedDialHidden,
} = cartSlice.actions;
export default cartSlice.reducer;
