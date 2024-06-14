type SectionTitleProps = {
  title: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="flex w-full justify-center items-center text-7xl font-bold text-white">
      {props.title}
    </div>
  );
}
