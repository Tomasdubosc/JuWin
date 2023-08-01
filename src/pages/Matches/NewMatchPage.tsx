import NewMatchForm from "../../components/Matches/NewMatchForm";
import {ActionFunction, redirect} from 'react-router-dom'

const NewMatchPage: React.FC<{}> = (props) =>{
    return(
    <NewMatchForm></NewMatchForm>);
}

export default NewMatchPage;

export const NewMatchAction : ActionFunction =async ({ request }) => {
    console.log('entro')
    const form = await request.formData();
  
    const data= {
        game: form.get('game'),
        winner: form.get('winner'),
        looser: form.get('looser')
    }
  
    console.log(data)
    try {
        await fetch("https://react-739e0-default-rtdb.firebaseio.com/match.json", {
          method: "POST",
          body: JSON.stringify(data),
        });
      } catch (err) {
        console.error(`[ACTION ERROR]: ${err}`);
      }
      console.log('paso')
    
      return redirect("/matches");
    }
  