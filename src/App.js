import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import { createContext, useState } from 'react';
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Book from "./components/Dashboard/Book/Book";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import AllBookedList from "./components/Dashboard/AllBookedList/AllBookedList";
import AddService from "./components/Dashboard/AddService/AddService";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Dashboard/ManageServices/ManageServices";
import Login from "./components/Login/Login/Login"
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    < UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      {/* <p>name: {loggedInUser.name}</p> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route path="/addReview">
            <AddReview />
          </Route>
          <Route path="/bookedList">
            <AllBookedList />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/manageService">
            <ManageServices />
          </Route>

          <PrivateRoute path="/admin">
            <Dashboard />
          </PrivateRoute>


          {/* <Route path="/admin">
            <Dashboard />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/service/:id">
            <Book />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider >

  );
}

export default App;
