import { ProjectType } from "@/utils/types";
import { motion } from "framer-motion";
import PortfolioSectionIconButton from "./PortfolioSectionIconButton";

type PortfolioSectionProps = {
  topColor: string;
  bottomColor: string;
  project: ProjectType;
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
        <div className="flex flex-grow w-full h-full justify-center items-center bg-gradient-to-r from-black to-transparent">
          <motion.div
            className="flex w-16 h-16 bg-white p-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          ></motion.div>
        </div>

        {/* DIV DIREITA */}
        <div className="flex flex-col w-full h-full px-16 gap-4 justify-center items-center">
          <motion.div
            className="text-3xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {props.project.title}
          </motion.div>

          <motion.div
            className="text-xl text-white text-justify px-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {props.project.description}
          </motion.div>

          <div className="flex flex-row justify-center items-center gap-8">
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <PortfolioSectionIconButton icon="source" size="30" />
            </motion.div>
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <PortfolioSectionIconButton icon="demo" size="30" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
