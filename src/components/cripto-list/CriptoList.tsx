import React from "react";
import PropTypes from "prop-types";
import CriptocurrencyData from "../../CriptocurrencyData";
import "./CriptoList.scss";
import { Card } from "antd";
import { Link } from "react-router-dom";
import CriptoCard from "../card-info/CriptoCard";

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
            <Link to={`/detail/${cripto.id}`} className="cripto__detail-link">
              <Card style={{ width: 300, padding: 0, marginTop: 16 }} loading={loading}>
                <CriptoCard cripto={cripto} />
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
