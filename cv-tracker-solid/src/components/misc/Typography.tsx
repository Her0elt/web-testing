import type { ParentProps } from "solid-js";
import { twMerge } from "tailwind-merge";

export type TypographyProps = {
  style?: string;
};

const Typography = (props: ParentProps<TypographyProps>) => {
  const className = twMerge(props.style, "bg-secondary");
  return <h3 class={className}>{props.children}</h3>;
};

export default Typography;
