import SectionHead from "../ui/SectionHead/SectionHead";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./Recomended.css";
import CardTwo from "../ui/CardTwo/CardTwo";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import icon from "../../assets/images/01.png";

function Recommended() {
  const data = useSelector((state) => state.offers);

  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <i key={index}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-star-fill text-warning"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </i>
    ));
  return (
    <section id="recommended">
      <SectionHead icon={icon}>
        <div className="d-flex flex-row flex-wrap gap-2 align-items-center">
          <span className="section-title-text">Recommended</span>
          <span className="section-title-stars">{stars}</span>
        </div>
      </SectionHead>
      {data.length ? (
        <div>
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={6}
            grabCursor={true}
            breakpoints={{
              280: {
                slidesPerView: 2,
              },
              380: {
                slidesPerView: 3,
              },
              550: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1124: {
                slidesPerView: 6,
              },
              1500: {
                slidesPerView: 7,
              },
            }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((offer) => (
              <Fragment key={offer.id}>
                <SwiperSlide>
                  <CardTwo offer={offer} />
                </SwiperSlide>
              </Fragment>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="text-center my-5 font-weight-bold text-white h2">
          SORRY!! No Offers Found to you, Try again later...
        </p>
      )}
    </section>
  );
}

export default Recommended;
