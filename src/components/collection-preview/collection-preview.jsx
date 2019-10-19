import React from "react";

import CollectionItem from "../collection-item/collection-item";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <section className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </section>
);

export default CollectionPreview;
