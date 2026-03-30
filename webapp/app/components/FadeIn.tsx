"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = ""
}: {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}) {
    const isMobile = useIsMobile();

    const offset = isMobile ? 20 : 40;
    const duration = isMobile ? 0.45 : 0.7;
    const margin = isMobile ? "0px" : "-100px";
    const activeDelay = isMobile ? Math.min(delay, 0.1) : delay;

    const directions = {
        up: { y: offset, x: 0 },
        down: { y: -offset, x: 0 },
        left: { x: offset, y: 0 },
        right: { x: -offset, y: 0 },
        none: { x: 0, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin }}
            transition={{ duration, ease: [0.25, 0.1, 0.25, 1], delay: activeDelay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
