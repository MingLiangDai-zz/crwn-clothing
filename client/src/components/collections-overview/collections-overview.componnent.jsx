import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...others }) => (
      <CollectionPreview key={id} {...others} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
