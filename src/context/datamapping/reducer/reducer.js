import React, { useContext } from "react";
import { CARTDATA, PRODUCTDATA, REMOVECARTDATA, SELECTEDPRODUCT } from "../action/action";
import DataMapping from "../datamapping";


const myNewState = JSON.parse(sessionStorage.getItem("dataMapping"));
const reducer = (state = [], action) => {
  console.log(action, "REDUCER MAIN DATA");
  switch (action.type) {
    case PRODUCTDATA:
      let newState = {
        ...state, [action.name]: action.payload,
      };
      sessionStorage.setItem("dataMapping", JSON.stringify(newState));
      return newState;

    case SELECTEDPRODUCT: {
      console.log(action.payload, "selected product");
      let selectedProduct = {
        ...state, [action.name]: action.payload
      }
      sessionStorage.setItem("selectedproductdata", JSON.stringify(action.payload));
      return selectedProduct;
    }

    case CARTDATA: {
      console.log(state, "STATE");
      let isCartData = state.Cartdata;
      let cartData;

      if (isCartData) {
        //IF THE productSKU GET MATCH MEANS PRODUCT EXISTS SO IT WILL RETURN 0 ELSE RETURN -1
        const existingProductIndex = state.Cartdata.findIndex(
          (singleCartData) => singleCartData.productSKU === action.payload.productSKU
        );

        if (existingProductIndex !== -1) {
          //PRODUCT EXISTS UPDATE QUANTITY
          cartData = state.Cartdata.map((singleCartData, index) => {
            if (singleCartData.productSKU === action.payload.productSKU) {
              return {
                ...singleCartData,
                productQty: singleCartData.productQty + action.payload.productQty
              };
            }
            return singleCartData;
          });
          sessionStorage.setItem("cartdata", JSON.stringify(cartData));
        } else {
          cartData = [...state.Cartdata, action.payload];
          sessionStorage.setItem("cartdata", JSON.stringify(cartData));
        }
        console.log(cartData,"is Array");
        // sessionStorage.setItem("cartdata", JSON.stringify([cartData]));

        return {
          ...state, [action.name]: cartData
        };

      } else {
        cartData = {
          ...state, [action.name]: [action.payload]
        }
        sessionStorage.setItem("cartdata", JSON.stringify([action.payload]));
        return cartData;
      }
      }

    case REMOVECARTDATA : {
      const updateCart = state.Cartdata?.filter((singleProduct) => {
        console.log(singleProduct, "REMOVE PRODUCT");
        return singleProduct.productSKU !== action.payload.productSKU;
      })
      sessionStorage.setItem("cartdata", JSON.stringify(updateCart));
      return {
        ...state, Cartdata: updateCart
      }
    }

    default:
      sessionStorage.setItem("dataMapping", JSON.stringify(state));
      return state;
  }
};

export default reducer;