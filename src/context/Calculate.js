import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CalculateContext = createContext();

const CalculateContextProvider = ({ children }) => {
  //useState Pages create
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  //useState Context create
  const [bmıCal, setBmıCal] = useState();
  console.log(bmıCal);
  // console.log(firstName);
  const [send, setSend] = useState(false);
  if (send) {
    let w = weight;
    let h = height / 100;
    const bmı = w / (h * h);
    setBmıCal(bmı);
    setSend(false);
  }

  return (
    <CalculateContext.Provider
      value={{
        setAge,
        setWeight,
        setHeight,
        bmıCal,
        setSend,
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateContextProvider;
