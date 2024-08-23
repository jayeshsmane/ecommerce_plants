import React from 'react'
import Home from '../pages/Home/Home'
import CatelogPage from '../pages/CatelogPage/CatelogPage'
import Contact from '../pages/Contact/contact'
import SingleProductPage from '../pages/SingleProductPage/SingleProductPage'
import Cartpage from '../pages/Cart/Cartpage'


// const Navroutes = () => {
//   return (
//     <div>
//         <Routes >
//             <Route path='/' element={<Home/>}/>
//             <Route path='/home' element={<Home/>}/>
//             <Route path='/catelog' element={<Catelog />}/>
//             <Route path='/contact' element={<Contact />} />
//             <Route path='/productpage' element={<SingleProductPage />} />
//             <Route path='/cartpage' element={<Cartpage />} />
//         </Routes>
//     </div>
//   )
// }

// export default Navroutes

 
const Navroutes = {
  homeScreen : [
    {
      name : "/",
      exact : true,
      component : <Home />
    },
    {
      name : "/home",
      component : <Home />
    },
    {
      name : "/catelog",
      component : <CatelogPage />
    },
    {
      name : "/contact",
      component : <Contact />
    },
    {
      name : "/productpage",
      component : <SingleProductPage />
    },
    {
      name : "/cartpage",
      component : <Cartpage />
    },
  ]
}
 
export default Navroutes;