import * as React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { productContext } from "../context/productContext";
import { Stack } from "@mui/material";
import ProductCard from "./ProductCard";

function Products() {
  const { product, addCart, setAddCart } = React.useContext(productContext);
  const [addClick, setAddClick] = React.useState(false);
  const [closeAll, setCloseAll] = React.useState(null);

  let content = (
    <Stack>
      <h3>+</h3>
      {addCart}
      <h3>-</h3>
    </Stack>
  );

  // React.useEffect(() => {
  //   localStorage.setItem("addCart", JSON.stringify(addCart));
  //   const storedItems = JSON.parse(localStorage.getItem("addCart"));
  // }, [addCart]);

  const handleAddClick = () => {
    setAddCart(addCart + 1);
  };
  return (
    <Stack sx={{ display: "flex" }} className="card">
      {product?.map((productItem) => {
        const productProps = { ...productItem, closeAll, setCloseAll };
        return (
          <ProductCard
            {...productProps}
            key={productItem.id}
            handleAddClick={handleAddClick}
          />
        );
      })}
    </Stack>
  );
}

export default Products;
