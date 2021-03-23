import React from "react";

import { useParams } from "react-router-dom";

const Wikimedia = async () => {
  let {name}  = useParams();

console.log(name)
  return (
    <>
    <h1>{name}</h1>
  
    </>
  );
};

export default Wikimedia;
