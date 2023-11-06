import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const links = [
    { name: "About" },
    { name: "Community Guidelines" },
    { name: "Privacy & Terms" },
    { name: "Sales Solution" },
    { name: "Safety Center " },
  ];
  const links2 = [
    { name: "About" },
    { name: "Community Guidelines" },
    { name: "Privacy & Terms" },
    { name: "Sales Solution" },
    { name: "Safety Center " },
  ];
  const links3 = [
    { name: "About" },
    { name: "Community Guidelines" },
    { name: "Privacy & Terms" },
    { name: "Sales Solution" },
    { name: "Safety Center " },
  ];
  return (
    <div className="footer">
      <div>
        {links.map((links) => {
          return (
            <div className="links" key={links}>
              <Typography variant="p">{links.name}</Typography>
            </div>
          );
        })}
      </div>
      <div>
        {links2.map((links) => {
          return (
            <div className="links" key={links}>
              <Typography variant="p">{links.name}</Typography>
            </div>
          );
        })}
      </div>
      <div>
        {links3.map((links) => {
          return (
            <div className="links" key={links}>
              <Typography variant="p">{links.name}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
