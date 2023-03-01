import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import { Github, LinkedIn, PDF } from 'urls'

const useStyles = makeStyles(() => ({
  icon:{
    color: 'black',
  },
    container:{
        marginTop: 120,
        marginLeft: 60,
        '@media only screen and (max-width: 900px)':{
          marginLeft: 0,
      },
    },
    header:{
        fontSize: 90,
        color:'white',
        '@media only screen and (max-width: 900px)':{
          marginLeft: 0,
          fontSize: 45,
      },
        
      },
    subHeader:{
        fontSize: 40,
        color:'white',
        '@media only screen and (max-width: 900px)':{
          fontSize: 30,
      },
      },
}));

export type HeaderProps = {
    headerText: string;
    subHeaderText: string;

};

const Header = ({ headerText, subHeaderText } : HeaderProps) => {
  const classes = useStyles();
  return (
      <div className={classes.container}>
        <Typography className={classes.header}>{headerText}</Typography>
        <Typography className={classes.subHeader}>{subHeaderText}</Typography>
        <IconButton href={Github}>
            <GitHubIcon className={classes.icon} color='inherit'/>
          </IconButton>
        <IconButton href={LinkedIn}>
            <LinkedInIcon className={classes.icon} color='inherit'/>
          </IconButton>
        <IconButton href={PDF} target="_blank">
            <InsertDriveFile className={classes.icon} color='inherit'/>
          </IconButton>
      </div>

    
  );
};

export default Header;