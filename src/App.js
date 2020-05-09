import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import About from "./pages/About";
// import Chart from "./pages/charts";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/guides" component={Guides} />
            <Route path="/about" component={About} />
            {/* <Route path="/chart" component={Chart} /> */}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
