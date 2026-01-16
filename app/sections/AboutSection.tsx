import { motion } from "framer-motion";
import { CustomIconButton } from "../components/CustomIconButton";

export default function AboutSection() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <motion.div
        className="flex w-full max-w-3xl flex-col gap-4 px-6 text-center text-sm font-semibold text-zinc-200 sm:text-lg"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        <p>Sou Artur Melo Catunda, desenvolvedor focado em React e mobile.</p>
        <p>
          Transformo ideias em produtos reais, com atenção a performance,
          manutenção e experiência do usuário.
        </p>
        <p>
          Gosto de trabalhar com código limpo, boas práticas e colaboração
          próxima ao time e ao negócio.
        </p>
        <p>
          No tempo livre, curto desenvolver jogos, assistir filmes de terror e
          jogar jogos de tabuleiro. Se quiser conversar, estou à disposição.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        viewport={{ once: true }}
      >
        <CustomIconButton
          icon="source"
          size="30"
          link="https://github.com/Artotz"
        />
        <CustomIconButton
          icon="linkedin"
          size="30"
          link="https://www.linkedin.com/in/arturmcatunda/"
        />
        <CustomIconButton
          icon="mail"
          size="30"
          link="mailto:arturmcatunda@gmail.com"
        />
        <CustomIconButton icon="curriculum" size="30" link="curriculo.pdf" />
      </motion.div>
    </div>
  );
}
