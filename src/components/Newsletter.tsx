const Newsletter = () => {
  return (
    <section className="bg-primary text-white py-6">
      <div className="newsletter-container max-w-xl mx-auto flex items-center justify-between gap-10">
        <h2 className="text-2xl">Subscribe to our Newsletter</h2>

        <form className="flex items-center justify-center border border-primary shadow-xl shadow-white/10 rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Enter email address"
            className="py-2 px-3 outline-none border-none bg-white text-black w-full"
          />
          <button type="submit" className="bg-primary-dark py-2 px-5">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
