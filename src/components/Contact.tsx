const Contact = () => {
  return (
    <section className="my-16 bg-primary text-white py-9">
      <div className="contact-container max-w-6xl w-full px-5 m-auto py-5 flex items-center justify-between gap-16">
        <div className="space-y-2">
          <h2 className="text-4xl font-semibold">Contact with us</h2>
          <p className="text-white/80 max-w-sm">
            Do you have any comments or questions about our services then
            contact us.
          </p>
        </div>

        <div>
          <h2 className="text-4xl lg:text-5xl text-yellowish font-semibold whitespace-nowrap">
            +92 333 3333333
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
