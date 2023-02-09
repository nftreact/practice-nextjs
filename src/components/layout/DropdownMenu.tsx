import React, { FC } from "react";
import { Flex, Typography } from "primitives";
import styled from "styled-components";
import { motion } from "framer-motion";

type DropdownMenuProps = {
  submenu: any;
};

const DropdownMenu: FC<DropdownMenuProps> = ({ submenu }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <DropdownWrapper
      gap={2}
      spacing={{ px: 1.6 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Flex style={{ padding: "1rem" }}>
        {submenu?.map((item) => {
          console.log(item, "item.PersianTitle");
          return (
            <div>
              <Typography>{item.PersianTitle}</Typography>
              {/* <div>
              {hover &&
                item.Categories.map((item: any, index: number) => (
                  <div>
                    {hover && <Typography key={index}>{item.PersianTitle}</Typography>}
                    <div>
                      {hover &&
                        item.Categories?.map((item) => {
                          console.log(item, "item.PersianTitle");
                          return <Typography>{item.PersianTitle}</Typography>;
                        })}
                    </div>
                  </div>
                ))}
            </div> */}
            </div>
          );
        })}
      </Flex>
    </DropdownWrapper>
  );
};

export default DropdownMenu;

const DropdownWrapper = styled(Flex)`
  /* padding-inline-start: 0;
  background-color: #f7e9de;
  width: 100%;
  position: absolute;
  top: 4rem;
  right: calc(-50vw + 50%);
  left: calc(-50vw + 50%);
  z-index: 50;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); */
`;
