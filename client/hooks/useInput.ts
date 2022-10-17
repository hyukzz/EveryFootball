import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEnteredValue(e.target.value);
  };

  return { value: enteredValue, valueChangeHandler };
};

export default useInput;