
import { BrowserRouter, Route } from "react-router-dom";

import Signin from './components/SignIn/SignIn';
//import Create from './components/Сreate/Create';
import Main from "./components/main/Main";
import HabitTableContainer from "./components/habitTable/HabitTableContainer";




function App(props) {

  console.log('p', props)
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/signin' component={Signin} />
        <Route path='/table' render={() => <HabitTableContainer store={props.store} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
