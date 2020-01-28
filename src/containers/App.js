import React,{ Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { users } from '../database/users-big';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

/* ============================================================= */

/* to call users from remote small database */

/*
    componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }))
  }
*/

/* to call users from local database */


  componentDidMount() {
    this.setState({ robots: users })
  }


/* to call users from remote big database */
/* 
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/A-ElNawawy/db')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }))
  }
*/
/* ============================================================= */

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.NameEn.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if ( this.state.robots.length === 0 ) {
      return(
        <div>
          <h1>Loading</h1>
        </div>
      );

    }else {
      return(
        <div id="app">
          <h1>RoboFriends-Sass</h1>
          <SearchBox onTyping= { this.onSearchChange } />
          <CardList robots= { filteredRobots } />
        </div>
      );
    }
  }
}

export default App;


/* 
const App = () => {
  return(
    <div id="app">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={ robots } />
    </div>
  );
}
 */