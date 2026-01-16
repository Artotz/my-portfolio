const steps = [
  {
    title: "Arquitetura clara",
    description:
      "Defino estruturas simples e escal\u00e1veis para facilitar manuten\u00e7\u00e3o e evolu\u00e7\u00e3o.",
  },
  {
    title: "Comunica\u00e7\u00e3o objetiva",
    description:
      "Alinho expectativas, proponho solu\u00e7\u00f5es e reporto progresso com transpar\u00eancia.",
  },
  {
    title: "Entrega incremental",
    description:
      "Entrego em ciclos curtos para validar cedo e reduzir riscos.",
  },
];

export default function ProcessSection() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm text-zinc-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
