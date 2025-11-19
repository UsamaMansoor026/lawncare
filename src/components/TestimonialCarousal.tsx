import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonial_data } from "../assets";

const TestimonialCarousal = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={1500}
      centerMode={false}
      className="pb-7 mt-10"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 520,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 521,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {testimonial_data.map((data) => (
        <article
          key={data.id}
          className="mx-5 p-5 h-[180px] shadow-xl shadowblack
          /10 space-y-2 testimonial-card"
        >
          <h2 className="font-semibold text-xl">{data.name}</h2>
          <h4 className="text-sm text-secondary">{data.designation}</h4>

          <p className="text-black/90">{data.review}</p>
        </article>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousal;
