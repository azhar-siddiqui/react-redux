import React from "react";

const Product = (props) => {
  console.log(props);
  return (
    <div className="product__container">
      <h2>Product Components</h2>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://m.media-amazon.com/images/I/61D84NtVgVL._AC_SR180,120_QL70_.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
          <button onClick={() => props.removeToCartHandler()}>
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
