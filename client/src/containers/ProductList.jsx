import React from "react";
import "../styles/ProductList.scss";
import { AppContext } from "../context/AppContext";
import { getAllProducts } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../components/Paginado";
import ProductItem from "../components/ProductItem";
import CategoryItem from "../components/CategoryItem";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.copyAllProducts);
  const categoriesFilters = useSelector(state => state.subCategories);
  // console.log(categoriesFilters);


  const { name } = React.useContext(AppContext);
  const [currenPage, setCurrentPage] = React.useState(1);
  const [productByPag] = React.useState(8);

  const indexProducts = currenPage * productByPag;
  const indexPrimaryProducts = indexProducts - productByPag;

  const currentProducts = products.slice(
    indexPrimaryProducts,
    indexProducts
  );
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const paginado = (pag) => {
    setCurrentPage(pag);
  };

  return (
    <section className="main-container">
      <Paginado
        paginado={paginado}
        productsByPag={productByPag}
        products={products}
      />
      <div className="ProductList">
        {name.length === 0
          ? currentProducts.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))
          : categoriesFilters.SubCategories.map((item) => (
            <CategoryItem
              key={item.id}
              id={item.id}
              image={item.image_subCategory}
              name={item.name_subcategory}
              setCurrenPage={setCurrentPage}
            />
          ))}
      </div>
    </section>
  );
}

export default ProductList;
