import * as React from "react";
import { ProductContext } from "../context/productContext";
import { Stack } from "@mui/material";
import ProductCard from "./ProductCard";

function Products() {
  const { product } = React.useContext(ProductContext);
  const [closeAll, setCloseAll] = React.useState(null);

  return (
    <Stack
      sx={{ display: "grid", gridTemplateColumns: "repeat(4, auto)" }}
      className="card"
    >
      {product?.map((productItem) => {
        const productProps = { ...productItem, closeAll, setCloseAll };
        return (
          <Stack className="products_" display={"grid"} direction={"row"}>
            <ProductCard
              {...productProps}
              productItem={productItem}
              key={productItem.id}
            />
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Products;
