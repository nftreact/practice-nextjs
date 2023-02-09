import React from "react";
import styled from "styled-components";

type TreeItemProps = {
  subItem: any;
};
const TreeItem: FC<TreeItemProps> = ({ subItem }) => {
  return <Root>TreeItem</Root>;
};

export default TreeItem;

const Root = styled.div`
  background: red;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
