import React, { useState } from "react";
import {
  MenuItem,
  Typography,
  Avatar,
  Box,
  IconButton,
  Fade,
  Popover,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

export const CircleMenu = ({ label, icon, submenuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [scale, setScale] = useState(1);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setScale(1.2);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setScale(1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        backgroundColor: "white",
        boxShadow: 3,
        position: "relative",
        mx: 4,
        transition: "transform 0.3s ease-in-out",
        transform: `scale(${scale})`,
      }}
      onMouseOver={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <IconButton
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          "&:hover": {
            background: "white",
          },
        }}
      >
        <Avatar
          sx={{ bgcolor: "white", width: 80, height: 80, color: "black" }}
        >
          <img src={icon} />
        </Avatar>
        <Typography variant="body2" color="black" fontSize="20px">
          {label}
        </Typography>
        <ArrowDropDownIcon />
      </IconButton>
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableRestoreFocus
        sx={{
          mt: 2,
        }}
        TransitionComponent={Fade}
        slotProps={{
          paper: {
            onMouseEnter: handlePopoverOpen,
            onMouseLeave: handlePopoverClose,
          },
        }}
      >
        {submenuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handlePopoverClose}
            sx={{ px: 3, py: 2, minWidth: 120 }}
          >
            <Link
              to={item.menuLink}
              target="_blank"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                textDecoration: "none",
                color: "black",
              }}
            >
              {item.name}
            </Link>
          </MenuItem>
        ))}
      </Popover>
    </Box>
  );
};
