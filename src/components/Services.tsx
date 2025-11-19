import { services } from "../assets";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export interface ServicesCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const Services = () => {
  return (
    <section className="max-w-6xl w-full px-5 m-auto my-16">
      <SectionHeading subheading="Services" mainheading="Lawn Services" />

      {/* Services array data */}
      <div className="services-card-container grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-3 lg:gap-2 my-7">
        {services.map((service: ServicesCard) => {
          return <ServiceCard key={service.id} data={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
