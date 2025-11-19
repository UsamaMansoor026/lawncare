import { tips } from "../assets";
import SeasonTipCard from "./SeasonTipCard";
import SectionHeading from "./SectionHeading";

export interface SeasonTipCardProps {
  id: number;
  season: string;
  tip: string;
  image: string;
}

const Seasons = () => {
  return (
    <section className="max-w-6xl w-full px-5 m-auto my-16">
      <SectionHeading
        subheading="Tips & techniques"
        mainheading="Seasonal Lawn Care Tips"
      />

      <div className="seasons-card-container grid grid-cols-2 gap-10 mt-10">
        {tips.map((tip: SeasonTipCardProps) => {
          return <SeasonTipCard data={tip} />;
        })}
      </div>
    </section>
  );
};

export default Seasons;
