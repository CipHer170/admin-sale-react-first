import { Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";
import { useParams } from "react-router-dom";
import "./productDetail.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function ProductDetail() {
  const { product = [] } = useContext(ProductContext);
  const ProductId = useParams();
  const uniqueId = ProductId.id;
  const productDetail = product.find((item) => item.id === uniqueId);
  const { image, description, title, amount, price } = productDetail || {};
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imageList = [image, image];

  if (productDetail === undefined) {
    return null;
  }

  return (
    <Stack>
      <Stack className="product" display={"flex"} flexDirection={"row"}>
        <Stack className="product__images">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            className="product__images_swiper"
            loop={true}
            spaceBetween={250}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {imageList.map((img, index) => {
              return (
                <SwiperSlide className="product__images_slide" key={index}>
                  <img src={img} alt="images fruit" key={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <Stack className="product__action ">
          <Stack className="product__action_mainInfo">{title}</Stack>
          <Stack className="product__action_container">
            <Stack className="product__action_amount ">
              Amount:
              {amount}
            </Stack>
            <Stack className="product__action_price">Cost: {price}</Stack>
          </Stack>
          <Stack className="product__action_addCart">
            <Button>Add</Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="product__action_description">
        <h2>Description</h2>
        {description}
      </Stack>
    </Stack>
  );
}

export default ProductDetail;
//<Stack className="product__images_image">
//{/* <Button onClick={goPrevious}>Prev</Button> */}

//{images.map((img) => {
//return (
//<Stack className="product__images_image_single" width={100}>
//<img src={img.img} alt="images fruit" />
//    </Stack>
//);
//})}
//{/* <Button onClick={goNext}> Next </Button> */}
//</Stack>{" "}
