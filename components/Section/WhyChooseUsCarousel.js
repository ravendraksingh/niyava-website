"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "bootstrap-icons/font/bootstrap-icons.css"; // Optional if not already loaded
import "./whyus.css";

const WhyChooseUsCarousel = ({ data, heading }) => {
  const height = 48;
  const cardData = data;

  return (
    <div className="container py-5">
      <h3 className="display-5 fw-bold mb-5 text-center">{heading}</h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {cardData.map((item, idx) => (
          <SwiperSlide key={idx} className="h-100">
            <div className="card border h-100 p-4">
              <div className="card-body">
                <img
                  src={`/icons/${item.icon}`}
                  height={height}
                  className={`text-primary mb-3`}
                />
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyChooseUsCarousel;
