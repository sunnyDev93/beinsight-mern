import * as React from "react";
import MenuButton from "@mui/joy/MenuButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Dropdown from "@mui/joy/Dropdown";
import PublicIcon from "@mui/icons-material/Public";
import Link from "@mui/joy/Link";

export const LocationMenu = () => {
  const locationMenu = [
    { name: "China", url: "https://beinsight.cn" },
    { name: "APAC", url: "https://beinsight.apac" },
    { name: "Europe", url: "https://beinsight.eu" },
    { name: "NM", url: "https://beinsight.nm" },
    { name: "GMA", url: "https://beinsight.gma" },
  ];

  return (
    <div style={{ marginLeft: "30px" }}>
      <Dropdown>
        <MenuButton
          endDecorator={<ArrowDropDown style={{ color: "white" }} />}
          sx={{
            "&:hover": { background: "transparent" },
            border: "none",
          }}
        >
          <PublicIcon style={{ color: "white" }} />
          <span style={{ color: "white" }}>Global</span>
        </MenuButton>
        <Menu sx={{ minWidth: 100, textAlign: "center" }}>
          <ListItem nested sx={{ margin: "auto" }}>
            <List aria-label="Font sizes">
              {locationMenu.map((item) => (
                <Link
                  href={item.url}
                  target="_blank"
                  key={item.name}
                  underline="none"
                >
                  <MenuItem>{item.name}</MenuItem>
                </Link>
              ))}
            </List>
          </ListItem>
        </Menu>
      </Dropdown>
    </div>
  );
};
