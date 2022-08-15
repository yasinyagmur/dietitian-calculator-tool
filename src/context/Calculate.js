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
  //radio button state
  const [value, setValue] = useState("female");

  //useState Context create
  const [bmıCal, setBmıCal] = useState();
  const [basalConc, setBasalConc] = useState();
  const [sendBmi, setSendBmi] = useState(false);
  const [sendBasal, setSendBasal] = useState(false);
  if (sendBmi) {
    let w = weight;
    let h = height / 100;
    const bmı = w / (h * h);
    setBmıCal(bmı.toFixed(2));
    setSendBmi(false);
  }

  if (sendBasal) {
    let w = weight;
    let h = height / 100;
    const bmı = w / (h * h);
    setBmıCal(bmı.toFixed(2));
    let a = 6.25 * h;
    let b = 5 * age;
    const basal = w * 10 + a - b + 5;
    setBasalConc(basal.toFixed(2));
    setSendBasal(false);
  }

  return (
    <CalculateContext.Provider
      value={{
        setAge,
        setWeight,
        setHeight,
        bmıCal,
        setSendBmi,
        setValue,
        value,
        setSendBasal,
        basalConc,
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateContextProvider;
