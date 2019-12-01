import React from "react";
import PropTypes from "prop-types";
import "./Home.scss";
import CriptoList from "../cripto-list/CriptoList";
import CriptocurrencyData from "../../CriptocurrencyData";

interface HomeProps {
  data: CriptocurrencyData[];
  loading: boolean;
}

const Home: React.FC<HomeProps> = props => {
  const { data, loading } = props;
  return (
    <main className="app__main">
      <ul className="main__cripto-list">
        <CriptoList data={data} loading={loading} />
      </ul>
    </main>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
