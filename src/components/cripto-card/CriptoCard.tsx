import React from "react";
import PropTypes from "prop-types";
import CriptocurrencyData from "../../CriptocurrencyData";
import "./CriptoCard.scss";
import { usePalette } from "react-palette";

interface CardProps {
  cripto: CriptocurrencyData;
}

const CriptoCard: React.FC<CardProps> = props => {
  const { cripto } = props;

  const getCriptoLogo = (symbolCurrency: string) => {
    const defaultCryptoLogo =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Circle-icons-rocket.svg/600px-Circle-icons-rocket.svg.png";
    let cryptoLogoImage: string;
    try {
      cryptoLogoImage = require(`../../assets/cryptocurrency-icons/svg/color/${symbolCurrency.toLowerCase()}.svg`);
    } catch (error) {
      cryptoLogoImage = defaultCryptoLogo;
    }
    return cryptoLogoImage;
  };

  const { data } = usePalette(getCriptoLogo(cripto.symbol));

  return (
    <React.Fragment>
      <img src={getCriptoLogo(cripto.symbol)} alt={cripto.name} className="cripto__image" />
      <div style={{ backgroundColor: data.vibrant }} className="card__info-wrapper">
        <h3 className="cripto__name">{cripto.name}</h3>
        <p className="cripto__dolar-price">{`Price USD: ${cripto.price_usd}`}</p>
        <p className="cripto__symbol">{cripto.symbol}</p>
        <p className="cripto__change-1h">{`Change(1h): ${cripto.percent_change_1h}`}</p>
        <p className="cripto__change-24h">{`Change(24h): ${cripto.percent_change_24h}`}</p>
        <p className="cripto__btc-price">{`${cripto.price_btc} btc`}</p>
      </div>
    </React.Fragment>
  );
};

CriptoCard.propTypes = {
  cripto: PropTypes.any.isRequired,
};

export default CriptoCard;
