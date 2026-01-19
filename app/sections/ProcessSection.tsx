type ProcessSectionProps = {
  steps: {
    title: string;
    description: string;
  }[];
};

export default function ProcessSection({ steps }: ProcessSectionProps) {
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
