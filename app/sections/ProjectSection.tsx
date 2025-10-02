import { ProjectType } from "@/app/utils/types";
import { motion } from "framer-motion";
import { translations } from "@/app/utils/translations";
import Image from "next/image";
import { CustomIconButton } from "../components/CustomIconButton";

type PortfolioSectionProps = {
  project: ProjectType;
};

function TechnologiesBadge(text: string) {
  return (
    <div
      className="flex justify-center items-center px-2 py-1 mb-2 mr-2 text-xs font-semibold text-white bg-black rounded-full 
        duration-100 hover:scale-110 cursor-default"
    >
      {text}
    </div>
  );
}

export default function PortfolioSection(props: PortfolioSectionProps) {
  const scrollDelay = 0.25;

  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-center items-center sm:px-16 gap-4">
      {/* DIV ESQUERDA */}
      <div className="flex flex-col w-full px-4 sm:px-0 justify-center items-center">
        <motion.div
          className="flex"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: scrollDelay + 0.25, duration: 0.5 },
          }}
          // viewport={{ once: true }}
          transition={{ delay: 0, duration: 0 }}
        >
          <Image
            src={props.project.image}
            width={600}
            height={600}
            alt="Imagem do Projeto"
          />
        </motion.div>
      </div>

      {/* DIV DIREITA */}
      <div className="flex flex-col w-full px-4 sm:p-16 gap-4 justify-center items-center">
        {/* TITULO */}
        <motion.div
          className="flex text-3xl font-bold text-white text-center justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: scrollDelay + 0.25, duration: 0.5 },
          }}
          // viewport={{ once: true }}
          transition={{ delay: 0, duration: 0 }}
          animate
        >
          {props.project.title}
        </motion.div>

        {/* DESCRICAO */}
        <motion.div
          className="flex w-full text-xs sm:text-xl text-white text-justify sm:px-4 justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: scrollDelay + 0.25, duration: 0.5 },
          }}
          // viewport={{ once: true }}
          transition={{ delay: 0, duration: 0 }}
        >
          {props.project.description}
        </motion.div>

        {/* TECNOLOGIAS */}
        <div className="flex flex-col w-full h-full gap-4 justify-center items-center">
          <motion.div
            className="text-3xl font-bold text-white text-justify px-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: scrollDelay + 0.25, duration: 0.5 },
            }}
            // viewport={{ once: true }}
            transition={{ delay: 0, duration: 0 }}
          >
            {translations.br.PortfolioSection.Technologies}
          </motion.div>

          <div className="flex flex-row flex-wrap justify-center items-center">
            {props.project.technologies.map((v, i) => {
              return (
                <motion.div
                  key={i}
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: scrollDelay + 0.25 + i * 0.1,
                      duration: 0.5,
                    },
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0,
                    duration: 0,
                  }}
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
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: scrollDelay + 0.25, duration: 0.5 },
            }}
            // viewport={{ once: true }}
            transition={{ delay: 0, duration: 0 }}
          >
            <CustomIconButton
              icon="source"
              size="30"
              link={props.project.source}
            />
          </motion.div>
          <motion.div
            className={props.project.demo == "" ? "hidden" : "flex"}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: scrollDelay + 0.3, duration: 0.5 },
            }}
            // viewport={{ once: true }}
            transition={{ delay: 0, duration: 0 }}
          >
            <CustomIconButton icon="demo" size="30" link={props.project.demo} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
