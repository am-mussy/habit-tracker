
import { BrowserRouter, Route } from "react-router-dom";

import Signin from './components/SignIn/SignIn';
//import Create from './components/Сreate/Create';
import Main from "./components/main/Main";
import HabitTable from "./components/habitTable/HabitTable";




function App(props) {

  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/signin' component={Signin} />
        {/* <Route path='/create' component={Create} /> */}
        <Route path='/table' render={() => <HabitTable state={props.state} addHabit={props.addHabit} changeCheckBox={props.changeCheckBox} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
