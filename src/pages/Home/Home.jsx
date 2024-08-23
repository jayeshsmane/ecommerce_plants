import React, { useContext } from 'react'
import Banner from '../../components/banner';
import Textandimage from '../../components/imageAndText/Textandimage';
import Text from '../../components/text';
import DataMapping from '../../context/datamapping/datamapping';
import Headerlayout from '../../layouts/header/Headerlayout';

const Home = () => {
    const [contextData, dispatchData] = useContext(DataMapping);

    const storageData = contextData?.PlantData;

    if(storageData) {
        return (
            <div>
                <Headerlayout />
    
                <div className="app-container">
    
                    <Banner propdata={storageData.bannerImage} />
    
                    <Text textData={storageData.quote} />
    
                    {
                        Object.keys(storageData.bannerContent).map((values, key) => {
                            let data = storageData.bannerContent[values];
                            return (
                                <Textandimage key={key} PlanData={data} />
                            )
                        })
                    }
    
                    <Text textData={storageData.blogs} />
    
                    <Textandimage PlanData={storageData.edition} />
    
                    <Text textData={storageData.subscribe} />
                </div>
    
            </div>
        )
    }
    else{
        return <div> Loading ...</div>
    }
}

export default Home
