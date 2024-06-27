import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CircleMenu.css";

export const CircleMenu = ({ label, icon, submenuItems }) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div className="circle-menu-container">
      <div
        className="circle-menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="circle-menu-icon">
          <img src={icon} alt={label} />
          <span>{label}</span>
        </div>
        {open && (
          <div className="circle-menu-submenu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {submenuItems.map((item, index) => (
              <Link key={index} to={item.menuLink} className="circle-menu-item">
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};