import React from "react";
import { LocationMenu } from "../header/LocationMenu";
import LogoMenu from "../header/LogoMenu";

const Ans = () => {
  return (
    <div>
      <LocationMenu />
      <LogoMenu />
      <iframe
        title="test"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=5ea6d51f-165d-4cb5-be6d-da3aeae51458&autoAuth=true&ctid=7dbc552d-50d7-4396-aeb9-04d0d393261b"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default Ans;
