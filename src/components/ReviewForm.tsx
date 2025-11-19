import SectionHeading from "./SectionHeading";

const ReviewForm = () => {
  return (
    <section className="max-w-xl w-full px-5 m-auto my-16">
      <SectionHeading subheading="" mainheading="Leave a Review" />

      <form className="flex flex-col space-y-4 bg-secondary/50 p-5 mt-5 rounded-md">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="outline-none border border-secondary px-3 py-1.5 rounded-lg placeholder-icons"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="text-sm">
            Your Role
          </label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Enter your role / designation"
            className="outline-none border border-secondary px-3 py-1.5 rounded-lg placeholder-icons"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="review" className="text-sm">
            What do you think about us?
          </label>
          <textarea
            name="review"
            id="review"
            placeholder="Enter your review"
            className="outline-none border border-secondary px-3 py-1.5 rounded-lg placeholder-icons min-h-[130px]"
            required
          />
        </div>

        <button
          type="submit"
          className="form-submit-button bg-primary text-white px-9 py-1.5 rounded-lg w-fit cursor-pointer duration-200 hover:bg-green-600"
        >
          Submit Review
        </button>
      </form>
    </section>
  );
};

export default ReviewForm;
