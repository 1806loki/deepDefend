import { React, useState } from "react";
import { PiDotsSixBold } from "react-icons/pi";
import { BsSpeedometer2 } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";
import { GiTireIronCross } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
import { FaBars } from "react-icons/fa";

import { IoMdSettings } from "react-icons/io";
import { MdManageSearch } from "react-icons/md";

import { NavLink } from "react-router-dom";
import "../App.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState();

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <BsSpeedometer2 />,
    },
    {
      path: "/Metrics",
      name: "Metrics",
      icon: <PiDotsSixBold />,
    },
    {
      path: "/Logs",
      name: "Logs",
      icon: <RiFileListLine />,
    },
    {
      path: "/ActivityCenter",
      name: "ActivityCenter",
      icon: <GiTireIronCross />,
    },
    {
      path: "/EmailGateAway",
      name: "Email GateAway",
      icon: <SiGmail />,
    },
    {
      path: "/Settings",
      name: "Settings",
      icon: <IoMdSettings />,
    },
    {
      path: "/Reports",
      name: "Reports",
      icon: <MdManageSearch />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "60px" }} className="sidebar">
        <div className="topSection">
          <h2 style={{ display: isOpen ? "block" : "none" }}>DeepDefend</h2>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="name"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
