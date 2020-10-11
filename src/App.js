import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from "./components/header/header.component";
import { CardList } from "./components/card-list/card-list.component";
import {Home} from './components/home/home.component'
import "./App.css";
import { Trainers } from "./components/trainers/trainers.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      trainers: [
        {
          name: "Jan",
          surname: "Kowalski",
          id: "1",
          imageUrl:
            "https://activelife.org.pl/wp-content/uploads/2017/08/02-1-180x180.jpg",
        },
        {
          name: "Natalia",
          surname: "Malinowska",
          id: "2",
          imageUrl:
            "https://activelife.org.pl/wp-content/uploads/2017/08/02-1-180x180.jpg",
        },
        {
          name: "Patryk",
          surname: "Kwiatkowski",
          id: "3",
          imageUrl:
            "https://activelife.org.pl/wp-content/uploads/2017/08/02-1-180x180.jpg",
        },
        {
          name: "Damian",
          surname: "Nowytrener",
          id: "4",
          imageUrl:
            "https://activelife.org.pl/wp-content/uploads/2017/08/02-1-180x180.jpg",
        },
        {
          name: "Damian",
          surname: "Nowytrener",
          id: "5",
          imageUrl:
            "https://activelife.org.pl/wp-content/uploads/2017/08/02-1-180x180.jpg",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trenerzy" component={Trainers} />
        </Switch>
      </div>
    );
  }
}

export default App;
