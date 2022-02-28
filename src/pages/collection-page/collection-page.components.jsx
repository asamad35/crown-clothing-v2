import React from "react";

import CollectionItemComponent from "../../component/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./collection-page.styles.scss";

const CollectionPage = ({}) => {
  const { urlParam } = useParams();
  const collection = useSelector(selectCollection(urlParam));
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.urlParam)(state),
// });

// export default connect(mapStateToProps, null)(CollectionPage);
export default CollectionPage;
