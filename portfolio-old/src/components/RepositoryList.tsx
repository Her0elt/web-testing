import { Repo } from 'Github-GQLAPI/deno/main';
import RepositoryRender from 'components/RepositoryRender'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  
    pinnContainter: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: 10,
        padding: 60,
        animation: `$windTiny 6s linear infinite`,
        '@media only screen and (max-width: 1200px)':{
          gridTemplateColumns: '1fr',
          padding: '30px 0px 0px 0px',
        },
    }
  }));  

export type RepositoryListProps = {
    repositories : Array<Repo>;
}
const RepositoryList = ({ repositories } : RepositoryListProps) => {
    const classes = useStyles();
  return (
    
    <div className={classes.pinnContainter}>
      {repositories && repositories.map((repo) =>(
        <RepositoryRender key={repo.name} repository={repo}/>
      ))}
    </div>


  );
}

export default RepositoryList;