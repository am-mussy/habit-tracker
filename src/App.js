
import { BrowserRouter, Route } from "react-router-dom";

import Signin from './components/signIn/SignIn';
import Create from './components/create/Create';
import Main from "./components/main/Main";
import HabitTable from "./components/habitTable/HabitTable";


function App() {

  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/signin' component={Signin} />
        <Route path='/create' component={Create} />
        <Route path='/table' component={HabitTable} />
      </div>
    </BrowserRouter>
  );
}

export default App;
