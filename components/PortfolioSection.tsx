import { ProjectType } from "@/utils/types";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";

type PortfolioSectionProps = {
  project: ProjectType;
};

type PortfolioSectionIconButtonProps = {
  icon: "source" | "demo";
  size: string;
  link: string;
};

function PortfolioSectionIconButton(props: PortfolioSectionIconButtonProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      className={
        "flex flex-row p-2 duration-500 hover:scale-125 fill-black hover:fill-white bg-white hover:bg-black rounded-xl"
      }
    >
      {props.icon == "source" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox={`0 0 24 24`}
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
        </svg>
      )}
      {/* <div className="flex text-xl font-bold">bruh</div> */}
    </a>
  );
}

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
    <div className="flex flex-col md:flex-row w-full h-full justify-center items-center px-16">
      {/* DIV ESQUERDA */}
      <div className="flex flex-col w-full h-full justify-center items-center">
        <motion.div
          className="flex"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: scrollDelay + 0.25, duration: 0.5 }}
        >
          <img src={props.project.image} alt="Imagem do Projeto" />
        </motion.div>
      </div>

      {/* DIV DIREITA */}
      <div className="flex flex-col w-full p-16 gap-4 justify-center items-center">
        {/* TITULO */}
        <motion.div
          className="flex text-3xl font-bold text-white text-center justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: scrollDelay + 0.25, duration: 0.5 }}
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
          transition={{ delay: scrollDelay + 0.25, duration: 0.5 }}
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
            transition={{ delay: scrollDelay + 0.25, duration: 0.5 }}
          >
            {translations.br.PortfolioSection.Technologies}
          </motion.div>

          <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
            {props.project.technologies.map((v, i) => {
              return (
                <motion.div
                  key={i}
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: scrollDelay + 0.25 + i * 0.1,
                    duration: 0.5,
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: scrollDelay + 0.25, duration: 0.5 }}
          >
            <PortfolioSectionIconButton
              icon="source"
              size="30"
              link={props.project.source}
            />
          </motion.div>
          <motion.div
            className={props.project.demo == "" ? "hidden" : "flex"}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: scrollDelay + 0.3, duration: 0.5 }}
          >
            <PortfolioSectionIconButton
              icon="demo"
              size="30"
              link={props.project.demo}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
