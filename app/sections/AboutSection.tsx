"use client";

import { motion } from "framer-motion";
import { CustomIconButton } from "../components/CustomIconButton";

type AboutSectionProps = {
  paragraphs: string[];
  buttons: {
    source: string;
    linkedin: string;
    mail: string;
    whatsapp: string;
    curriculum: string;
  };
};

export default function AboutSection({
  paragraphs,
  buttons,
}: AboutSectionProps) {
  const buttonsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const buttonItem = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

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
        variants={buttonsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={buttonItem}>
          <CustomIconButton
            icon="source"
            link="https://github.com/Artotz"
            label={buttons.source}
          />
        </motion.div>
        <motion.div variants={buttonItem}>
          <CustomIconButton
            icon="linkedin"
            link="https://www.linkedin.com/in/arturmcatunda/"
            label={buttons.linkedin}
          />
        </motion.div>
        <motion.div variants={buttonItem}>
          <CustomIconButton
            icon="mail"
            link="mailto:arturmcatunda@gmail.com"
            label={buttons.mail}
          />
        </motion.div>
        <motion.div variants={buttonItem}>
          <CustomIconButton
            icon="whatsapp"
            link="https://wa.me/558582011193"
            label={buttons.whatsapp}
          />
        </motion.div>
        <motion.div variants={buttonItem}>
          <CustomIconButton
            icon="curriculum"
            link="curriculo.pdf"
            label={buttons.curriculum}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
