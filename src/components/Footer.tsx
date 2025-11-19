import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="mt-16 bg-footer text-white">
      <footer className="max-w-6xl w-full py-14 px-5 m-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1st div -> Logo and socials */}
        <div className="flex flex-col gap-4">
          <div className="mb-10">
            <Logo varient="footer" />
          </div>

          <div className="flex items-center justify-start w-full gap-3">
            <a
              href="/"
              className="w-13 h-12 rounded-full text-lg flex items-center justify-center duration-200 bg-white/10 hover:text-primary text-shadow-xs text-shadow-black"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href="/"
              className="w-13 h-12 rounded-full text-lg flex items-center justify-center duration-200 bg-white/10 hover:text-primary text-shadow-xs text-shadow-black"
            >
              <i className="fa-brands fa-twitter" />
            </a>
            <a
              href="/"
              className="w-13 h-12 rounded-full text-lg flex items-center justify-center duration-200 bg-white/10 hover:text-primary text-shadow-xs text-shadow-black"
            >
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </div>

        {/* 2nd div -> Services */}
        <div>
          <h2 className="mb-10 text-2xl">Services</h2>

          <ul className="flex flex-col gap-3">
            <li className="duration-200 hover:text-primary cursor-pointer">
              <i className="fa-solid fa-angle-right mr-2 text-sm" />
              Lawn Mowing
            </li>
            <li className="duration-200 hover:text-primary cursor-pointer">
              <i className="fa-solid fa-angle-right mr-2 text-sm" />
              Edging & Trimming
            </li>
            <li className="duration-200 hover:text-primary cursor-pointer">
              <i className="fa-solid fa-angle-right mr-2 text-sm" />
              Fertilization
            </li>
            <li className="duration-200 hover:text-primary cursor-pointer">
              <i className="fa-solid fa-angle-right mr-2 text-sm" />
              Weed Control
            </li>
          </ul>
        </div>

        {/* 3rd div -> Contact Information */}
        <div>
          <h2 className="mb-10 text-2xl">Contact Information</h2>

          <ul className="flex flex-col gap-3">
            <li className="duration-200 hover:text-primary cursor-pointer flex items-start">
              <i className="fa-solid fa-location-dot mr-2 mt-2" />
              <span>Office # 03, street # 06, Islamabad, Pakistan</span>
            </li>
            <li className="duration-200 hover:text-primary cursor-pointer">
              <i className="fa-solid fa-phone mr-2 mt-2" />
              <span>+92 333 3333333</span>
            </li>
            <li className="duration-200 hover:text-primary cursor-pointer">
              <i className="fa-solid fa-envelope mr-2 mt-2" />
              <span>info@lawncare.com</span>
            </li>
          </ul>
        </div>

        {/* 4th div -> Business Hours */}
        <div>
          <h2 className="mb-10 text-2xl">Business Hours</h2>

          <ul className="flex flex-col gap-3">
            <li>
              <h4 className="text-yellowish font-medium mb-1">Opening Days:</h4>
              <p className="text-sm">Monday - Friday: 9am to 8pm</p>
              <p className="text-sm">Saturday: 9am to 5pm</p>
            </li>
            <li>
              <h4 className="text-yellowish font-medium mb-1">Vacations:</h4>
              <p className="text-sm">All Sunday Days & All Official Holidays</p>
            </li>
          </ul>
        </div>
      </footer>

      <p className="text-center pb-5 text-secondary">
        Copyright &copy; {new Date().getFullYear()} | Lawn Care | Template by
        Colorlib
      </p>
    </section>
  );
};

export default Footer;
