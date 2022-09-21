import Register from "./page/Register";
import Home from "./page/Home";
import Login from "./page/Login";
import Watch from "./page/Watch";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/context";

export default function App() {
  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/movies">
          {user ? <Home type="movies" /> : <Login />}
        </Route>
        <Route path="/series">
          {user ? <Home type="series" /> : <Login />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        <Route path="/watch">
          {user ? <Watch /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
