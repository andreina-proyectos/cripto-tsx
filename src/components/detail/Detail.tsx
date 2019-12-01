import React from "react";
import PropTypes from "prop-types";
import CriptocurrencyData from "../../CriptocurrencyData";

interface DetailProps {
  data: CriptocurrencyData[];
}

const Detail: React.FC<DetailProps> = props => {
  const { data } = props;
  return (
    <p>hola</p>
  );
};

Detail.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Detail;
