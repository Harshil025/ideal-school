import React, { useState } from "react";

import { questions } from "./Api";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setData] = useState(questions);


  return (
    <>

    <div className=""> 
    <h6> FAQ </h6>
      {data.map((curElem) => {
        const { id } = curElem;
        return <MyAccordion key={id} {...curElem} />
      })}
       </div>
    </>
  );
};

export default Accordion;
