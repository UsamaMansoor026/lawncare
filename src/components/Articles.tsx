import { articles_data } from "../assets";
import SectionHeading from "./SectionHeading";

interface ArticleCard {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
}

const Articles = () => {
  return (
    <section className="max-w-6xl w-full px-5 m-auto my-16">
      <SectionHeading subheading="Articles" mainheading="Recent Articles" />

      <div className="articles-cards-container grid grid-cols-2 lg:grid-cols-3 gap-9 mt-10">
        {articles_data.map((article: ArticleCard) => (
          <article
            key={article.id}
            className="shadow-xl shadow-black/30 relative"
          >
            <div className="h-[270px]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="py-3 px-5 space-y-2">
              <h3 className="text-lg font-medium h-[58px]">{article.title}</h3>
              <p className="text-sm text-black/90">{article.content}</p>

              <h5 className="text-[14px] text-secondary text-right">
                {article.date}
              </h5>

              <button
                type="button"
                className="w-fit bg-primary text-white px-5 py-1.5 cursor-pointer duration-100 hover:bg-green-600 relative bottom-0"
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Articles;
