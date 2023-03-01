import { Education } from "~/types";

import Modal from "~/components/misc/Modal";
import SubmitButton from "~/components/misc/SubmitButton";
import { createRouteAction } from "solid-start";

import { mutateEducation } from "~/routes/api/education";

export type EducationFormProps = {
  education: () => Education | null;
  open: () => boolean;
  onClose: () => void;
};

const EducationForm = (props: EducationFormProps) => {
  const [_, educationData] = createRouteAction(async (form: FormData) => {
    const data: Education = {
      id: props.education()?.id,
      title: form.get("title") as string,
      school: form.get("school") as string,
      from: form.get("from") as string,
      to: form.get("to") as string,
    };
    await mutateEducation(data);
    props.onClose();
  });

  return (
    <educationData.Form>
      <Modal
        actionBtn={<SubmitButton />}
        onClose={props.onClose}
        open={props.open}
      >
        <div class="mb-6 grid grid-cols-1 gap-4 bg-secondary p-0 xl:p-4">
          <div class="w-full">
            <label class="mb-2 italic" for="company">
              Company
            </label>
            <input
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={props.education()?.title || ""}
              id="title"
              name="title"
              required
              type="text"
            />
          </div>
          <div class="w-full">
            <label class="mb-2 italic" for="title">
              Title
            </label>
            <input
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={props.education()?.school || ""}
              id="school"
              name="school"
              required
              type="text"
            />
          </div>
          <div class="grid w-full gap-2 lg:grid-cols-1 xl:grid-cols-2">
            <div>
              <label class="mb-2 italic" for="from">
                From
              </label>
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={props.education()?.from || ""}
                id="from"
                name="from"
                required
                type="text"
              />
            </div>
            <div>
              <label class="mb-2 italic" for="company">
                To
              </label>
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={props.education()?.to || ""}
                id="to"
                name="to"
                required
                type="text"
              />
            </div>
          </div>
        </div>
      </Modal>
    </educationData.Form>
  );
};

export default EducationForm;
