type HeaderProps = {
  title: string;
  headerColor: string;
  scrollRatio: number;
  onClick: () => void;
};

export default function Header(props: HeaderProps) {
  return (
    <header>
      <title>{props.title}</title>
      <div
        className="flex flex-col fixed w-full h-12 top-0"
        style={{
          backgroundColor: props.headerColor,
          zIndex: 999,
          transition: "1s",
        }}
      >
        <div className="flex flex-grow w-full h-full justify-around items-center text-xs">
          <button
            className="flex p-1 bg-slate-500 border-black border-2 rounded-full"
            onClick={props.onClick}
          >
            teste
          </button>
          <button className="flex p-1 bg-slate-500 border-black border-2 rounded-full">
            teste
          </button>
          <button className="flex p-1 bg-slate-500 border-black border-2 rounded-full">
            teste
          </button>
        </div>
        <div
          className="flex h-2 bg-red-400"
          style={{
            width: `${props.scrollRatio}%`,
            transition: "1s",
          }}
        ></div>
      </div>
    </header>
  );
}
