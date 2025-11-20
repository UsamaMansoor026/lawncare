import Logo from "./Logo";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative z-10 backdrop-blur-2xl text-white py-4 px-5 flex items-center justify-between">
      <Logo />

      {/* Social Icons */}
      <div className="flex items-center justify-end w-full">
        <motion.a
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.6, type: "spring", stiffness: 120 }}
          href="/"
          className="w-12 h-12 rounded-full flex items-center justify-center duration-200 hover:bg-primary text-shadow-xs text-shadow-black"
        >
          <i className="fa-brands fa-facebook-f" />
        </motion.a>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
          href="/"
          className="w-12 h-12 rounded-full flex items-center justify-center duration-200 hover:bg-primary text-shadow-xs text-shadow-black"
        >
          <i className="fa-brands fa-twitter" />
        </motion.a>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
          href="/"
          className="w-12 h-12 rounded-full flex items-center justify-center duration-200 hover:bg-primary text-shadow-xs text-shadow-black"
        >
          <i className="fa-brands fa-instagram" />
        </motion.a>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          href="/"
          className="w-12 h-12 rounded-full flex items-center justify-center duration-200 hover:bg-primary text-shadow-xs text-shadow-black"
        >
          <i className="fa-solid fa-basketball" />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;

// https://preview.colorlib.com/theme/lawncare/
