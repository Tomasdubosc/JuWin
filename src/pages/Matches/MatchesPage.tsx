import React from 'react';
import NewMatchForm from '../../components/Matches/NewMatchForm';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
const MatchesPage: React.FC<{}> = (props) =>{
 
    return(
        <React.Fragment>
            <p> List of Matches!</p>
            <Link to='new'>
            {<Button variant="contained">New Match! 
            </Button>
            }
            </Link>
            
        </React.Fragment>
    );
}

export default MatchesPage