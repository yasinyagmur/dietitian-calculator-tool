import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CalculateContext = createContext();

const CalculateContextProvider = ({ children }) => {
  //useState Pages create
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  //useState Context create
  const [bmıCal, setBmıCal] = useState();

  console.log(bmıCal);

  const BmıCalculate = (weight, height) => {
    const bmı = weight / (height * height);
    setBmıCal(bmı);
  };

  return (
    <CalculateContext.Provider
      value={{
        setFirstName,
        setLastName,
        setAge,
        setWeight,
        setHeight,
        bmıCal,
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateContextProvider;
