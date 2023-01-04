import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import logo from "../Images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <NavLink to="/">Crypto App</NavLink>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <NavLink to="/cryptocurrencies">Crypto Currencies</NavLink>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <NavLink to="/exchanges">Exchanges</NavLink>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <NavLink to="/news">News</NavLink>
          </Menu.Item>
        </Menu>
      )}
    </nav>
  );
};

export default Navbar;
