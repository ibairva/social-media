import React from 'react';
import "./App.css";
import ProfilePage from './pages/ProfilePage';
import FeedPage from './pages/FeedPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <>
    <Router basename="/social-media">
    <GlobalStyle/>
    <Switch>
    <Route path="/" exact component={ProfilePage} />
    <Route path="/profile" component={ProfilePage} />
    <Route path="/feed" component={FeedPage} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
