type HeaderProps = {
  title: string;
  headerColor: "filled" | "transparent";
  scrollRatio: number;
  itemList: string[];
  scrollFunction: (e: any) => void;
};

export default function Header(props: HeaderProps) {
  const headerItemList = (id: string, i: number) => {
    return (
      <button
        key={i}
        className={
          props.headerColor !== "filled"
            ? "flex p-1 px-2 border-2 duration-500 bg-white text-black border-black hover:bg-black hover:text-white hover:border-white"
            : "flex p-1 px-2 border-2 duration-500 bg-black text-white border-white hover:bg-white hover:text-black hover:border-black"
        }
        onClick={() => {
          document.getElementById(id)?.scrollIntoView();
          props.scrollFunction(null);
        }}
      >
        {id}
      </button>
    );
  };

  return (
    <header className="fixed w-full z-[999]">
      <title>{props.title}</title>
      <div
        className="flex flex-col sticky w-full h-12 top-0 border-black border-b-2 duration-1000 z-[999] overflow-clip"
        style={
          props.headerColor == "filled"
            ? {
                backgroundColor: "#000",
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
              HEADER
            </div>
          </div>
          {/* DIREITA */}
          <div className="flex gap-2 px-2 justify-around items-center text-xs">
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
