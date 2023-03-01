import type { ParentProps } from "solid-js";

export type HoverButtonProps = {
  onClick: () => void;
};

const HoverButton = (props: ParentProps<HoverButtonProps>) => {
  return (
    <button
      class="fixed bottom-4 right-2 rounded-full border-b-4 border-sky-800 bg-sky-900 py-2 px-4 text-3xl font-bold text-white hover:border-blue-500 hover:bg-blue-400 xl:bottom-12 xl:right-4 xl:text-8xl"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default HoverButton;
