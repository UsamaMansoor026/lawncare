interface Props {
  subheading: string;
  mainheading: string;
}

const SectionHeading = ({ subheading, mainheading }: Props) => {
  return (
    <div>
      <h4 className="text-primary font-semibold">{subheading}</h4>
      <h2 className="text-3xl font-bold text-black">{mainheading}</h2>
    </div>
  );
};

export default SectionHeading;
