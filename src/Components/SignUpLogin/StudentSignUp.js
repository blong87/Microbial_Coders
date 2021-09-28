import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "../../App";
import React from "react";
import SignUp from "./SignUp";


export default function StudentSignUp() {

    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="w-100">
            <Router>
                    <Switch>
                        <Route exact path = "/" component ={App}/>
                        <Route exact path="/signuplogin/signup" component={SignUp} />
                    </Switch>
            </Router>
        </div>
    )
}