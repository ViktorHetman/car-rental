"use client";

import React from "react";
import Image from "next/image";

import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rigthIcon,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rigthIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rigthIcon!}
            alt="Right arrow"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
