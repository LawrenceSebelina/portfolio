import { useEffect } from "react";

const TrailCursor: React.FC = () => {
    useEffect(() => {
        const trailContainer = document.createElement("div");
        trailContainer.className =
            "pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-[9999]";
        document.body.appendChild(trailContainer);

        const handleMouseMove = (e: MouseEvent) => {
            // Skip trail when hovering buttons or links
            const target = e.target as HTMLElement;
            if (target.closest("button, a")) return;

            const trail = document.createElement("div");
            trail.className =
                "absolute w-5 h-5 rounded-full opacity-60 scale-0 transition-all duration-500 ease-out " +
                "bg-[linear-gradient(90deg,hsl(18,87%,54%)_0%,hsla(18,87%,54%,0)_100%)]";

            // Position the circle centered on the cursor
            trail.style.left = `${e.clientX - 10}px`;
            trail.style.top = `${e.clientY - 10}px`;

            trailContainer.appendChild(trail);

            // Trigger animation
            requestAnimationFrame(() => {
                trail.style.opacity = "0";
                trail.style.transform = "scale(1)";
            });

            // Remove after fade
            setTimeout(() => {
                trail.remove();
            }, 500);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            trailContainer.remove();
        };
    }, []);

    return null;
};

export default TrailCursor;
