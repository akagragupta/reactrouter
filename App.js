import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);


function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Route component={About} />
                <Switch>
                    {/* <About />
                    <Shop /> */}
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}


export default App;
