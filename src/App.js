import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

require('dotenv').config()

function App() {
  const user = null

return (
  <div className="App">
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
      </Switch>
      )}
    </Router>
  </div>
  );
}

export default App;