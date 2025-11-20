import type { ServicesCard } from "./Services";
import { motion } from "framer-motion";

interface Props {
  data: ServicesCard;
}

const ServiceCard = ({ data }: Props) => {
  const { id, icon, title, description } = data;
  return (
    <motion.article
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: id * 0.2 }}
      key={id}
      className="p-5 flex flex-col items-center justify-center text-center space-y-6 group shadow-sm shadow-black/30"
    >
      <div className="w-[100px] h-[100px] rounded-full text-5xl text-primary flex items-center justify-center duration-200 group-hover:bg-primary group-hover:text-yellowish">
        <span className={icon} />
      </div>

      <div className="space-y-6">
        <h3 className="text-black text-lg font-medium">{title}</h3>
        <p className="text-secondary">{description}</p>
      </div>

      <div className="bg-primary w-8 h-8 rounded-full text-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
        <i className="fa-solid fa-arrow-right" />
      </div>
    </motion.article>
  );
};

export default ServiceCard;
