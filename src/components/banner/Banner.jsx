import React from 'react'
import "../banner/Banner.css"
import { useNavigate } from 'react-router-dom';

function Banner(props){
    const navigator = useNavigate();
    const { propdata } = props;
    return(
        <div className='banner-wrapper'>
            <div className="left-banner">
                <h1 className="left-banner-head">
                    Find perfect plants for your home
                </h1>
                <div className="left-banner-subhead">
                    <p>Beautiful plants that encourage</p>
                    <p>you to get creative</p>
                </div>
                <button className="left-banner-btn" onClick={() => navigator('/catelog')}>Shop Now</button>
            </div>
            <div className="right-banner">
                <img src={propdata} alt="" />
            </div>
        </div>
    )
}
export default Banner;