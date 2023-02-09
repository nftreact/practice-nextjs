import React from "react";
import { Root, ShowRangeValue, Input } from "./styles";

const Slider = () => {
  const [rangeInputValue, setRangeInputValue] = React.useState<number>(10);
  return (
    <Root>
      <Input
        min={1}
        max={100}
        value={rangeInputValue}
        onChange={(e) => setRangeInputValue(e.target.valueAsNumber)}
      />
      <ShowRangeValue variant="description">تا {rangeInputValue}/000 تومان</ShowRangeValue>
    </Root>
  );
};

export default Slider;
