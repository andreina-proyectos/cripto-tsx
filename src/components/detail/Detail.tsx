import React from "react";
import PropTypes from "prop-types";
import CriptocurrencyData from "../../CriptocurrencyData";
import "./Detail.scss";

interface DetailProps {
  data: CriptocurrencyData[];
  criptoNameFromPath: string;
}

const getCriptoLogo = (symbolCurrency: string) => {
  const defaultCryptoLogo = "https://icon-library.net/images/logo-icon-png/logo-icon-png-11.jpg";
  let cryptoLogoImage: string;
  try {
    cryptoLogoImage = require(`../../assets/cryptocurrency-icons/svg/color/${symbolCurrency.toLowerCase()}.svg`);
  } catch (error) {
    cryptoLogoImage = defaultCryptoLogo;
  }
  return cryptoLogoImage;
};

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
  return (
    <div className="detail-wrapper">
      <img src={getCriptoLogo(criptoFound.symbol)} alt={criptoFound.name} className="cripto__image" />
      <h3 className="cripto__name">{criptoFound.name}</h3>
      <p className="cripto__detail-dolar-price">{`Price USD: ${criptoFound.price_usd} $`}</p>
      <p className="cripto__symbol">{criptoFound.symbol}</p>
      <p className="cripto__change-1h">{`Change(1h): ${criptoFound.percent_change_1h}`}</p>
      <p className="cripto__change-24h">{`Change(24h): ${criptoFound.percent_change_24h}`}</p>
      <p className="cripto__btc-price">{`${criptoFound.price_btc} btc`}</p>
      <p className="cripto__market-cap-usd">{`Market cap usd:${criptoFound.market_cap_usd} USD`}</p>
      <p className="cripto__available-supply">{`Available supply: ${criptoFound.available_supply} ${criptoFound.symbol}`}</p>
      <p className="cripto__total-supply">{`Total supply: ${criptoFound.total_supply} ${criptoFound.symbol}`}</p>
      <p className="cripto__max-supply">{`Max supply: ${criptoFound.max_supply} ${criptoFound.symbol}`}</p>
    </div>
  );
};

Detail.propTypes = {
  data: PropTypes.array.isRequired,
  criptoNameFromPath: PropTypes.string.isRequired,
};

export default Detail;
