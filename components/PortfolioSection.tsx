import { motion } from "framer-motion";

type PortfolioSectionProps = {
  topColor: string;
  bottomColor: string;
};

export default function PortfolioSection(props: PortfolioSectionProps) {
  return (
    <div
      className={`flex flex-row gap-4 w-full h-[80vh] snap-center snap-always justify-center items-center`}
      style={{
        backgroundImage: `linear-gradient(${props.topColor}, ${props.bottomColor})`,
      }}
    >
      <div className="flex flex-row w-full h-full">
        {/* DIV ESQUERDA */}
        <div className="flex flex-grow w-full h-full bg-slate-400 justify-center items-center">
          <motion.div
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            teste
          </motion.div>
        </div>

        {/* DIV DIREITA */}
        <div className="flex flex-col w-full h-full  justify-center items-center">
          {/* METADE DE CIMA */}
          <div className="flex flex-row w-full h-full justify-center items-center">
            <motion.div
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              teste
            </motion.div>
          </div>

          {/* METADE DE BAIXO */}
          <div className="flex flex-row w-full h-full justify-center items-center gap-4">
            <motion.div
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              teste
            </motion.div>
            <motion.div
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              teste
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
