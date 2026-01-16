type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 pt-12 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-white">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="max-w-2xl text-sm sm:text-base text-zinc-300">
          {props.subtitle}
        </p>
      )}
    </div>
  );
}
