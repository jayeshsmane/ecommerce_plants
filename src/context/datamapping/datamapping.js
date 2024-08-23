import React from "react";
// import { PRODUCTDATA } from "./context/datamapping/action/action";
import productData from "../../data/redplants.json"
 
const DataMapping = React.createContext([productData, () => { }]);
 
export default DataMapping;