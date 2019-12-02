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
    const defaultCryptoLogo = "https://icon-library.net/images/logo-icon-png/logo-icon-png-11.jpg";
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
      <div style={{ color: data.vibrant }}>Text with the vibrant color</div>
      <img src={getCriptoLogo(cripto.symbol)} alt={cripto.name} className="cripto__image" />
      <h3 className="cripto__name">{cripto.name}</h3>
      <p className="cripto__dolar-price">{`Price USD: ${cripto.price_usd}`}</p>
      <p className="cripto__symbol">{cripto.symbol}</p>
      <p className="cripto__change-1h">{`Change(1h): ${cripto.percent_change_1h}`}</p>
      <p className="cripto__change-24h">{`Change(24h): ${cripto.percent_change_24h}`}</p>
      <p className="cripto__btc-price">{`${cripto.price_btc} btc`}</p>
    </React.Fragment>
  );
};

CriptoCard.propTypes = {
  cripto: PropTypes.any.isRequired,
};

export default CriptoCard;
