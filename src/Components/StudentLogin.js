import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./Dashboard.js"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import App from "../App"
import DeleteForm from "./DeleteForm";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";

export default function StudentLogin() {

    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="w-100">
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact path = "/" component ={App}/>
                        <Route exact path="/login" component={Login} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                    </Switch>
                </AuthProvider>
            </Router>
        </div>
    )
}