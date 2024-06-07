import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <>
      <motion.div
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        teste
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <button>teste</button>
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        teste
      </motion.div>
    </>
  );
}
