import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../Services/cryptoAPI";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            className="search-crypto-input"
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={2}
            lg={6}
            className="crypto-card"
            key={currency?.uuid}
          >
            {/* {console.log({ currency })} */}
            <Link to={`/crypto/${currency?.uuid}`}>
              <Card
                title={
                  <h4 style={{ margin: "0" }}>
                    {`${currency?.rank}. ${currency?.name}`}
                  </h4>
                }
                extra={
                  <img
                    className="crypto-image"
                    src={currency?.iconUrl}
                    alt="cryptoImg"
                  />
                }
                hoverable
              >
                <p style={{ fontSize: "1.2rem" }}>
                  Price: <strong>$</strong>
                  {millify(currency?.price)}
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                  Market Cap: {millify(currency?.marketCap)}
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                  Daily Change: {millify(currency?.change)}%
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
