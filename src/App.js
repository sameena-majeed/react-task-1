import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="mainPage">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
