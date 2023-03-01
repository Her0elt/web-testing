import Paper from 'components/Paper';
import {ABOUT_ME_TEXT} from 'texts';
import { makeStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  main :{
    marginLeft: 60,
    '@media only screen and (max-width: 900px)':{
      marginLeft: 0,
      marginTop: 30,
    },
    },
    text:{
        padding: 28,
        fontSize: 25,
        whiteSpace: 'pre-line',
        '@media only screen and (max-width: 900px)':{
          padding: 10,
          fontSize: 18,
      },
  },
}));



const About = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.main} shadow>
        <Typography variant='body1' className={classes.text}>
            {ABOUT_ME_TEXT}
        </Typography>
    </Paper>
  );
};

export default About;