import React, { FC, useState } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Drawer,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { MenuSharp } from "@material-ui/icons";
import { Link } from "../ShoppingBasketNav/ShoppingBasketNav.style";
import ShoppingBasketFontIcons from "../ShoppingBasketFontIcons/ShoppingBasketFontIcons";
import { RightDrawer } from "./ShoppingBasketDrawer.style";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const ShoppingBasketDrawer: FC = () => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: string) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["/", "Shoes", "Clothes", "Bags"].map((text, index) => (
          <Link
            to={text.toLocaleLowerCase()}
            className="drawer-list"
            key={index}
          >
            <ListItem button key={index}>
              <ListItemIcon>
                <ShoppingBasketFontIcons fontIconId={index} />
              </ListItemIcon>
              <ListItemText primary={text !== "/" ? text : "Home"} />
            </ListItem>
            {index === 0 ? <Divider /> : ""}
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <RightDrawer>
      <>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer("right", true)}
        >
          <MenuSharp fontSize="small" />
        </IconButton>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </>
    </RightDrawer>
  );
};

export default ShoppingBasketDrawer;
