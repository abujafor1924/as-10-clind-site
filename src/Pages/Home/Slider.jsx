import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        //    pagination={{
        //      clickable: true,
        //    }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-center">
            <img
              className="rounded md:w-96 md:h-72 w-32 h-32 border-solid border-1 border-white"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <h1 className="text-3xl font-bold">fresh salads</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img
              className="rounded md:w-96 md:h-72 w-32 h-32 border-solid border-1 border-white"
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <h1 className="text-3xl font-bold">party platters</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img
              className="rounded md:w-96 md:h-72 w-32 h-32 border-solid border-1 border-white"
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <h1 className="text-3xl font-bold">sea food</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img
              className="rounded md:w-96 md:h-72 w-32 h-32 border-solid border-1 border-white"
              src="https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <h1 className="text-3xl font-bold">vegan desserts</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
