
import { BrowserRouter, Route } from "react-router-dom";

import Signin from './components/SignIn/SignIn';
import Create from './components/Create/Create';
import Main from "./components/main/Main";


function App() {

  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/signin' component={Signin} />
        <Route path='/create' component={Create} />
      </div>
    </BrowserRouter>
  );
}

export default App;
