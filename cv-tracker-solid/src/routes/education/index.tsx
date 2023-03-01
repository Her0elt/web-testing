import { Education } from "~/types";
import { batch, createSignal, For } from "solid-js";

import { useRouteData, createRouteData } from "solid-start";

import EducationCard from "~/page-components/education/EducationCard";
import EducationForm from "~/page-components/education/EducationForm";
import { allEducations } from "~/routes/api/education";

import HoverButton from "~/components/misc/HoverButton";

export const routeData = () => {
  return createRouteData(allEducations);
};

const EducationPage = () => {
  const educations = useRouteData<typeof routeData>();
  const [open, setOpen] = createSignal(false);
  const [education, setEducation] = createSignal<Education | null>(null);
  return (
    <>
      <div class="m-4 grid grid-cols-1 gap-8 xl:m-20 xl:grid-cols-2">
        <h1 class="col-span-full mt-0 mb-0 place-self-center text-3xl font-medium leading-tight xl:text-5xl">
          Education
        </h1>
        <For each={educations()}>
          {(edu) => (
            <EducationCard
              education={edu}
              onClick={() =>
                batch(() => {
                  setOpen(true);
                  setEducation(edu);
                })
              }
            />
          )}
        </For>

        <EducationForm
          education={education}
          onClose={() => setOpen(false)}
          open={open}
        />
      </div>
      <HoverButton
        onClick={() => {
          setOpen(true);
          setEducation(null);
        }}
      >
        +
      </HoverButton>
    </>
  );
};

export default EducationPage;
