import React from "react";
import './shop.styles.scss'

import { Routes, Route, useLocation, useParams } from "react-router-dom";

import CollectionsOverview from "../../component/collections-overview/collections-overview";
import CollectionPage from "../collection/collection.components";
const ShopPage = () =>{

    const urlParam =  Object.values(useParams())
        return( 
        <div className="shop-page">
           { urlParam[0] ? null : <CollectionsOverview/>}
            <Routes>
            <Route  path= '/:urlParam' element={<CollectionPage urlParam={urlParam[0]}/>}  />
            </Routes>
        </div>
        
        )
}


export default ShopPage