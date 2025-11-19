import { images } from "../assets";
import Header from "./Header";

const Hero = () => {
  return (
    <section
      className="h-screen relative"
      style={{
        background: `url(${images.hero_bg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="max-w-6xl w-full px-5 m-auto h-[70vh] flex justify-center flex-col gap-2 z-10 relative">
        <h2 className="uppercase text-[15px] font-extrabold text-yellowish">
          Welcome to lawn care
        </h2>
        <h1 className="text-6xl font-extrabold text-white leading-[1.1] max-w-lg">
          Lawn care for everyone
        </h1>

        <p className="text-lg text-secondary text-shadow-sm text-shadow-black">
          Let us work on your yard
        </p>

        <button
          type="button"
          className="bg-primary px-6 py-2 w-fit text-white cursor-pointer duration-100 hover:bg-green-600"
        >
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Hero;
