import React from "react";
import PropTypes from "prop-types";
import CriptocurrencyData from "../../CriptocurrencyData";
import "./CriptoList.scss";
import { Card } from "antd";
import { Link } from "react-router-dom";

interface ListProps {
  data: CriptocurrencyData[];
  loading: boolean;
}

const CriptoList: React.FC<ListProps> = props => {
  const { data, loading } = props;
  const getCriptoLogo = (symbolCurrency: string) => {
    const defaultCryptoLogo =
      "http://www.myiconfinder.com/uploads/iconsets/ad922adbaf0350613b28cec297798d40-loading.png";
    let cryptoLogoImage: string;
    try {
      cryptoLogoImage = require(`../../assets/cryptocurrency-icons/svg/color/${symbolCurrency.toLowerCase()}.svg`);
    } catch (error) {
      cryptoLogoImage = defaultCryptoLogo;
    }
    return cryptoLogoImage;
  };

  return (
    <React.Fragment>
      {data.map((cripto: CriptocurrencyData) => {
        return (
          <li key={cripto.id} className="cripto-list__cripto">
            <Link to={`/detail/${cripto.id}`} className="cripto__detail-link">
              <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
                <img src={getCriptoLogo(cripto.symbol)} alt={cripto.name} className="cripto__image" />
                <h3 className="cripto__name">{cripto.name}</h3>
                <p className="cripto__dolar-price">{`Price USD: ${cripto.price_usd}`}</p>
                <p className="cripto__symbol">{cripto.symbol}</p>
                <p className="cripto__change-1h">{`Change(1h): ${cripto.percent_change_1h}`}</p>
                <p className="cripto__change-24h">{`Change(24h): ${cripto.percent_change_24h}`}</p>
                <p className="cripto__btc-price">{`${cripto.price_btc} btc`}</p>
              </Card>
            </Link>
          </li>
        );
      })}
    </React.Fragment>
  );
};

CriptoList.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CriptoList;
