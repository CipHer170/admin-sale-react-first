import * as React from "react";
import { ProductContext } from "../../../context/productContext";
import "./Products.scss";
import ProductCard from "../ProductCard/ProductCard";
import BaseContainer from "../../BaseContainer/BaseContainer";

function Products() {
  const { product } = React.useContext(ProductContext);
  const [closeAll, setCloseAll] = React.useState(null);

  // if (product) {
  //   product.length = 1;
  // }
  return (
    <BaseContainer>
      <div className="products">
        {product?.map((productItem, index) => {
          const productProps = { ...productItem, closeAll, setCloseAll };
          return (
            <ProductCard
              {...productProps}
              productItem={productItem}
              key={productItem.id}
            />
          );
        })}
      </div>
    </BaseContainer>
  );
}

export default Products;
