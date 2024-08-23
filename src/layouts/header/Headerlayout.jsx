import React, { useContext } from 'react'
import "../header/Headerlayout.css"
import { useNavigate } from 'react-router-dom'
import DataMapping from '../../context/datamapping/datamapping';

function Headerlayout() {
    const [contextData, dispatchData] = useContext(DataMapping);
    // console.log(contextData.Cartdata.length, "CART VALUE");
    let cartValue = JSON.parse(sessionStorage.getItem("cartdata"))?.length;

    const navigator = useNavigate();
    return (
        <div className='header-wrapper'>
            <div className="app-container header-container">
                <div className="logo" onClick={() => navigator('/home')}>Red Plants</div>
                <div className="navlink">
                    <ul>
                        <li onClick={() => navigator('/home')}>Home</li>
                        <li onClick={() => navigator('/catelog')}>Catalouge</li>
                        <li onClick={() => navigator('/contact')}>Contact</li>
                    </ul>
                </div>
                <div className="navright">
                    <p className='search'>Search</p>
                    <div className="cartWrapper" onClick={() => navigator('/cartpage')}>
                        <p>Cart</p>
                        <span className='cartVals'>{cartValue > 0 ? cartValue : 0}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Headerlayout;