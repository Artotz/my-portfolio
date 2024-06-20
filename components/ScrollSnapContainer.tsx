type ScrollSnapContainerProps = {
  size?: string;
  snap?: "start" | "center" | "end";
};

export const ScrollSnapContainer: React.FC<
  React.PropsWithChildren<ScrollSnapContainerProps>
> = ({
  children,
  size = "80vh",
  snap = "center",
  ...props
}: React.PropsWithChildren<ScrollSnapContainerProps>) => {
  return (
    <div
      className={`flex flex-col w-full h-full snap-${snap} snap-always overflow-clip`}
    >
      {children}
    </div>
  );
};
