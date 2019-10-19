import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <article className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <footer className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </footer>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </article>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
