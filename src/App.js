import React, { useEffect, useReducer } from "react";
import './App.css';
import Navroutes from "./Routes/Navroutes";
import { HashRouter, Route, Routes } from "react-router-dom";
import DataMapping from "./context/datamapping/datamapping";
import reducer from "./context/datamapping/reducer/reducer";
import { PRODUCTDATA } from "./context/datamapping/action/action";
import productData from "../src/data/redplants.json"


function App() {
  const myData = JSON.parse(sessionStorage.getItem("dataMapping"));
  const [data, dispatchData] = useReducer(reducer, myData ? myData : []);

    useEffect(() => {
      let plantData = productData;
      dispatchData({
        name: 'PlantData',
        type: PRODUCTDATA,
        payload: plantData
      })
    }, [])


  return (
    <div className="App">
      {/* <h1>Tesseract</h1> */}
      <DataMapping.Provider value={[data, dispatchData]}>
        <HashRouter>
          <Routes>
            {Navroutes.homeScreen.map((screen, index) => {
              return (
                <Route
                  key={index}
                  path={screen.name}
                  exact={screen.exact}
                  element={screen.component}
                ></Route>
              );
            })}
          </Routes>
        </HashRouter>
      </DataMapping.Provider>
    </div>
  )
}

export default App;
