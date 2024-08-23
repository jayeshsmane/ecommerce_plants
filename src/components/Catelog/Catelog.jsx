import React, { useContext } from 'react'
import "./Catelog.css"
import { useNavigate } from 'react-router-dom';
import SingleProductPage from '../../pages/SingleProductPage/SingleProductPage';
import DataMapping from '../../context/datamapping/datamapping';
import Headerlayout from '../../layouts/header/Headerlayout';
import { SELECTEDPRODUCT } from '../../context/datamapping/action/action';

function Catelog() {
    const [contextData, dispatchData] = useContext(DataMapping);
    const data = contextData.PlantData.catelog.products;
    const navigator = useNavigate();

    const handleSingleProduct = (productdata) => {
        dispatchData({
            name : 'selectedItem',
            type : SELECTEDPRODUCT,
            payload : productdata
        })
        navigator("/productpage");
    }

    return (
        <div>
            <Headerlayout />
            <div className='app-container'>
                <p>"Invest in plants today for a greener tomorrow."</p>
                <div className='catelogsection'>
                    {
                        data?.map((singleData, index) => {
                            return (
                                <div key={index} className='catelog' onClick={(e) => handleSingleProduct(singleData)}>
                                    <img className='catelog__img' src={singleData.image} alt="" />
                                    <p className='catelog__text'>{singleData.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Catelog
