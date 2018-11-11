import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemList from './ItemList';
import SingleItem from './SingleItem';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Application Pokémon avec Redux</h2>
        <Switch>
          <Route exact path='/' component={ItemList} />
          <Route path='/pokemon/:id' component={SingleItem} />
        </Switch>
      </div>
    );
  }
}

export default App;
