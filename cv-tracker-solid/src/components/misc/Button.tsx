import type { ParentProps } from "solid-js";

export type ButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = (props: ParentProps<ButtonProps>) => {
  return (
    <button
      class="rounded border-b-4 border-sky-800 bg-sky-900 py-2 px-4 font-bold text-white hover:border-sky-500 hover:bg-sky-400"
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
export default Button;
