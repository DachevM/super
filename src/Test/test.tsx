import React from "react";

const Test = () => {
  function printerError(s: string) {
    // your code
    const a = s.match(/[^nopqrstuvwxyz]/gi);
    return a;
  }

  console.log(printerError("aaaaaaffffffggxxxxggggxxxx"));
  return <div></div>;
};

export default Test;
