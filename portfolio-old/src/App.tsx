import React, { useEffect, useState } from 'react';
import { Repo, getYourPinned } from 'Github-GQLAPI/deno/main';
import Header from 'components/Header'
import RepositoryList from 'components/RepositoryList'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import About from 'components/About';


const useStyles = makeStyles(() => ({

  container: {
    padding: 60,
    '@media only screen and (max-width: 900px)':{
      padding: 20,
  },
  },
  clouds:{
    position: 'fixed',
    height: '100%',
    width: '100%',
    background: `url(/clouds1000.png) 0 200px, url(/clouds1000_blur3.png) 100px 250px`,
	animation: `$wind 60s linear infinite`,
    backgroundSize: 'cover',
    display:'inline-block',
},
'@keyframes wind':{
  '0%': {
    transform:'translateX(-100%)',
  },
  '100%' : {
    transform:'translateX(100%)',
  }
  },
'@keyframes windTiny':{
  '0%': {
    transform: 'translateX(0) translateZ(0) ',
  },
  '25%': {
    transform: 'translateX(0.2%) translateZ(0) ',
  },
  '50%': {
    transform: 'translateX(0%) translateZ(0) ',
  },
  },
  button:{
    marginTop: 10,
    marginLeft: 60,
    '@media only screen and (max-width: 900px)':{
      marginLeft: 0,
  },
  }
}));


const App = () => {
  const [repos, setRepos] = useState<Array<Repo>>([])
  const [showAbout , setShowAbout] = useState<Boolean>(false)
  const classes = useStyles();

  useEffect(() =>{
    getYourPinned(8, process.env.REACT_APP_GITHUB_TOKEN)
    .then(repos =>{
      setRepos(repos as Repo[])
    })
    .catch(err =>{
      console.log(err);
    })
  }, [])
  return (
    <>
    <div>
      <div className={classes.clouds}></div>
    </div>
    <div className={classes.container}>
    <Header headerText='Hermann Elton' subHeaderText='Computer science student at NTNU Trondheim'/>
    <Button onClick={() => setShowAbout(!showAbout)}className={classes.button} variant="contained">{showAbout ? 'Repositories' : 'About me'}</Button>
    {showAbout ? <About/> : <RepositoryList repositories={repos}/>}

    </div>
    </>
  );
}

export default App;
