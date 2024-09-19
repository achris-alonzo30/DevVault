"use client";


import {
  motion,
  animate,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home () {
  const router = useRouter();
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-neutral-950 px-4 py-24 text-neutral-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-neutral-600/50 px-3 py-1.5 text-sm font-bold">
          JOIN THE COMMUNITY
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Developer&apos;s Essential Toolkit
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Access curated collection of tools and resources instantly.
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          onClick={() => router.push("/explore")}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-neutral-950/10 px-4 py-2 text-neutral-50 transition-colors hover:bg-neutral-950/50"
        >
          Start Exploring
          <FiArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};