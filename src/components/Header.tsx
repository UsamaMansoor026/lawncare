import Logo from "./Logo";

const Header = () => {
  return (
    <header className="relative z-10 backdrop-blur-2xl text-white py-4 px-5 flex items-center justify-between">
      <Logo />

      {/* Social Icons */}
      <div className="flex items-center justify-end w-full">
        <a
          href="/"
          className="w-12 h-12 rounded-full flex items-center justify-center duration-200 hover:bg-primary text-shadow-xs text-shadow-black"
        >
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a
          href="/"
          className="w-12 h-12 rounded-full flex items-center justify-center duration-200 hover:bg-primary text-shadow-xs text-shadow-black"
        >
          <i className="fa-brands fa-twitter" />
        </a>
        <a
          href="/"
          className="w-12 h-12 rounded-full flex items-center justify-center duration-200 hover:bg-primary text-shadow-xs text-shadow-black"
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="/"
          className="w-12 h-12 rounded-full flex items-center justify-center duration-200 hover:bg-primary text-shadow-xs text-shadow-black"
        >
          <i className="fa-solid fa-basketball" />
        </a>
      </div>
    </header>
  );
};

export default Header;

// https://preview.colorlib.com/theme/lawncare/
