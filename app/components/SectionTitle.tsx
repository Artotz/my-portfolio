type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
          {props.subtitle}
        </p>
      )}
    </div>
  );
}
