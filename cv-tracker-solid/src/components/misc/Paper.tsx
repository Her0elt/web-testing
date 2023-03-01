import type { ParentProps } from "solid-js";

export type PaperProps = {
  onClick?: () => void;
};

const Paper = (props: ParentProps<PaperProps>) => {
  if (props.onClick) {
    return (
      <button
        onClick={props.onClick}
        class="grid grid-cols-1 place-items-start gap-6 rounded-lg bg-secondary p-8  shadow-2xl xl:p-16"
      >
        {props.children}
      </button>
    );
  }
  return (
    <div class="grid grid-cols-1 place-items-start gap-6 rounded-lg bg-secondary p-8  shadow-2xl xl:p-16">
      {props.children}
    </div>
  );
};

export default Paper;
