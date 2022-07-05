
import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom";
import Checkout from './checkout';
import Login from './Login';
import { auth } from './Firebase';
import {useStateValue} from "./Stateprovider";
import Payment from './payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51KWPKCSHHtnpXhv5JWTYXf1NdygG1EkytMwksw8DL6bW3H3BYv2InsKP5iMuC90ZHyUzdqlNyqJC2k7WEA6Eko0C00XCScZtwp");

function App() {
    const [{}, dispatch]=useStateValue();
    useEffect(()=>{
        //will only run once if app components load..
        auth.onAuthStateChanged(authUser => {
            console.log('User is >>',authUser);
            if(authUser) {
                //user was logged in or user just logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            
            }
            else {
                //user is logged out
                dispatch({
                type: 'SET_USER',
                user: null
            })
            }
        })
    },[])
    return ( 
        <Router>
         
            <div className = "app" >
          
            <Switch>
            <Route path="/Login">
                <Login />
    
        </Route>
        <Route path="/checkout">
        <Header />
    <Checkout />
        </Route>
        <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
    <Payment />
    </Elements>
        </Route>
        <Route path="/">
        <Header />
        <Home />
        </Route>
      </Switch>
        </div>
        </Router>
    );
}

export default App;