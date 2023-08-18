import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../../context/productContext";
import { useParams } from "react-router-dom";
import "./productDetail.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import BaseContainer from "../../BaseContainer/BaseContainer";

function ProductDetail() {
  const { product = [], priceConverter, currency } = useContext(ProductContext);
  const ProductId = useParams();
  const uniqueId = ProductId.id;
  const productDetail = product.find((item) => item.id === uniqueId);
  const { image, description, title, amount, price } = productDetail || {};
  const [thumbsSwiper] = useState(null);
  const imageList = [image, image];
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (quantity < amount) setQuantity((prev) => prev + 1);
  };
  // quantity counter
  const handleSubtract = () => {
    if (quantity !== 1) setQuantity((prev) => prev - 1);
  };

  if (productDetail === undefined) {
    return null;
  }
  const checkout = quantity * price;

  return (
    <BaseContainer>
      <div className="product">
        <div className="product__wrapper" display={"flex"}>
          <div className="product__images">
            <Swiper
              className="product__swiper"
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
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
          </div>

          <div className="product__detail ">
            <h2 className="product__detail_title">{title}</h2>
            <h3 className="stars">******</h3>
            <div className="product__action_price">
              Price: {priceConverter(price) + currency}
            </div>
            <div className="quantity">
              <div className="quantity__user">
                Quantity:
                <p>{quantity}</p>
                <div className="buttons">
                  <button onClick={handleAdd}>
                    <BiChevronUp />
                  </button>
                  <button onClick={handleSubtract}>
                    <BiChevronDown />
                  </button>
                </div>
              </div>

              <div className="amount">Amount: {amount}</div>
            </div>
            <div className="product__detail_addCard"></div>

            <Button>
              Checkout{" "}
              {quantity === 1 ? "" : priceConverter(checkout) + currency}
            </Button>
          </div>
        </div>

        <div className="product__description">
          <h2>Description</h2>
          {description}
        </div>
      </div>
    </BaseContainer>
  );
}

export default ProductDetail;
