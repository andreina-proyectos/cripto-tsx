import React from "react";
import PropTypes from "prop-types";
import CriptocurrencyData from "../../CriptocurrencyData";

interface DetailProps {
  data: CriptocurrencyData[];
  criptoNameFromPath: string;
}

const Detail: React.FC<DetailProps> = props => {
  const { data, criptoNameFromPath } = props;
  let criptoFound = data.find(cripto => cripto.id === criptoNameFromPath);
  if (!criptoFound) {
    criptoFound = {
      "24h_volume_usd": "",
      available_supply: "",
      id: "",
      last_updated: "",
      market_cap_usd: "",
      max_supply: "",
      name: "",
      percent_change_1h: "",
      percent_change_7d: "",
      percent_change_24h: "",
      price_btc: "",
      price_usd: "",
      rank: "",
      symbol: "",
      total_supply: "",
    };
  }
  console.log(criptoFound);
  console.log(criptoNameFromPath);
  return (
    <div className="detail-wrapper">
      <h3 className="cripto__name">{criptoFound.name}</h3>
      <p className="cripto__dolar-price">{`Price USD: ${criptoFound.price_usd}`}</p>
      <p className="cripto__symbol">{criptoFound.symbol}</p>
      <p className="cripto__change-1h">{`Change(1h): ${criptoFound.percent_change_1h}`}</p>
      <p className="cripto__change-24h">{`Change(24h): ${criptoFound.percent_change_24h}`}</p>
      <p className="cripto__btc-price">{`${criptoFound.price_btc} btc`}</p>
    </div>
  );
};

Detail.propTypes = {
  data: PropTypes.array.isRequired,
  criptoNameFromPath: PropTypes.string.isRequired,
};

export default Detail;
