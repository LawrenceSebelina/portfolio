import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface CounterProps {
    value: number;
    delay?: number;
    duration?: number;
    suffix?: string;
}

export const NumberCounter: React.FC<CounterProps> = ({
    value,
    delay = 0,
    suffix = "", // <─ default empty
}) => {
    const count = useMotionValue(0);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const controls = animate(count, value, {
            duration: 1.5,
            delay,
            ease: "easeOut",
            onUpdate: (v) => setDisplay(Math.floor(v)),
        });
        return controls.stop;
    }, [count, value, delay]);

    return (
        <motion.span>
            {display}
            {suffix} {/* ← show plus or whatever */}
        </motion.span>
    );
};
