import React, { useEffect, useState } from "react";
import "./shop.styles.scss";

import { Routes, Route, useParams } from "react-router-dom";

import CollectionPage from "../collection-page/collection-page.components";

// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../component/with-spinner/with-spinner.component";
import CollectionsOverviewContainer from "../../component/collections-overview/collection-overview.component";
// Have a look at container model
import CollectionPageContainer from "../collection-page/collection-page.container";

const ShopPage = () => {
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);
  const dispatch = useDispatch();
  const CollectionPageWithSpinner = WithSpinner(CollectionPage);

  const urlParam = Object.values(useParams());

  return (
    <div className="shop-page">
      {urlParam[0] ? null : <CollectionsOverviewContainer />}
      <Routes>
        <Route
          path="/:urlParam"
          element={
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              urlParam={urlParam[0]}
            />
          }
        />
      </Routes>
    </div>
  );
};

//
/*const mapStateToProps = (state) => ({
  isCollectionsLoaded: selectIsCollectionsLoaded(state),
});

const mapDispatchToProps = (dipsatch) => ({
  fetchCollectionsStart: () => dipsatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);*/
export default ShopPage;
