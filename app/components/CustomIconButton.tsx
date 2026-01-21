type CustomIconButtonProps = {
  link: string;
  label: string;
};

export function CustomIconButton(props: CustomIconButtonProps) {
  const isExternal = props.link.startsWith("http");

  return (
    <a
      href={props.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="spectrum-hover-parent rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20"
    >
      <span className="spectrum-text-hover">{props.label}</span>
    </a>
  );
}
