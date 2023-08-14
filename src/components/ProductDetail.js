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

function ProductDetail({ id }) {
  const { product = [] } = useContext(ProductContext);
  const ProductId = useParams();
  const uniqueId = ProductId.id;
  const productDetail = product.find((item) => item.id === uniqueId);
  const { image, description, title, amount, price } = productDetail || {};
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    {
      id: 5,
      img: "https://svgsilh.com/svg/324596.svg",
    },
    {
      id: 6,
      img: "https://www.svgrepo.com/show/117055/small-duck.svg",
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Linecons_small-cloud.svg/512px-Linecons_small-cloud.svg.png?20160307130929",
    },
    {
      id: 8,
      img: "https://svgsilh.com/svg/312035.svg",
    },
  ];
  const imageList = [image, image];

  if (productDetail === undefined) {
    return null;
  }

  return (
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
                <img src={img} alt="images fruit" />
              </SwiperSlide>
            );
          })}
        </Swiper>
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
