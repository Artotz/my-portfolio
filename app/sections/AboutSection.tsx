import { motion } from "framer-motion";
import { CustomIconButton } from "../components/CustomIconButton";

export default function AboutSection() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
      <motion.div
        className="max-w-3xl text-sm text-zinc-300 sm:text-base"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        <p>
          Sou Artur Melo Catunda, desenvolvedor focado em React e mobile,
          apaixonado por produtos bem estruturados.
        </p>
        <p className="mt-4">
          Trabalho para transformar ideias em experi\u00eancias digitais com boa
          performance, manuten\u00e7\u00e3o simples e impacto real no neg\u00f3cio.
        </p>
        <p className="mt-4">
          Gosto de colaborar de perto com times e stakeholders para tomar
          decis\u00f5es claras e entregar evolu\u00e7\u00f5es consistentes.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        viewport={{ once: true }}
      >
        <CustomIconButton icon="source" link="https://github.com/Artotz" />
        <CustomIconButton
          icon="linkedin"
          link="https://www.linkedin.com/in/arturmcatunda/"
        />
        <CustomIconButton icon="mail" link="mailto:arturmcatunda@gmail.com" />
        <CustomIconButton icon="curriculum" link="curriculo.pdf" />
      </motion.div>
    </div>
  );
}
