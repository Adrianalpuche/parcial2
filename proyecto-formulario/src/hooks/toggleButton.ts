import { useState } from "react";

interface ToggleButtonState {
  isOn: boolean;
}

type ToggleFunction = () => void;

type UseToggleButton = () => [ToggleButtonState, ToggleFunction];

const useToggleButton: UseToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle: ToggleFunction = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return [{ isOn }, toggle];
};

export default useToggleButton;