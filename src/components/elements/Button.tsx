interface Props {
  text: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant?: "red" | "blue" | "white" | "dark";
  rounded?: boolean;
}

export const Button = (props: Props) => {
  let color = "";
  switch (props.variant) {
    case "red":
      color = "bg-bittersweet text-white";
      break;
    case "blue":
      color = "bg-cerulean text-white";
      break;
    case "white":
      color = "bg-white text-black";
      break;
    case "dark":
      color = "bg-dark-bg text-white";
    default:
      color = "bg-brand-purple text-white";
  }
  return (
    <button
      className={`w-full py-3 text-lg ${color} transition-all hover:brightness-90 ${
        props.rounded ? "rounded-full" : "rounded-sm"
      }`}
      type={props.type}
    >
      {props.text}
    </button>
  );
};
