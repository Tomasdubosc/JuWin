import React from 'react';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
const GamesPage: React.FC<{}> = (props) =>{
 
    return(
        <React.Fragment>
            <p>List of GAMES!</p>
            <Link to='new'>
            {<Button variant="contained">New Game! 
            </Button>
            }
            </Link>
            
        </React.Fragment>
    );
}

export default GamesPage;