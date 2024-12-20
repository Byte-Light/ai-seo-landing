"use client";

import { ActionButton } from "./action-button";
import BackgroundStars from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: [`start end`, "end start"],
    });
    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <motion.section
            className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
            style={{
                backgroundImage: `url(${BackgroundStars.src})`,
                backgroundSize: "cover",
                backgroundPositionY,
            }}
            ref={sectionRef}
        >
            {/* Layered Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-gray-900 opacity-80 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(128,90,213,0.4) 20%, transparent)] z-20" />

            {/* Rotating Elements */}
            <motion.div
                className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full border-dashed border-2 border-white/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />

            {/* Content */}
            <div className="relative z-30 text-center">
                <motion.h1
                    className="text-5xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    AI SEO
                </motion.h1>
                <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
                    Empower your website with cutting-edge AI tools for effortless optimization.
                </p>
                <div className="mt-8">
                    <ActionButton
                        label="Join Waitlist"
                        className="relative px-8 py-3 text-lg text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
                    />
                </div>
            </div>
        </motion.section>
    );
}
