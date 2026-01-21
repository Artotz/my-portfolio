"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CustomIconButton } from "../components/CustomIconButton";
import profilePhoto from "../../assets/soueu.png";

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
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <motion.div
          className="order-first mx-auto h-52 w-52 overflow-hidden rounded-full border border-white/10 bg-white/5 sm:h-60 sm:w-60 md:order-last md:mx-0 md:-mt-12 md:ml-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.35,
              delay: 0.25,
              ease: "easeOut",
              type: "tween",
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={profilePhoto}
            alt="Foto de Artur Catunda"
            className="h-full w-full object-cover"
            sizes="(min-width: 768px) 240px, 208px"
            priority={false}
          />
        </motion.div>

        <div className="flex flex-1 flex-col gap-8">
          <motion.div
            className="max-w-3xl text-sm text-zinc-300 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.35,
                delay: 0.25,
                ease: "easeOut",
                type: "tween",
              },
            }}
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.35,
                delay: 0.25,
                ease: "easeOut",
                type: "tween",
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CustomIconButton
              link="https://github.com/Artotz"
              label={buttons.source}
            />
            <CustomIconButton
              link="https://www.linkedin.com/in/arturmcatunda/"
              label={buttons.linkedin}
            />
            <CustomIconButton
              link="mailto:arturmcatunda@gmail.com"
              label={buttons.mail}
            />
            <CustomIconButton
              link="https://wa.me/558582011193"
              label={buttons.whatsapp}
            />
            <CustomIconButton
              link="Currículo - Artur Melo Catunda.pdf"
              label={buttons.curriculum}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
