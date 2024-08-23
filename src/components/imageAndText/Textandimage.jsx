import React from 'react'
import "./Textandimage.css"
import { useNavigate } from 'react-router-dom';


function Textandimage(props) {
    const data = props;
    const navigator = useNavigate();
    if (data != {}) {
        return (
            <div className='imgandtextSection'>
                <h1 className='categories'>{data.PlanData.heading}</h1>

                <div className='imgandtextContainer'>

                    {/* shop button */}
                    {
                        data.PlanData.shopBtn &&

                        <div className='shopButton'>
                            <h1>Featured</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est asperiores impedit incidunt quod, molestias culpa eos velit cupiditate laudantium possimus, consequuntur soluta maiores doloremque nostrum enim quis delectus aut!</p>
                            <button onClick={() => navigator('/catelog')}>Shop all Favourites</button>
                        </div>

                    }

                    {/* Render product cards */}
                    {
                        data.PlanData.imgAndTxt.map((singleData, index) => {
                            return (
                                <div key={index} className='imgandtextWrapper' id={data.PlanData.equalWidth ? data.PlanData.equalWidth : ""}>
                                    <img className='imgandtext_img' src={singleData.image} alt="" />
                                    <p className='imgandtext_text'>{singleData.text}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    } else {

        <div className='nodata'>
            "Something went wrong"
        </div>
    }
}

export default Textandimage;