import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollVideoBanner: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const video = videoRef.current;

        if (!container || !video) return;

        // Create scrolling animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        tl.to(video, {
            yPercent: -50,
            ease: "none",
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden opacity-10"
        >
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[120%] object-cover"
                style={{ transform: "translateY(0%)" }}
            >
                {/* Using a CSS animation as fallback since we can't include actual video files */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse" />
            </video>

            {/* Fallback animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
                <div
                    className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)] animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
            </div>
        </div>
    );
};
