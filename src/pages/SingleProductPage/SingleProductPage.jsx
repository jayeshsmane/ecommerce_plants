// import React, { useContext, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
import "./SingleProductPage.css"
// import { addCartDataContext } from '../../App';



// const SingleProductPage = () => {
//   const {cartData, updateCartData} = useContext(addCartDataContext); // using Context

//   const [quantity, setQuantity] = useState(undefined);
//   const [hideclass, setHideclass] = useState('d-none');
//   const navigator = useNavigate();

//   const addToCart = (proddata, qty) => {
//     if (qty != undefined) {
//       setHideclass('d-none');
//       setQuantity('');
//       const prodNamePrice = proddata.text.split('|');
//       const price = prodNamePrice[1].split('.')[1].trim();

//       const newProduct = {
//         "productSKU": `${proddata.sku}`,
//         "productName": prodNamePrice[0],
//         "productPrice": price,
//         "productQty": parseInt(qty),
//         "productImg": proddata.image
//       };
//       updateCartData(newProduct); // new product adding in context
//     } else {
//       setHideclass('');
//     }
//   }

//   const location = useLocation();
//   const { productdata } = location.state || {};
//   const prdouctName = (productdata?.text)?.split("|");
//   return (
//       <div className='productpage-wrapper'>
//         <img src="/assets/back.png" alt="backbtn" className='backbtn' onClick={() => navigator("/catelog")} />

//         <div className='productpage'>
//           <img className='productpage__img' src={productdata?.image} alt="" />
//           <div className="productpage__rightside">
//             <div className="productpage__heading">
//               <h1>{prdouctName[0]}</h1>
//               <h3>{prdouctName[1]}</h3>
//             </div>
//             <div className="productpage__qty">
//               <label htmlFor="">Quantity</label>
//               <div className="qty__input">
//                 <input type="text" maxLength={1} onChange={(e) => setQuantity(e.target.value)} value={quantity} />
//                 <p className={`qty-error ${hideclass}`}>Please Select Quantity</p>
//               </div>
//             </div>
//             <button onClick={() => addToCart(productdata, quantity)}>ADD TO CART</button>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default SingleProductPage;

import React, { useContext, useState } from 'react'
import "./SingleProductPage.css"
import DataMapping from '../../context/datamapping/datamapping'
import Headerlayout from "../../layouts/header/Headerlayout"
import { useNavigate } from "react-router-dom";
import { CARTDATA } from "../../context/datamapping/action/action"

const SingleProductPage = () => {
    const [contextData, dispatchData] = useContext(DataMapping)

    const selectedItem = JSON.parse(sessionStorage.getItem('selectedproductdata'));
    console.log(selectedItem,"selecterd itme");
    // const selectedItem = contextData?.selectedItem;
    const prdouctName = (selectedItem?.text)?.split("|");
    const navigator = useNavigate();


    let [quantity, setQuantity] = useState(0);
    let [hideclass, setHideclass] = useState('d-none');

    quantity = quantity === '' ? 0 : quantity;

    const addToCart = (proddata, qty) => {
        if (qty !== 0) {
            setHideclass('d-none');
            setQuantity('');
            const prodNamePrice = proddata.text.split('|');
            const price = prodNamePrice[1].split('.')[1].trim();

            const newProduct = {
                "productSKU": `${proddata.sku}`,
                "productName": prodNamePrice[0],
                "productPrice": price,
                "productQty": parseInt(qty),
                "productImg": proddata.image
            };
            // updateCartData(newProduct);
            dispatchData({
                name: 'Cartdata',
                type: CARTDATA,
                payload: newProduct
            })
        } else {
            setHideclass('');
        }
    }

    if (selectedItem) {
        return (
            <div className='productpage-wrapper '>
                <Headerlayout />
                <div className="app-container">
                    <img src="/assets/back.png" alt="backbtn" className='backbtn' onClick={() => navigator("/catelog")} />

                    <div className='productpage'>
                        <img className='productpage__img' src={selectedItem?.image} alt="" />
                        <div className="productpage__rightside">
                            <div className="productpage__heading">
                                <h1>{prdouctName[0]}</h1>
                                <h3>{prdouctName[1]}</h3>
                            </div>
                            <div className="productpage__qty">
                                <label htmlFor="">Quantity</label>
                                <div className="qty__input">
                                    <input type="text" maxLength={1} onChange={(e) => setQuantity(Number(e.target.value))} value={quantity === 0 ? '' : quantity} />
                                    <p className={`qty-error ${hideclass}`}>Please Select Quantity</p>
                                </div>
                            </div>
                            <button onClick={() => addToCart(selectedItem, quantity)}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleProductPage

