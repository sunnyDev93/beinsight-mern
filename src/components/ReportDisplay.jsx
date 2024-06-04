
// eslint-disable-next-line no-unused-vars
import React from "react";

import { Box, Container } from "@mui/material";
import LogoMenu from "../pages/header/LogoMenu";
import { LocationMenu } from "../pages/header/LocationMenu";

const ReportDisplay = (props) => {
  return (
    <Box sx={{background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",}}>
      <div style={{height: "100vh"}}>
        <div style={{display: "flex", alignItems: "center"}}>
          <LogoMenu />
          <LocationMenu />
        </div>
        <Container>  
          <iframe
            title="test"
            width="1140"
            height="700"
            // eslint-disable-next-line react/prop-types
            src={props.reportUrl}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </Container>
      </div>
      
    </Box>
  );
};

export default ReportDisplay;