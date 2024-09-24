type CustomIconButtonProps = {
  icon: "source" | "demo" | "linkedin" | "mail" | "curriculum";
  size: string;
  link: string;
};

// type CustomIconDownloadButtonProps = {
//   icon: "source" | "demo" | "linkedin" | "mail" | "curriculum";
//   size: string;
//   link: string;
//   download: string;
// };

function buttonSVGs(svg: string, size: string) {
  switch (svg) {
    case "source":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "demo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="3 3 24 24"
        >
          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
        </svg>
      );
    case "mail":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="3 3 18 18"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
          />
        </svg>
      );
    case "curriculum":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
        </svg>
      );
  }
}

export function CustomIconButton(props: CustomIconButtonProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      tabIndex={-1}
      className={
        "flex flex-row justify-start items-center p-2 gap-0 hover-hover:hover:gap-2 duration-500 hover-hover:hover:scale-125 fill-black hover-hover:hover:fill-white bg-white hover-hover:hover:bg-black font-semibold rounded-xl text-[0] hover-hover:hover:text-sm hover-hover:hover:text-white text-black"
      }
    >
      {buttonSVGs(props.icon, props.size)}
      {props.icon == "source" && "Github"}
      {props.icon == "linkedin" && "LinkedIn"}
      {props.icon == "mail" && "E-mail"}
      {props.icon == "demo" && "Demo"}
      {props.icon == "curriculum" && "Currículo"}
    </a>
  );
}

// export function CustomIconDownloadButton(props: CustomIconDownloadButtonProps) {
//   return (
//     <a
//       href={props.link}
//       download={props.download}
//       className={
//         "flex flex-row justify-start items-center p-2 gap-0 hover-hover:hover:gap-2 duration-500 hover-hover:hover:scale-125 fill-black hover-hover:hover:fill-white bg-white hover-hover:hover:bg-black font-semibold rounded-xl text-[0] hover-hover:hover:text-sm hover-hover:hover:text-white text-black"
//       }
//     >
//       {buttonSVGs(props.icon, props.size)}
//       {props.icon == "source" && "Github"}
//       {props.icon == "linkedin" && "LinkedIn"}
//       {props.icon == "mail" && "E-mail"}
//       {props.icon == "demo" && "Demo"}
//       {props.icon == "curriculum" && "Currículo"}
//     </a>
//   );
// }
