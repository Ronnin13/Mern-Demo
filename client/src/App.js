import "./App.css";
import React from "react";
import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Alert from "./Components/Layout/Alert";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./Components/Routing/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import CreateProfile from "./Components/ProfileForm/CreateProfile";
import UpdateProfile from "./Components/ProfileForm/UpdateProfile";

// redux imports
import { Provider } from "react-redux";
import store from "./store";
import LoadingSpinner from "./Components/Layout/LoadingSpinner";
import get from "lodash/get";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    React.useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <LoadingSpinner />
            <Router>
                <React.Fragment className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing}></Route>
                    <section className="container">
                        <Alert />
                        <Switch>
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            />
                            <Route exact path="/login" component={Login} />
                            <PrivateRoute
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                            <PrivateRoute
                                exact
                                path="/create-profile"
                                component={CreateProfile}
                            />
                            <PrivateRoute
                                exact
                                path="/edit-profile"
                                component={UpdateProfile}
                            />
                        </Switch>
                    </section>
                </React.Fragment>
            </Router>
        </Provider>
    );
}

export default App;
