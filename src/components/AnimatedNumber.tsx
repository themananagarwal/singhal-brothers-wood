import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedNumberProps {
    value: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export const AnimatedNumber = ({ value, duration = 2, suffix = "", className = "" }: AnimatedNumberProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView && ref.current) {
            const controls = animate(0, value, {
                duration: duration,
                onUpdate(latest) {
                    if (ref.current) {
                        // toLocaleString() adds commas for better readability of large numbers like 5,000
                        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
                    }
                },
                ease: "easeOut",
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration, suffix]);

    return <span ref={ref} className={className}>0{suffix}</span>;
};
