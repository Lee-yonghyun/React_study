import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((item) => <li>{item}</li>);
  return (
    <ul>{nameList}</ul>
    // <ul>
    //   <li>눈사람</li>
    //   <li>얼음</li>
    //   <li>눈</li>
    //   <li>바람</li>
    // </ul>
  );
};

export default IterationSample;
