type HeaderProps = {
  title: string;
  headerColor: string;
  scrollRatio: number;
  itemList: string[];
};

export default function Header(props: HeaderProps) {
  const headerItemList = (id: string, i: number) => {
    return (
      <button
        key={i}
        className="flex p-1 px-2 bg-slate-100 border-black border-2 rounded-full"
        onClick={() => {
          document.getElementById(id)?.scrollIntoView();
        }}
      >
        {id}
      </button>
    );
  };

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
        {/* ITEMS */}
        <div className="flex flex-grow w-full h-full justify-around items-center text-xs">
          {props.itemList.map((v, i) => headerItemList(v, i))}
        </div>

        {/* SCROLL PROGRESS BAR */}
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
