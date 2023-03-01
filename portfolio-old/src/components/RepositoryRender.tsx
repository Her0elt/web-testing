import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Repo } from 'Github-GQLAPI/deno/main';
import Paper from 'components/Paper';
import IconButton from '@material-ui/core/IconButton';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

const useStyles = makeStyles(() => ({
  icon:{
    color: 'black'
  }
}));

export type RepositoryRenderProps = {
    repository : Repo;
    image? :React.ReactNode;

};

const RepositoryRender = ({ repository,image } : RepositoryRenderProps) => {
  console.log(repository)
  const classes = useStyles();
  return (
        <Paper shadow>
          <Typography>{repository.name}</Typography>
          <Typography>{repository.description}</Typography>
          <IconButton href={repository.url}>
            <FlightTakeoffIcon className={classes.icon} color='inherit'/>
          </IconButton>
        </Paper>

  );
};

export default RepositoryRender;
