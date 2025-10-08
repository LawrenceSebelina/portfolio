import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { cn } from "../../library/Utils";

interface AnimatedButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?:
        | "default"
        | "outline"
        | "secondary"
        | "ghost"
        | "link"
        | "destructive";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    shine?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    variant = "default",
    size = "default",
    className,
    shine = true,
    ...props
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <Button
                variant={variant}
                size={size}
                className={cn(
                    "relative overflow-hidden group transition-all duration-300",
                    shine && "hover:shadow-lg hover:shadow-primary/25",
                    className
                )}
                {...props}
            >
                {children}

                {/* Shine effect */}
                {shine && (
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                )}
            </Button>
        </motion.div>
    );
};
