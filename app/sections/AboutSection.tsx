"use client";

import { motion } from "framer-motion";
import { CustomIconButton } from "../components/CustomIconButton";

type AboutSectionProps = {
  paragraphs: string[];
  buttons: {
    source: string;
    linkedin: string;
    mail: string;
    curriculum: string;
  };
};

export default function AboutSection({
  paragraphs,
  buttons,
}: AboutSectionProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
      <motion.div
        className="max-w-3xl text-sm text-zinc-300 sm:text-base"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        {paragraphs.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? "" : "mt-4"}>
            {paragraph}
          </p>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        viewport={{ once: true }}
      >
        <CustomIconButton
          icon="source"
          link="https://github.com/Artotz"
          label={buttons.source}
        />
        <CustomIconButton
          icon="linkedin"
          link="https://www.linkedin.com/in/arturmcatunda/"
          label={buttons.linkedin}
        />
        <CustomIconButton
          icon="mail"
          link="mailto:arturmcatunda@gmail.com"
          label={buttons.mail}
        />
        <CustomIconButton
          icon="curriculum"
          link="curriculo.pdf"
          label={buttons.curriculum}
        />
      </motion.div>
    </div>
  );
}
