import React from "react";
import PreviewCollection from "../preview-collection/preview-collection.component";


import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview }  from '../../redux/shop/shop.selectors'


import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => {
    console.log(collections);
    return(
        <div className="collections-overview">
            {
                collections.map(({id,...otheCollectionProps})=> <PreviewCollection key={id} {...otheCollectionProps} />)
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);