import { ProjectType } from "@/utils/types";
import { motion } from "framer-motion";
import PortfolioSectionIconButton from "./PortfolioSectionIconButton";
import { translations } from "@/utils/translations";

type PortfolioSectionProps = {
  project: ProjectType;
};

function TechnologiesBadge(text: string) {
  return (
    <div
      className="flex justify-center items-center px-2 py-1 mb-2 mr-2 text-xs font-semibold text-white bg-violet-800 rounded-full 
        duration-100 hover:scale-110 cursor-default"
    >
      {text}
    </div>
  );
}

export function PortfolioSection(props: PortfolioSectionProps) {
  return (
    <div
      className={`flex flex-row gap-4 w-full h-[80vh] snap-end snap-always justify-center items-center`}
    >
      <div className="flex flex-row w-full h-full">
        {/* DIV ESQUERDA */}
        <div className="flex flex-grow w-full h-full justify-center items-center">
          <motion.div
            className="flex w-16 h-16 bg-white p-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
          ></motion.div>
        </div>

        {/* DIV DIREITA */}
        <div className="flex flex-col w-full h-full p-16 gap-4 justify-center items-center">
          {/* TITULO */}
          <motion.div
            className="flex text-3xl font-bold text-white text-center justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            animate
          >
            {props.project.title}
          </motion.div>

          {/* DESCRICAO */}
          <motion.div
            className="flex w-full text-xl text-white text-justify px-4 justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {props.project.description}
          </motion.div>

          {/* TECNOLOGIAS */}
          <div className="flex flex-col w-full h-full gap-4 justify-center items-center">
            <motion.div
              className="text-3xl font-bold text-white text-justify px-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              {translations.br.PortfolioSection.Technologies}
            </motion.div>

            <div className="flex flex-row flex-wrap gap-4 ">
              {props.project.technologies.map((v, i) => {
                return (
                  <motion.div
                    key={i}
                    className="flex"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
                  >
                    {TechnologiesBadge(v)}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ICONES */}
          <div className="flex flex-row justify-center items-center gap-8">
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <PortfolioSectionIconButton icon="source" size="30" />
            </motion.div>
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
