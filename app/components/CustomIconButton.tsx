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
      className="spectrum-hover-parent spectrum-button inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-zinc-100 transition"
    >
      <span className="spectrum-text-hover" data-text={props.label}>
        {props.label}
      </span>
    </a>
  );
}
