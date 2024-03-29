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
    cursor: "|",
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
              <Cursor cursorColor="rgb(91, 201, 44)" />
            </div>
            <h1 className="h1 mb-4">
              <span className="font-light">Hello! I am </span>
              <br /> Dozie <span className="text-primary">Umeodinka</span>
            </h1>

            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              debitis ab, excepturi vel sus
            </p>
            {/* button */}

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 hover:text-black dark:hover:text-white">
                  Contact me <Send size={17} />
                </Button>
              </Link>
            </div>

            {/* socials */}
            <Social containerStyle='flex gap-x-6 mx-auto xl:mx-0' iconsStyles= 'text-foreground text-[22px] hover:text-primary transition-all' />
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
