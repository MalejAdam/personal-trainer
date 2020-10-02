import React, { Component } from "react";
import Header from "./components/header/header.component";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      trainers: [
        {
          name: "Jan",
          surname: "KowalskiTest",
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
        <CardList trainers={this.state.trainers}></CardList>
      </div>
    );
  }
}

export default App;
