import { images } from "../assets";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section className="max-w-6xl w-full px-5 m-auto my-16">
      <SectionHeading
        subheading="About Us"
        mainheading="Welcome to the Lawn Care"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-between mt-10">
        {/* Image */}
        <div className="h-[400px] md:h-full">
          <img
            src={images.about}
            alt="Tractor in lawn"
            className="w-full object-cover h-[inherit]"
          />
        </div>

        {/* Content */}
        <div className="mt-5 md:mt-10">
          <p className="text-secondary mb-4">
            Lawn care keeps your yard healthy, clean and inviting by focusing on
            regular maintenance and proper treatment. A well-cared-for lawn
            boosts curb appeal and creates a comfortable outdoor space for your
            home.
          </p>

          {/* List of about services */}
          <ul className="mt-5 flex flex-col space-y-5">
            <li className="flex items-center justify-between text-lg py-5 px-8 rounded-md relative shadow-xl shadow-black/10 text-black group duration-200 hover:bg-primary hover:text-white">
              <span>Gutter cleaning</span>
              <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-extralight group-hover:bg-yellowish group-hover:text-black duration-200">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </li>

            <li className="flex items-center justify-between text-lg py-5 px-8 rounded-md relative shadow-xl shadow-black/10 text-black group duration-200 hover:bg-primary hover:text-white">
              <span>Organic fertilization</span>
              <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-extralight group-hover:bg-yellowish group-hover:text-black duration-200">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </li>

            <li className="flex items-center justify-between text-lg py-5 px-8 rounded-md relative shadow-xl shadow-black/10 text-black group duration-200 hover:bg-primary hover:text-white">
              <span>Weed control</span>
              <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-extralight group-hover:bg-yellowish group-hover:text-black duration-200">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </li>

            <li className="flex items-center justify-between text-lg py-5 px-8 rounded-md relative shadow-xl shadow-black/10 text-black group duration-200 hover:bg-primary hover:text-white">
              <span>New lawn installation</span>
              <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-extralight group-hover:bg-yellowish group-hover:text-black duration-200">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </li>

            <li className="flex items-center justify-between text-lg py-5 px-8 rounded-md relative shadow-xl shadow-black/10 text-black group duration-200 hover:bg-primary hover:text-white">
              <span>Mulch and other services</span>
              <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-extralight group-hover:bg-yellowish group-hover:text-black duration-200">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
