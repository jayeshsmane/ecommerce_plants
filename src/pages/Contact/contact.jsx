import React from 'react'
import Text from '../../components/text';
import bannerDetails from "../../data/redplants.json"
import Headerlayout from '../../layouts/header/Headerlayout';

const contact = () => {
  return (
    <>
      <Headerlayout />
      <div className='app-container'>
        <Text textData={bannerDetails.subscribe} />
      </div>
    </>
  )
}

export default contact
