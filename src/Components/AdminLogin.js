import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard.js";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App";
import DeleteForm from "./DeleteForm";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import Signup from "./Signup";
import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";

export default function AdminLogin() {
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="w-100">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={App} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route exact path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/add-form" component={AddForm} />
            <Route path="/delete-form" component={DeleteForm} />
            <Route path="/update-form" component={UpdateForm} />
            <Route path="/signup" component={Signup} />
            <Route path="/userLogin" component={UserLogin} />
            <Route path="/userProfile" component={UserProfile} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}
