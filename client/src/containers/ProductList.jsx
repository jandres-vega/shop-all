import React from 'react';
import '../styles/ProductList.scss';
import { AppContext } from '../context/AppContext';
import ProductItem from '../components/ProductItem';
import CategoryItem from '../components/CategoryItem';
import Paginado from '../components/Paginado';

function ProductList() {
   const { state, change, filterSubCategoryProducts } =
      React.useContext(AppContext);
   const [currenPage, setCurrentPage] = React.useState(1);
   const [productByPag] = React.useState(8);

   const indexProducts = currenPage * productByPag;
   const indexPrimaryProducts = indexProducts - productByPag;

   const currentProducts = state.copyProducts.slice(
      indexPrimaryProducts,
      indexProducts,
   );

   const paginado = (pag) => {
      setCurrentPage(pag);
   };

   return (
      <section className="main-container">
         <Paginado
            paginado={paginado}
            productsByPag={productByPag}
            products={state.copyProducts}
         />
         <div className="ProductList">
            {change
               ? currentProducts.map((item) => (
                    <ProductItem key={item.id} product={item} />
                 ))
               : state.SubCategories.map((item) => (
                    <CategoryItem
                       key={item.id}
                       id={item.id}
                       image={item.image_subCategory}
                       name={item.name_subcategory}
                       filterByCategory={filterSubCategoryProducts}
                       setCurrenPage={setCurrentPage}
                    />
                 ))}
         </div>
      </section>
   );
}

export default ProductList;
