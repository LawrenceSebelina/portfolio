import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/Utils"; // adjust the path to your cn helper

interface AnimatedLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Add extra Tailwind classes if needed */
    className?: string;
    /** Show the moving shine effect (default: true) */
    shine?: boolean;
}

/**
 * AnimatedLink
 * A motion-enabled <a> tag with the same styling
 * and shine animation as AnimatedButton.
 */
export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
    children,
    className,
    shine = true,
    ...props
}) => {
    return (
        <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
            className={cn(
                "relative overflow-hidden group transition-all duration-300",
                // replicate Button’s look
                "inline-flex items-center justify-center rounded-[5px]",
                "bg-primary hover:bg-primary/90 text-primary-foreground",
                "px-3 py-3 h-auto",
                shine && "hover:shadow-lg hover:shadow-primary/25",
                className
            )}
        >
            {children}

            {shine && (
                <div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                     transition-transform duration-1000
                     bg-gradient-to-r from-transparent via-white/20 to-transparent
                     skew-x-12"
                />
            )}
        </motion.a>
    );
};
