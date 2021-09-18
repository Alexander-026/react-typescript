import React, {  FunctionComponent } from "react";
import { BrowserRouter, Switch,  Route} from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { AboutUs } from "./pages/AboutUs";
import { Projects } from "./pages/Projects";






const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
          <Switch>
            <Route path='/' component={Projects} exact />
            <Route path='/about' component={AboutUs} />
          </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
