import React, { useEffect, useState } from "react";
import './shop.styles.scss'

import { Routes, Route, useParams } from "react-router-dom";

import CollectionsOverview from "../../component/collections-overview/collections-overview";
import CollectionPage from "../collection/collection.components";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../component/with-spinner/with-spinner.component";

import { firestore,convertCollectionsSnapshotToMap } from "../../component/firebase/firebase.util";

const ShopPage = ({updateCollections}) =>{
    // loading part
    const [loading,setLoading] = useState(true)
    const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
    const CollectionPageWithSpinner = WithSpinner(CollectionPage)
    
    const unSubscribeFromSnapshot = null;
    useEffect(()=>{
        const collectionsRef = firestore.collection('collections');
        collectionsRef.onSnapshot(async snapshot =>{
           const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
           updateCollections(collectionsMap);
           setLoading(false);
        })
    })

    const urlParam =  Object.values(useParams())
        return( 
        <div className="shop-page">
           { urlParam[0] ? null : <CollectionsOverviewWithSpinner isLoading={loading}/>}
            <Routes>
            <Route  path= '/:urlParam' element={<CollectionPageWithSpinner isLoading={loading} urlParam={urlParam[0]}/>}  />
            </Routes>
        </div>
        
        )
}

const mapDispatchToProps = dipsatch =>({
    updateCollections : (collectionsMap) => dipsatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)