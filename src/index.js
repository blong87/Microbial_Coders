import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUp from "./Components/SignUp";
import StudentLogin from "./Components/StudentLogin";
import AdminLogin from "./Components/AdminLogin";
import AddForm from "./Components/AddForm";
import {AuthProvider} from "./contexts/AuthContext";


ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <AdminLogin />
        </AuthProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
