import React from 'react';
import '../styles/ProductInfo.scss';
import { AppContext } from '../context/AppContext';

function ProductInfo({ id }) {
   const { state, handleDetailProduct } = React.useContext(AppContext);
   const { productDetail } = state;
   React.useEffect(() => {
      handleDetailProduct(id).catch((err) => {
         console.log(err.statusCode);
      });
   }, []);

   return (
      <>
         <div className="product-img-detail">
            <img src={productDetail.image} alt="bike" />
         </div>
         <div className="ProductInfo">
            <p>{`$${productDetail.price}`}</p>
            <p>{productDetail.name_product}</p>
            <p>{productDetail.description}</p>
            <button className="primary-button add-to-cart-button">
               Add to cart
            </button>
         </div>
      </>
   );
}

export default ProductInfo;
