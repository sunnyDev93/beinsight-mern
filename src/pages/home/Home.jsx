import { Box, Container } from "@mui/material";
import React from "react";
import { Slide } from "../../components/Carousel";
import { menuItems } from "../../constants/menu";
import { CircleMenu } from "../header/CircleMenu";
import { LocationMenu } from "../header/LocationMenu";
import LogoMenu from "../header/LogoMenu";

const Home = () => {
  const slideItems = [
    { title: "ANS Overview", coverImg: "/images/slides/1.png" },
    { title: "HMO Visit", coverImg: "/images/slides/2.png" },
    { title: "New Market Place Report3", coverImg: "/images/slides/1.png" },
  ];
  return (
    <div
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        padding: "10px",
        minHeight: "100vh",
      }}
    >
      <LocationMenu />
      <LogoMenu />
      <Box
        sx={{
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "-100px",
        }}
      >
        {menuItems.map((menuItem) => (
          <CircleMenu
            key={menuItem.label}
            label={menuItem.label}
            icon={menuItem.menuIcon}
            submenuItems={menuItem.submenuItems}
          />
        ))}
      </Box>
      <Container>
        <Slide slideItems={slideItems} />
      </Container>
    </div>
  );
};

export default Home;
