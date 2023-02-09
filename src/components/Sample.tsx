import React, { memo } from "react";

const Sample = () => {
    console.log("sample is render");
    
  return <div>Sample</div>;
};

export default memo(Sample);
