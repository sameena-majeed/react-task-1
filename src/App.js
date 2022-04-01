import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <>
            <Router>
                <NavBar />

                 <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />   
                    <Route exact path="/register" component={Register} />       
                </Switch> 
            </Router>
        </>
    );
}

export default App;
