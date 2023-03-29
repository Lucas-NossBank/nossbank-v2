import machine01 from "../../../assets/img/machines/machine_01.png"
import machine02 from "../../../assets/img/machines/machine_02.png"
import machine03 from "../../../assets/img/machines/machine_13.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination,  Autoplay, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { CarouselDiv, SwiperImgDiv } from "./styles";

const SwiperCar = () => {
  return (
    <>
      <CarouselDiv>
       <Swiper
          modules={[Autoplay, Pagination, Scrollbar]}
          slidesPerView={1}
          scrollbar={{
              hide: true
          }}
          autoplay={{
                delay: 3500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
                }}
          loop
          className="mySwiper">
          <SwiperSlide>
              <SwiperImgDiv>
                  <img src={machine01} alt="#" />
              </SwiperImgDiv>
          </SwiperSlide>
          <SwiperSlide>
              <SwiperImgDiv>
                  <img src={machine02} alt="#" />
              </SwiperImgDiv>
          </SwiperSlide>
          <SwiperSlide>
              <SwiperImgDiv>
                  <img src={machine03} alt="#" />
              </SwiperImgDiv>
          </SwiperSlide>
        </Swiper>
      </CarouselDiv>
    </>
  );
}

export default SwiperCar