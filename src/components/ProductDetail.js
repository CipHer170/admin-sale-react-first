import { Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";
import { useParams } from "react-router-dom";
import "./productDetail.scss";

function ProductDetail({ id }) {
  const { product = [] } = useContext(ProductContext);
  const ProductId = useParams();
  const uniqueId = ProductId.id;
  const productDetail = product.find((item) => item.id === uniqueId);

  const { image, description, title, amount, price } = productDetail || {};

  const images = [
    {
      id: 1,
      img: "https://svgsilh.com/svg/324596.svg",
    },
    {
      id: 2,
      img: "https://www.svgrepo.com/show/117055/small-duck.svg",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Linecons_small-cloud.svg/512px-Linecons_small-cloud.svg.png?20160307130929",
    },
    {
      id: 4,
      img: "https://svgsilh.com/svg/312035.svg",
    },
  ];

  if (productDetail === undefined) {
    return null;
  }
  console.log(productDetail);
  return (
    <Stack className="product" display={"flex"} flexDirection={"row"}>
      <Stack className="product__images">
        <Stack className="product__images_list">
          {images.map((img) => {
            return <img src={img.img} alt="images fruit" />;
          })}
        </Stack>
        <Stack className="product__images_image">
          <img alt="bkg" src={image} />
        </Stack>{" "}
      </Stack>
      <Stack className="product__action ">
        <Stack className="product__action_mainInfo">{title}</Stack>
        <Stack className="product__action_amount ">
          Amount:
          {amount}
        </Stack>
        <Stack className="product__action_price">Cost: {price}</Stack>
        <Stack className="product__action_addCart">
          <Button>Add</Button>
        </Stack>
        {/* <Stack className="product__action_description">{description}</Stack>{" "} */}
      </Stack>
    </Stack>
  );
}

export default ProductDetail;
