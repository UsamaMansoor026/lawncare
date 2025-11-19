import SectionHeading from "./SectionHeading";
import TestimonialCarousal from "./TestimonialCarousal";

const Testimonials = () => {
  return (
    <section className="max-w-6xl w-full px-5 m-auto my-16">
      <SectionHeading subheading="Testimonial" mainheading="Happy Clients" />

      <TestimonialCarousal />
    </section>
  );
};

export default Testimonials;
