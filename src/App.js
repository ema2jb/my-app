import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//styles
import {GlobalStyle} from './globalStyle.js';
import Header from './components/Header/header'
import Home from './components/Home' 
import Movie from './components/Movie'
import NotFound from './components/NotFound'


const App =()=> (
    <Router>
      <Header />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:movieId' component={Movie} />
          <Route exact path='/*' component={NotFound} />
      </Switch>
      <GlobalStyle />
    </Router>
  );


export default App;
