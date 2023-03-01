import { Education } from "~/types";

import Paper from "~/components/misc/Paper";
import Typography from "~/components/misc/Typography";

export type EducationCardCardProps = {
  education: Education;
  onClick: () => void;
};

const EducationCard = (props: EducationCardCardProps) => {
  return (
    <Paper onClick={props.onClick}>
      <Typography style="mt-0 mb-2 text-xl font-medium leading-tight xl:text-4xl">
        <code>{props.education.title}</code>
      </Typography>
      <Typography style="text-md mt-0 mb-0 font-medium xl:text-2xl">
        <code>{props.education.school}</code>
      </Typography>
      <Typography style="text-md mt-0 mb-0 font-medium xl:text-2xl">
        <code>
          {props.education.from} - {props.education.to}
        </code>
      </Typography>
    </Paper>
  );
};

export default EducationCard;
