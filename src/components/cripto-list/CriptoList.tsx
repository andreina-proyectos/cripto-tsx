import React from "react";
import PropTypes from "prop-types";
import CriptocurrencyData from "../../CriptocurrencyData";

interface ListProps {
  data: CriptocurrencyData[];
}

const CriptoList: React.FC<ListProps> = props => {
  const { data } = props;
  return (
    <React.Fragment>
      {data.map((cripto: CriptocurrencyData) => {
        return (
          <li key={cripto.id} className="cripto-list__cripto">
            <h3 className="cripto__name">{cripto.name}</h3>
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
