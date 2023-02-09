import { Flex } from "primitives";
import React, { FC } from "react";
import styled from "styled-components";
import { TabsProps, TabsItemProps } from "./types";

const TabsItem = [
  {
    title: "sample1",
    key: "sample1",
    description: "describe sample 1",
  },
  {
    title: "sample2",
    key: "sample2",
    description: "describe sample 2",
  },
  {
    title: "sample3",
    key: "sample3",
    description: "describe sample 3",
  },
];

const Tabs: FC<TabsProps> = () => {
  const [activeTab, setActiveTab] = React.useState<string>("sample1");
  const handleTabClick = (key: string) => {
    setActiveTab(key);
  };
  return (
    <Root>
      <Flex gap={1.6}>
        {TabsItem.map((item: TabsItemProps) => {
          return (
            <div onClick={() => handleTabClick(item.key)} key={item.key}>
              {item.title}
            </div>
          );
        })}
      </Flex>
      <Flex gap={2}>
        {TabsItem.map((item) => {
          return (
            <div style={{ display: `${activeTab === item.key ? "flex" : "none"}` }} key={item.key}>
              {item.description}
            </div>
          );
        })}
      </Flex>
    </Root>
  );
};

export default Tabs;

const Root = styled.div`
  display: grid;
`;
