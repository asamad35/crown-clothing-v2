import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { compose } from "redux";

import WithSpinner from "../../component/with-spinner/with-spinner.component";
import CollectionPage from "./collection-page.components";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoaded,
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
