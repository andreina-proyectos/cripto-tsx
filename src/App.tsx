import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import {Switch, Route} from "react-router-dom";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const criptoApi = "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=100";
  const fetchCriptoData = () => {
    fetch(criptoApi)
      .then(response => response.json())
      .then(criptoData => {
        setData(criptoData);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCriptoData();
  }, []);

  return (
    <div className="App">
      <header className="App__header">
        <h1 className="header__title">Criptocurrencies prices</h1>
      </header>
      <Switch>
          <Route exact path="/"
            render={() => {
              return(
                <Home 
                  data={data}
                  loading={loading}
                />
              )
            }}
          />

          <Route path="/detail/:name" render={(routerProps)=> {
            return(
              <Detail
              data={data}
              />
            )
          }} 
          />
        </Switch>
    </div>
  );
};

export default App;
