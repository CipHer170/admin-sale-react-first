import { Stack } from "@mui/material";
import React from "react";
import "./LearnMore.scss";

function LearMore(product) {
  const { image, price, title, description } = product;
  return (
    <Stack className="product">
      <Stack className="product__images">
        <Stack className="product__image_list">{/* image.map */}</Stack>
        <Stack className="product__image_image">
          <img src={image} alt={title} />
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

export default LearMore;
