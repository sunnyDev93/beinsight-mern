import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

export const Slide = (props) => {
  return (
    <Carousel sx={{ mt: 4 }}>
      {props.slideItems &&
        props.slideItems.length > 0 &&
        props.slideItems.map((item, i) => <Item key={i} item={item} />)}
    </Carousel>
  );
};

const Item = (props) => {
  return (
    <Paper sx={{ minHeight: "761px" }}>
      {/* <h2>{props.item.title}</h2> */}
      <img
        style={{ minHeight: "761px" }}
        src={props.item.coverImg}
        alt="Slide"
      />
    </Paper>
  );
};
