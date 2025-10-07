import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const FloatingElements: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const elements = container.querySelectorAll(".floating-element");

        elements.forEach((element, index) => {
            gsap.to(element, {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotation: "random(-5, 5)",
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.2,
            });
        });

        return () => {
            gsap.killTweensOf(elements);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none overflow-hidden"
        >
            <div className="floating-element absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full" />
            <div className="floating-element absolute top-40 right-20 w-3 h-3 bg-secondary/30 rounded-full" />
            <div className="floating-element absolute bottom-40 left-20 w-1 h-1 bg-accent/30 rounded-full" />
            <div className="floating-element absolute bottom-20 right-10 w-2 h-2 bg-primary/20 rounded-full" />
            <div className="floating-element absolute top-60 left-1/2 w-1 h-1 bg-secondary/40 rounded-full" />
            <div className="floating-element absolute bottom-60 right-1/3 w-2 h-2 bg-accent/20 rounded-full" />
        </div>
    );
};
