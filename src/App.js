import React from "react";
import './App.css';
import './index.css';
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";

function App() {
  return (


     <div className="App">
     <Header/>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/contact" component={ContactUs} />
    </Switch>

      {/* <div>
      <Dashboard/>
      <LoginPage/>
      <ContactUs/>
      </div> */}
      
    </div> 
  );
}

export default App;
