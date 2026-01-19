type ScrollSnapContainerProps = {
  fullScreen?: boolean;
  snap?: "start" | "center" | "end" | "none";
  className?: string;
};

export const ScrollSnapContainer: React.FC<
  React.PropsWithChildren<ScrollSnapContainerProps>
> = ({
  children,
  fullScreen = false,
  snap = "none",
  className,
}: React.PropsWithChildren<ScrollSnapContainerProps>) => {
  const snapClassMap = {
    start: "snap-start",
    center: "snap-center",
    end: "snap-end",
    none: "",
  };
  const snapClass = snapClassMap[snap];
  const sizeClass = fullScreen ? "min-h-screen" : "py-16 sm:py-24";

  return (
    <div
      className={`flex w-full flex-col items-center justify-center ${sizeClass} ${snapClass} ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
