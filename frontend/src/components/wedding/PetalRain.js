import { motion, useReducedMotion } from "framer-motion";

const COLORS = ["#F59E2C", "#E8703A", "#D9455F", "#F6C6CE", "#FFB627", "#C98A2D"];

const PETALS = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: (i * 7.3 + 3) % 100,
    size: 10 + (i % 4) * 4,
    dur: 16 + (i % 5) * 3,
    delay: -(i * 2.7),
    color: COLORS[i % COLORS.length],
    drift: (i % 2 ? 48 : -48) * (0.6 + (i % 3) / 3),
}));

export default function PetalRain() {
    const reduce = useReducedMotion();
    if (reduce) return null;

    return (
        <div
            aria-hidden="true"
            data-testid="petal-rain"
            className="pointer-events-none fixed inset-0 z-[45] overflow-hidden"
        >
            {PETALS.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute"
                    style={{ left: `${p.left}%`, top: -48, width: p.size, height: p.size * 1.4 }}
                >
                    <motion.div
                        animate={{
                            y: ["-6vh", "110vh"],
                            x: [0, p.drift, 0],
                            rotate: [0, 180 + p.drift, 360],
                        }}
                        transition={{
                            duration: p.dur,
                            repeat: Infinity,
                            ease: "linear",
                            delay: p.delay,
                        }}
                        className="h-full w-full"
                    >
                        <svg
                            viewBox="0 0 20 28"
                            className="h-full w-full"
                            style={{ filter: "drop-shadow(0 2px 2px rgba(107,45,38,0.2))" }}
                        >
                            <path
                                d="M10 1 C17 7 19 14 10 27 C1 14 3 7 10 1 Z"
                                fill={p.color}
                                opacity="0.8"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
