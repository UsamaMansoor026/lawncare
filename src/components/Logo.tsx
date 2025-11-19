const Logo = ({ varient }: { varient?: string }) => {
  return (
    <h2
      className={`text-3xl font-extrabold text-shadow-xs text-shadow-black ${
        varient ? "uppercase" : ""
      }`}
    >
      {varient ? (
        <>
          Lawn <span className="text-primary">Care</span>
        </>
      ) : (
        <>
          Lawn<span className="text-primary">Care</span>
        </>
      )}
    </h2>
  );
};

export default Logo;
