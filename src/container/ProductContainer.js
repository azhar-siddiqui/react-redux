import Product from "../components/Product";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../service/action/action";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
