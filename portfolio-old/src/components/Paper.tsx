import { ReactNode } from 'react';
import MaterialPaper from '@material-ui/core/Paper';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    border: '1px #333333',
  },
  padding: {
    padding: 20,
  },
  noBorder: {
    border: 'none',
  },
}));

export type PaperProps = {
  children: ReactNode;
  shadow?: boolean;
  noPadding?: boolean;
  className?: string;
};

const Paper = ({ shadow, noPadding, children, className }: PaperProps) => {
  const classes = useStyles();
  return (
    <MaterialPaper className={classnames(classes.main, !noPadding && classes.padding, shadow && classes.noBorder, className)} elevation={shadow ? 4 : 0}>
      {children}
    </MaterialPaper>
  );
};

export default Paper;