import { motion } from "framer-motion";
import {
  CustomIconButton,
  // CustomIconDownloadButton,
} from "../components/CustomIconButton";

export default function AboutSection() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center gap-4">
      <div className="flex flex-col flex-grow sm:w-1/2 px-4 sm:px-0 font-semibold text-sm sm:text-2xl text-center justify-center items-center gap-4">
        {[
          <p key={0}>{`Meu nome é Artur Melo Catunda.`}</p>,
          <p
            key={1}
          >{`Sou Desenvolvedor Web especializado em React.js, React Native e Tailwind CSS, mas com sólida experiência também em back-end utilizando Express e Spring. Também tenho familiaridade com o uso de Docker, GitHub Actions e AWS para criação de ambientes de desenvolvimento e hospedagem.`}</p>,
          <p
            key={2}
          >{`Trabalho com metodologias ágeis e boas práticas de desenvolvimento. Minhas principais habilidades incluem foco, resiliência, comprometimento, organização e solução de problemas, características que sempre aplico em meus projetos para entregar soluções eficientes e bem estruturadas.`}</p>,
          <p
            key={3}
          >{`No meu tempo livre, adoro desenvolver jogos, assistir filmes de terror e jogar jogos de tabuleiro e cartas. Se precisar de um currículo ou quiser bater um papo, fico à disposição!`}</p>,
        ].map((v, i) => {
          return (
            <motion.div
              className="flex"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ delay: 0.25 + 0.25, duration: 0.5 }}
            >
              {v}
            </motion.div>
          );
        })}
        <div className="flex flex-row justify-center items-center gap-8 mt-8">
          {[
            <CustomIconButton
              key={0}
              icon="source"
              size="30"
              link="https://github.com/Artotz"
            />,
            <CustomIconButton
              key={1}
              icon="linkedin"
              size="30"
              link="https://www.linkedin.com/in/arturmcatunda/"
            />,
            <CustomIconButton
              key={2}
              icon="mail"
              size="30"
              link="mailto:arturmcatunda@gmail.com"
            />,
            <CustomIconButton
              key={3}
              icon="curriculum"
              size="30"
              link="curriculo.pdf"
            />,
          ].map((v, i) => {
            return (
              <motion.div
                className="flex"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                transition={{ delay: 1 + 0.05 * i, duration: 0.5 }}
              >
                {v}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
