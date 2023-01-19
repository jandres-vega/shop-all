import React from 'react';
import '../styles/ProductDetail.scss';
import { useParams } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

function ProductDetail() {
   const { id } = useParams();

   return (
      <aside className="ProductDetail">
         <ProductInfo id={id} />
      </aside>
   );
}

export default ProductDetail;
