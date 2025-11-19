import type { SeasonTipCardProps } from "./Seasons";

interface Props {
  data: SeasonTipCardProps;
}

const SeasonTipCard = ({ data }: Props) => {
  const { id, season, tip, image } = data;

  return (
    <article
      key={id}
      className="rounded-md overflow-hidden shadow-xl shadow-black/10"
    >
      <div className="h-[300px] overflow-hidden">
        <img src={image} alt={season} className="w-full h-full object-cover" />
      </div>

      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{season}</h3>
        <p className="text-sm text-secondary leading-[1.7]">{tip}</p>
      </div>
    </article>
  );
};

export default SeasonTipCard;
