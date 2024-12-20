"use client";

import { ActionButton } from "@/components/action-button";
import BackgroundStars from "@/assets/stars.png";
import BackgroundGrid from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  });
  return [mouseX, mouseY];
};

export function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start end`, "end start"],
  });
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0320] to-[#1e0c3b]"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <motion.div
          animate={{ backgroundPositionX: BackgroundStars.width }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="relative py-16 px-8 md:px-12 lg:px-16 rounded-2xl overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url(${BackgroundStars.src})`,
            backgroundPositionY,
          }}
        >
          {/* Animated Grid Overlay */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-60 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] transition group-hover:opacity-40"
            style={{ backgroundImage: `url(${BackgroundGrid.src})` }}
          />
          {/* Mask Overlay with Interactive Mouse Effect */}
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              backgroundImage: `url(${BackgroundGrid.src})`,
              maskImage: maskImage,
            }}
            ref={borderedDivRef}
          />
          {/* Content Section */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Empower Your SEO Strategy with AI
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed">
              Unlock powerful insights and achieve results effortlessly with
              next-gen AI tools.
            </p>
            <div className="mt-8">
              <ActionButton label="Get Early Access" />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Decorative Blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full opacity-30 blur-3xl"
        style={{
          top: "10%",
          left: "20%",
          y: useTransform(scrollYProgress, [0, 1], [-100, 100]),
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full opacity-30 blur-3xl"
        style={{
          top: "70%",
          right: "15%",
          y: useTransform(scrollYProgress, [0, 1], [100, -100]),
        }}
      />
    </section>
  );
}
