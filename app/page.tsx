import Header from "@/app/components/Header";
import SectionTitle from "@/app/components/SectionTitle";
import { getTranslations } from "@/app/utils/i18n";
import { projects } from "@/app/utils/projects/projectsList-br";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import SkillsSection from "./sections/SkillsSection";
import ProcessSection from "./sections/ProcessSection";

export default function Home() {
  const t = getTranslations();
  const titles = t.Home.titles;

  return (
    <main className="min-h-screen bg-zinc-950 text-white spectrum-surface">
      <Header title={t.Profile.name} itemList={titles} labels={t.Header} />

      <section
        id={titles[0]}
        className="flex min-h-[100svh] items-center py-16 sm:py-24"
      >
        <HeroSection
          badge={t.Hero.badge}
          headline={t.Hero.headline}
          subheadline={t.Hero.subheadline}
          proof={t.Hero.proof}
        />
      </section>

      <section id={titles[1]} className="py-16 sm:py-24">
        <SectionTitle
          title={t.Sections.about.title}
          // subtitle={t.Sections.about.subtitle}
        />
        <div className="mt-10">
          <AboutSection paragraphs={t.About.paragraphs} buttons={t.Buttons} />
        </div>
      </section>

      <section id={titles[2]} className="py-16 sm:py-24">
        <ProjectSection
          projects={projects}
          title={t.Projects.title}
          // subtitle={t.Projects.subtitle}
          codeLabel={t.Projects.codeLabel}
          demoLabel={t.Projects.demoLabel}
          imageAlt={t.Projects.imageAlt}
        />
      </section>

      <section id={titles[3]} className="py-16 sm:py-24">
        <SectionTitle
          title={t.Sections.skills.title}
          // subtitle={t.Sections.skills.subtitle}
        />
        <div className="mt-10">
          <SkillsSection groups={t.Skills.groups} />
        </div>
      </section>

      {/* <section className="py-16 sm:py-24">
        <SectionTitle
          title={t.Sections.process.title}
          // subtitle={t.Sections.process.subtitle}
        />
        <div className="mt-10">
          <ProcessSection steps={t.Process.steps} />
        </div>
      </section> */}

      <section className="py-16 sm:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t.Cta.title}
          </h2>
          {/* <p className="max-w-2xl text-sm text-zinc-300 sm:text-base">
            {t.Cta.body}
          </p> */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:arturmcatunda@gmail.com"
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              {t.Cta.emailLabel}
            </a>
            <a
              href="https://wa.me/558582011193"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              {t.Cta.whatsappLabel}
            </a>
            <a
              href="https://www.linkedin.com/in/arturmcatunda/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              {t.Cta.linkedinLabel}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>{t.Footer.copyright}</span>
          <span>{t.Footer.built}</span>
        </div>
      </footer>
    </main>
  );
}
