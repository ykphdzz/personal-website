"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden mt-[100px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white mt-[-200px]">
              <span className="text-4xl md:text-[6rem] font-bold leading-none ">
                Skills
              </span>
            </h1>
          </>
        }>
        121212
      </ContainerScroll>
    </div>
  );
}