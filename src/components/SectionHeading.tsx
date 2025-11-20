import { motion } from "framer-motion";

interface Props {
  subheading: string;
  mainheading: string;
}

const SectionHeading = ({ subheading, mainheading }: Props) => {
  return (
    <div>
      <motion.h4
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-primary font-semibold"
      >
        {subheading}
      </motion.h4>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-3xl font-bold text-black"
      >
        {mainheading}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
