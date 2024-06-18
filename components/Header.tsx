type HeaderProps = {
  title: string;
  headerColor: "filled" | "transparent";
  scrollRatio: number;
  itemList: string[];
};

export default function Header(props: HeaderProps) {
  const headerItemList = (id: string, i: number) => {
    return (
      <button
        key={i}
        className="flex p-1 px-2 border-black hover:border-white border-2 rounded-full duration-500 text-black hover:scale-110 hover:text-white bg-white hover:bg-black"
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
        className="flex flex-col fixed w-full h-12 top-0 border-black border-b-2 duration-1000 z-[999]"
        style={
          props.headerColor == "filled"
            ? {
                backgroundColor: "#000A",
                borderColor: "black",
              }
            : {
                backgroundColor: "transparent",
                borderColor: "transparent",
              }
        }
      >
        {/* ITEMS */}
        <div className="flex flex-grow w-full h-full justify-between items-center text-xs">
          {/* ESQUERDA */}
          <div className="flex flex-grow px-4 justify-start items-center text-xs">
            <div
              className="text-3xl font-bold duration-1000"
              style={
                props.headerColor == "filled"
                  ? {
                      color: "white",
                    }
                  : {
                      color: "black",
                    }
              }
            >
              BRUH
            </div>
          </div>
          {/* DIREITA */}
          <div className="flex gap-4 px-4 justify-around items-center text-xs">
            {props.itemList.map((v, i) => headerItemList(v, i))}
          </div>
        </div>

        {/* SCROLL PROGRESS BAR */}
        <div
          className="flex h-2 bg-red-500/75"
          style={{
            width: `${props.scrollRatio}%`,
            transition: "1s",
          }}
        ></div>
      </div>
    </header>
  );
}
