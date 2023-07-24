import { Stack } from "@mui/material";
import React from "react";
import "./LearnMore.scss";

function ProductDetail() {
  return (
    <Stack className="product" sx={{ color: "black" }}>
      <Stack className="product__images">
        adss
        <Stack className="product__image_list">{/* image.map */}</Stack>
        <Stack className="product__image_image">
          <img alt="bkg" />
        </Stack>
      </Stack>
      <Stack className="product__action">
        <Stack className="product__action_mainInfo"></Stack>
        <Stack className="product__action_type"></Stack>
        <Stack className="product__action_amount"></Stack>
        <Stack className="product__action_price"></Stack>
        <Stack className="product__action_addCart"></Stack>
      </Stack>
    </Stack>
  );
}

export default ProductDetail;
