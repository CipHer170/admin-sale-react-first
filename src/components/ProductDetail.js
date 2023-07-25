import { Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import "./LearnMore.scss";
import { ProductContext } from "../context/productContext";
import { useParams } from "react-router-dom";

function ProductDetail({ id }) {
  const { product = [] } = useContext(ProductContext);
  const ProductId = useParams();
  const uniqueId = ProductId.id;
  const productDetail = product.find((item) => item.id === uniqueId);

  const [getData, setGetData] = useState(false);
  if (id === uniqueId) {
    setGetData(!getData);
  }
  return (
    <Stack className="product">
      <h4>{JSON.stringify(productDetail, null, 2)}</h4>
    </Stack>
  );
}

export default ProductDetail;
//  {/* <Stack className="product__images">
//       <Stack className="product__image_list">sdfsfdfsd</Stack>
//       <Stack className="product__image_image">
//         <img alt="bkg" />
//       </Stack>
//     </Stack>
//     <Stack className="product__action">
//       <Stack className="product__action_mainInfo"></Stack>
//       <Stack className="product__action_type"></Stack>
//       <Stack className="product__action_amount"></Stack>
//       <Stack className="product__action_price"></Stack>
//       <Stack className="product__action_addCart"></Stack>
//     </Stack> */}
