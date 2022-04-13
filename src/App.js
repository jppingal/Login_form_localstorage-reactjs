import React from "react";
import './App.css';
import './index.css';
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import UserDetails from "./UserDetails";

function App() {
  return (


     <div className="App">
     <Header/>
     <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <Route  path="/users" component={UserDetails} />
        <Route path="/contact" component={ContactUs} />
    </Switch>

      {/* <div>
      <Dashboard/>
      <LoginPage/>
      <ContactUs/>
      <UserDetails/>
      
      </div> */}
      
    </div> 
  );
}

export default App;
