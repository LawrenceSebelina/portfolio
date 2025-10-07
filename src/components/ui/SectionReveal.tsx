import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
    children,
    className = "",
    direction = "up",
    delay = 0,
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const getInitialTransform = () => {
            switch (direction) {
                case "up":
                    return { y: 100, x: 0 };
                case "down":
                    return { y: -100, x: 0 };
                case "left":
                    return { y: 0, x: 100 };
                case "right":
                    return { y: 0, x: -100 };
                default:
                    return { y: 100, x: 0 };
            }
        };

        const initial = getInitialTransform();

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: initial.y,
                x: initial.x,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 1,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [direction, delay]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};
