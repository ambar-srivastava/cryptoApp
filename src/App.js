import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Typography, Layout, Space } from "antd";
import {
  Navbar,
  News,
  // Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  Homepage,
} from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="navbar">
        <Navbar />
      </header>
      <main className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* <Route path="/exchanges" element={<Exchanges />} /> */}
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <footer className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto App <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            {/* <Link to="/exchanges">Exchanges</Link> */}
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>
      </main>
    </div>
  );
};

export default App;
