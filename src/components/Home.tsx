import React from 'react';
import logo from './logo.svg';
import classes from '../styles/Home.module.css';
const Home: React.FC<{text:string}> = (props) =>{
    return(
    <div className={classes.App}>
    
    {props.text}

  </div>);
}

export default Home;