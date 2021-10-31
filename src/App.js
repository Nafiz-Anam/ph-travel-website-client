import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContexts from "./Firebase/Contexts/AuthContexts";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Hotels from "./Pages/Hotels/Hotels";
import Admin from "./Pages/Admin/Admin";
import Single from "./Pages/Single/Single";
import Booking from "./Pages/Booking/Booking";
import Notfound from "./Pages/404/Notfound";

function App() {
    return (
        <div className="App">
            <AuthContexts>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>

                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        {/* Private Route here  */}
                        <PrivateRoute exact path="/profile">
                            <Profile />
                        </PrivateRoute>
                        <PrivateRoute exact path="/admin">
                            <Admin />
                        </PrivateRoute>
                        <PrivateRoute exact path="/hotels">
                            <Hotels />
                        </PrivateRoute>
                        <PrivateRoute exact path="/booking">
                            <Booking />
                        </PrivateRoute>
                        <PrivateRoute exact path="/hotels/:id">
                            <Single />
                        </PrivateRoute>
                        {/* error page  */}
                        <Route path="/*">
                            <Notfound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthContexts>
        </div>
    );
}

export default App;
