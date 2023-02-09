import React, { ReactNode } from "react";
import { Flex, Input, Typography, Colors, Spacing } from "primitives";
import styled from "styled-components";
import { useGetMenuBar } from "@components/client-info/client-info.services";
import DropdownMenu from "./DropdownMenu";
import MenuItems from "./MenuItems";
import Sample from "./TreeItem";

const Header = () => {
  const { data, isLoading, isFetching } = useGetMenuBar();
  const [hover, setHover] = React.useState(false);
  console.log(testMenuItems, "data");

  return (
    <Root style={{ cursor: "pointer" }}>
      <Flex gap={1.6} spacing={{ p: 1.6 }}>
        {testMenuItems.map((item) => {
          return <MenuItems item={item} />;
        })}
      </Flex>
    </Root>
  );
};

export default Header;
//   {
//     testMenuItems.map((item: any, index: number) => {
//       console.log(item.Categories.PersianTitle, "item.Categories.PersianTitle");

//       return (
//         <div>
//           <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
//             {item.Title}
//           </div>
//           <div>
//             {hover &&
//               item.Categories.map((item) => {
//                 return (
//                   <div>
//                     <div>{item.PersianTitle}</div>
//                     <div>
//                       {item.Categories.map((item) => {
//                         return (
//                           <div>
//                             <div>{item.PersianTitle}</div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       );
//     });
//   }

const Root = styled.div`
  background-color: #f7e9de;
  position: relative;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const testMenuItems = [
  {
    Title: "css",
    Categories: [
      {
        PersianTitle: "mediaquery",
        Categories: [
          {
            PersianTitle: "mediaquery1",
          },
        ],
      },
    ],
  },
  {
    Title: "html",
    Categories: [
      {
        PersianTitle: "div",
        Categories: [
          {
            PersianTitle: "div1",
            Categories: [
              {
                PersianTitle: "div2",
                Categories: [
                  {
                    PersianTitle: "div3",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Title: "js",
    Categories: [
      {
        PersianTitle: "react",
        Categories: [
          {
            PersianTitle: "useEffect",
            Categories: [
              {
                PersianTitle: "useEffect1",
                Categories: [
                  {
                    PersianTitle: "useEffect2",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
