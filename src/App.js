import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import { Provider } from 'react-redux';
import store from './Store/store'
import SearchComponent from './components/search'
import ShowCards from './components/showCards'
import searchShowCards from './components/searchShowCards'
import navComponent from './components/navComponent'
import newComponent from './components/newComponent';

function App() {
  return (
    <Provider store={store}>
      {/* <SearchComponent></SearchComponent> */}
      {/* <ShowCards></ShowCards> */}
      {/* <Login></Login> */}
      {/* <SearchShowCards></SearchShowCards> */}


      <Router>
        <div className="App">
          {/* <navComponent/> */}
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ position: "sticky" }}>
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>Weather.App</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/0/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/0/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            {/* <div className="auth-wrapper" >
            <div className="auth-inner" > */}
            {/* <Switch> */}

            <Route path='/0' component={newComponent} />
            {/* </Switch> */}
            {/* <Route path="/sign-in" component={Login} />
                 <Route path="/sign-up" component={SignUp} /> */}
            <Route path="/newComponent" component={newComponent} />
            <Route path="/search" component={SearchComponent} />
            <Route path="/show-cards" component={ShowCards} />
            <Route path="/searchShowCards" component={searchShowCards} />
            {/* </div>
           </div> */}
          </Switch>
          <Redirect to="/0"></Redirect>
        </div>
      </Router>
    </Provider>
  );
}

export default App;