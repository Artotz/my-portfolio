type ScrollSnapContainerProps = {
  size?: string;
  snap?: "start" | "center" | "end";
};

export const ScrollSnapContainer: React.FC<
  React.PropsWithChildren<ScrollSnapContainerProps>
> = ({
  children,
  size = "100vh",
  snap = "center",
  ...props
}: React.PropsWithChildren<ScrollSnapContainerProps>) => {
  return (
    <div
      className={`flex flex-col w-full justify-center items-center`}
      style={{ height: size }}
    >
      {children}
    </div>
  );
};
