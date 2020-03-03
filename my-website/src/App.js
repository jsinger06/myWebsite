import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import ResumePage from './pages/Resume/ResumePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div id="page-body">
                        <Switch>
                            <Redirect exact from="/" to="/resume" />
                            <Route path="/resume" component={ResumePage}  />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
