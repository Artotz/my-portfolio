type SectionTitleProps = {
  title: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="flex w-full h-[80vh] justify-center snap-center snap-always items-center text-7xl font-bold text-white">
      {props.title}
    </div>
  );
}
