import { Flex, Typography } from "primitives";
import React, { FC } from "react";
import DropdownMenu from "./DropdownMenu";

type MenuItemsProps = {
  item: any;
};

const MenuItems: FC<MenuItemsProps> = ({ item }) => {
  const [hover, setHover] = React.useState(false);
  console.log(item.hasOwnProperty("Categories"), "item.Categories?.Categories");

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div>
        <Typography>{item.Title}</Typography>
      </div>
      <div>
        <div>
          {hover && item.hasOwnProperty("Categories") && <DropdownMenu submenu={item.Categories} />}
          <div>
            {hover && item.hasOwnProperty("Categories") && (
              <DropdownMenu submenu={item.Categories[0]?.Categories} />
            )}
            <div>
              {hover && <DropdownMenu submenu={item.Categories[0]?.Categories[0]?.Categories} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
