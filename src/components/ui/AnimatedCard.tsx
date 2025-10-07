import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./Card";
import { cn } from "../../lib/Utils";

interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
    hoverScale?: number;
    hoverRotate?: number;
    delay?: number;
    shine?: boolean;
    border?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
    children,
    className,
    hoverScale = 1.05,
    hoverRotate = 0,
    delay = 0,
    shine = true, // default ON
    border = true, // default ON
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={{
                scale: hoverScale,
                rotate: hoverRotate,
                transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="group"
        >
            <Card
                className={cn(
                    "relative overflow-hidden transition-all duration-300",
                    "hover:shadow-2xl hover:shadow-primary/10",
                    shine &&
                        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent \
             before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000",
                    border && "group", // needed for pseudo border hover
                    className
                )}
            >
                {/* animated border only if enabled */}
                {border && (
                    <>
                        <span
                            className="
                            pointer-events-none absolute inset-0
                            before:absolute before:left-0 before:bottom-0
                            before:h-[1px] before:w-0 before:bg-primary
                            before:transition-all before:duration-300
                            after:absolute after:bottom-0 after:right-0
                            after:w-[1px] after:h-0 after:bg-primary
                            after:transition-all after:duration-300
                            group-hover:before:w-full group-hover:after:h-full z-10
                        "
                        />
                        <span
                            className="
                            pointer-events-none absolute inset-0
                            before:absolute before:right-0 before:top-0
                            before:h-[1px] before:w-0 before:bg-primary
                            before:transition-all before:duration-300
                            after:absolute after:top-0 after:left-0
                            after:w-[1px] after:h-0 after:bg-primary
                            after:transition-all after:duration-300
                            group-hover:before:w-full group-hover:after:h-full z-10
                        "
                        />
                    </>
                )}
                {children}
            </Card>
        </motion.div>
    );
};
