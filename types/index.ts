import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ComboBoxProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
