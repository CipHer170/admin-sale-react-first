import * as React from "react";
import { productContext } from "../context/productContext";
import { Stack } from "@mui/material";
import ProductCard from "./ProductCard";

function Products() {
  const { product } = React.useContext(productContext);
  const [closeAll, setCloseAll] = React.useState(null);

  return (
    <Stack sx={{ display: "flex" }} className="card">
      {product?.map((productItem) => {
        const productProps = { ...productItem, closeAll, setCloseAll };
        return (
          <ProductCard
            {...productProps}
            productItem={productItem}
            key={productItem.id}
          />
        );
      })}
    </Stack>
  );
}

export default Products;
