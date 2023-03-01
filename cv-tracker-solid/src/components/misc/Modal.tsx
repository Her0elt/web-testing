import type { ParentProps, JSX } from "solid-js";
import { Show } from "solid-js";

export type ModalProps = {
  open: () => boolean;
  onClose: () => void;
  actionBtn: JSX.Element;
};

const Modal = (props: ParentProps<ModalProps>) => {
  if (!props.open) {
    return <></>;
  }

  return (
    <Show when={props.open()}>
      <div class=" fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-inherit outline-none focus:outline-none">
        <div class="relative my-6 mx-auto w-auto max-w-3xl">
          <div class="relative flex w-full flex-col rounded-lg border-0  bg-secondary p-8 shadow-lg outline-none focus:outline-none">
            {props.children}
            <div class="grid grid-cols-1 place-content-center justify-items-center gap-4 bg-secondary  xl:grid-cols-2">
              {props.actionBtn}
              <button
                class="inline-block w-full rounded bg-red-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg xl:w-3/5"
                onClick={props.onClose}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Modal;
