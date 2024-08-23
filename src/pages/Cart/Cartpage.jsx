import React, { useContext, useEffect, useState } from 'react'
import { addCartDataContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './Cartpage.css'
import DataMapping from '../../context/datamapping/datamapping';
import { CARTDATA, REMOVECARTDATA } from '../../context/datamapping/action/action';
import Headerlayout from '../../layouts/header/Headerlayout';


const Cartpage = () => {
  const navigator = useNavigate();

  const [contextData, dispatchData] = useContext(DataMapping);

  console.log(contextData, "CONTEXT DATA");
  
  // const productdata = contextData.Cartdata;
  const productdata = JSON.parse(sessionStorage.getItem("cartdata"));
  const [cartData, setCartData] = useState(productdata);

  const [totalBill, setTotalBill] = useState();

  useEffect(() => {
    let totalAmt = 0;
    productdata?.map((singleProduct) => {
      let productPrice = parseInt(singleProduct.productPrice) * singleProduct.productQty;
      totalAmt = totalAmt + productPrice;
      return totalAmt;
    });

    setTotalBill(totalAmt);
  }, [productdata])

  const removeProuct = (currentProduct) => {
    console.log(currentProduct, "REMOVE PRODUCT");
    // const updateCart = cartData?.filter((singleProduct) => {
    //   return singleProduct.productSKU !== currentProduct.productSKU;
    // })
    // setCartData(updateCart);

    dispatchData({
      name: 'removeData',
      type: REMOVECARTDATA,
      payload: currentProduct
    })
  }

  return (
    <>
      <Headerlayout />
      <div className='app-container'>
        <img src="/assets/shopagain.png" alt="backbtn" className='backbtn' onClick={() => navigator("/catelog")} />
        <div className='cartpagewrapper'>
          {
            productdata?.length > 0 ?
              <div className='cartDatawrapper' >
                <div className="cartHeadWrapper">
                  <div className="cartHead">
                    <p className='cartHead__colName'>Product Image</p>
                    <p className='cartHead__colName'>Product Name</p>
                    <p className='cartHead__colName'>Product Price</p>
                    <p className='cartHead__colName'>Product Qty</p>
                    <p className='cartHead__colName'>Total</p>
                  </div>
                </div>
                <div className="addedcartdata">
                  {
                    productdata.map((singleProduct) => {
                      return (
                        <div className="addedProductsBtn">
                          <div className='addedProducts'>
                            <div className='addedProducts__img'><img src={singleProduct.productImg} alt='productImage'></img></div>
                            <p>{singleProduct.productName}</p>
                            <p>{singleProduct.productPrice}</p>
                            <p>{singleProduct.productQty}</p>
                            <p>{singleProduct.productPrice * singleProduct.productQty}</p>
                          </div>
                          <div className="removeProductBtn">
                            <button onClick={() => removeProuct(singleProduct)}>Remove</button>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='totalBill'>
                  <div className="totalBill__data">
                    Your Total Bill is : {totalBill}
                  </div>
                </div>
              </div>
              :
              <div className="emptycart">
                <h2>Soory! Your cart is empty</h2>
                <img src='/assets/empty-cart' alt='empty-cart'></img>
              </div>
          }
        </div>
      </div>
    </>

  )
}

export default Cartpage
