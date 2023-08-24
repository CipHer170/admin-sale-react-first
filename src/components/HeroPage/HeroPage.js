import BaseContainer from "../BaseContainer/BaseContainer";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
// import no_image from "../../assets/no_image.jpg";
// import hero_image from "../../assets/wallpaper.jpg";
import "./HeroPage.scss";

function HeroPage() {
  const [thumbsSwiper] = useState(null);

  const imageList = [
    {
      image: "https://images.uzum.uz/cjd7v84vutv8a2v9uujg/main_page_banner.jpg",
    },

    {
      image: "https://images.uzum.uz/cjd859kjvf2mtfam523g/main_page_banner.jpg",
    },
  ];
  return (
    <div className="hero">
      <BaseContainer>
        <Swiper
          className="heroSwiper"
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
              <SwiperSlide className="heroImagesSlide" key={index}>
                <a href="www.google.com">
                  <img src={img.image} alt="images fruit" key={index} />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </BaseContainer>
    </div>
  );
}

export default HeroPage;
