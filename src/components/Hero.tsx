import { images } from "../assets";
import Header from "./Header";
import { motion } from "framer-motion";

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
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="uppercase text-[15px] font-extrabold text-yellowish"
        >
          Welcome to lawn care
        </motion.h2>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-6xl font-extrabold text-white leading-[1.1] max-w-lg"
        >
          Lawn care for everyone
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-lg text-secondary text-shadow-sm text-shadow-black"
        >
          Let us work on your yard
        </motion.p>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          type="button"
          className="bg-primary px-6 py-2 w-fit text-white cursor-pointer duration-100 hover:bg-green-600"
        >
          Learn more
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
