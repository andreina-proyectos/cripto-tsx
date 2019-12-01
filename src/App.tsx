import React, { useState, useEffect } from "react";
import "./App.css";
import CriptoList from "./components/cripto-list/CriptoList";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  const criptoApi = "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=100";
  const fetchCriptoData = () => {
    fetch(criptoApi)
      .then(response => response.json())
      .then(criptoData => {
        setData(criptoData);
        console.log(criptoData);
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
      <main className="app__main">
        <ul className="main__cripto-list">
          <CriptoList data={data} />
        </ul>
      </main>
    </div>
  );
};

export default App;
