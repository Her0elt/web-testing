import type { Component } from "solid-js";

const SubmitButton: Component = () => {
  return (
    <button
      class="inline-block w-full  rounded bg-sky-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-600 active:shadow-lg xl:w-3/5"
      type="submit"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
