"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import Devlmg from "./DevImg";
import Badge from "./Badge";
import Social from "./Social";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["Full-Stack Dev", "UI/UX Designer", "Mathematician"],
    loop: {},
    cursor: '|',
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 tracking-[4px]">
              I am a{" "}
              <span className="text-primary font-bold">{typeEffect}</span>
              <Cursor cursorColor="green" />
            </div>
            <h1 className="h1">Hello! I am Dozie Umeodinka</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              debitis ab, excepturi vel sus
            </p>
            {/* button */}
            
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">image</div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
