import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login.component";
import SignUp from "./signup.component";

export default class newComponent extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <>
                {/* <Router> */}
                    {/* <Switch> */}
                        <div className="auth-wrapper" >
                            <div className="auth-inner" >

                                <Route exact path='/0' component={Login} />
                                <Route path="/0/sign-in" component={Login} />
                                <Route path="/0/sign-up" component={SignUp} />
                                {/*                
                <Route path="/search" component={SearchComponent} />
                <Route path="/show-cards" component={ShowCards} />
                <Route path="/searchShowCards" component={searchShowCards} /> */}

                            </div>
                        </div>
                    {/* </Switch> */}
                {/* </Router> */}
            </>
        )
    }
}