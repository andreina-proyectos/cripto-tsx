import React from "react";
import PropTypes from "prop-types";
import CriptocurrencyData from "../../CriptocurrencyData";
import { Card } from "antd";

interface ListProps {
  data: CriptocurrencyData[];
  loading: boolean;
}

const CriptoList: React.FC<ListProps> = props => {
  const { data, loading } = props;
  return (
    <React.Fragment>
      {data.map((cripto: CriptocurrencyData) => {
        return (
          <li key={cripto.id} className="cripto-list__cripto">
            <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
              <h3 className="cripto__name">{cripto.name}</h3>
              <p className="cripto__dolar-price">{`Price USD: ${cripto.price_usd}`}</p>
              <p className="cripto__symbol">{cripto.symbol}</p>
              <p className="cripto__change-1h">{`Change(1h): ${cripto.percent_change_1h}`}</p>
              <p className="cripto__change-24h">{`Change(24h): ${cripto.percent_change_24h}`}</p>
              <p className="cripto__btc-price">{`${cripto.price_btc} btc`}</p>
            </Card>
          </li>
        );
      })}
    </React.Fragment>
  );
};

CriptoList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CriptoList;
