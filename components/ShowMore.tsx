"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Button from "./Button";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";

const ShowMore: React.FC<ShowMoreProps> = ({ pageNumber, isNext }) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathNmae = updateSearchParams("limit", String(newLimit));

    router.push(newPathNmae);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          title="Show more"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
