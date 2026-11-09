import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { CalendarDays, ChevronDown, MapPin } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import { WEDDING } from "@/data/wedding";

const reveal = {
    hidden: { y: "115%" },
    show: (d) => ({
        y: "0%",
        transition: { duration: 1, delay: d, ease: [0.22, 1, 0.36, 1] },
    }),
};

const fade = {
    hidden: { opacity: 0, y: 24 },
    show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: d, ease: "easeOut" } }),
};

const MaskedLine = ({ delay, children, className = "" }) => (
    <span className={`block overflow-hidden ${className}`}>
        <motion.span className="block" variants={reveal} initial="hidden" animate="show" custom={delay}>
            {children}
        </motion.span>
    </span>
);

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 130]);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 55, damping: 18 });
    const sy = useSpring(my, { stiffness: 55, damping: 18 });

    const onMouseMove = (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 18);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 10);
    };

    return (
        <section
            id="hero"
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
                mx.set(0);
                my.set(0);
            }}
            data-testid="hero-section"
            className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-sunset"
        >
            <motion.div style={{ x: sx, y: sy }} className="absolute inset-0 scale-[1.06]">
                <motion.img
                    src="/images/hero_mandap.jpg"
                    alt="Illustrated grand Indian wedding mandap beneath a warm sunset sky"
                    style={{ y: imgY, scale: imgScale }}
                    className="h-full w-full object-cover"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-[#E8703A]/40 via-[#E8703A]/5 to-[#6B2D26]/75" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(107,45,38,0.38)_100%)]" />

            <img
                src="/images/garland_band.jpg"
                alt=""
                aria-hidden="true"
                className="absolute left-0 top-0 h-16 w-full object-cover object-top mix-blend-multiply md:h-28"
            />

            <motion.div
                style={{ opacity: contentOpacity, y: contentY }}
                className="relative z-10 mx-auto max-w-3xl px-5 pb-24 pt-28 text-center text-ivory"
            >
                <MaskedLine delay={0.25}>
                    <span
                        data-testid="hero-mantra"
                        className="mx-auto mb-6 inline-block rounded-full border border-gold/70 bg-[#6B2D26]/35 px-5 py-1.5 font-hand text-lg text-[#FFE3C2] backdrop-blur-sm md:text-xl"
                    >
                        {WEDDING.mantra}
                    </span>
                </MaskedLine>

                <MaskedLine delay={0.4}>
                    <span className="font-hand text-xl text-white [text-shadow:0_2px_10px_rgba(107,45,38,0.85)] md:text-2xl">
                        Together with their families
                    </span>
                </MaskedLine>

                <h1 className="mt-2 font-display leading-[1.04] drop-shadow-[0_4px_18px_rgba(107,45,38,0.55)]">
                    <MaskedLine delay={0.55}>
                        <span className="block text-[clamp(3.4rem,11vw,7.5rem)]">{WEDDING.groom}</span>
                    </MaskedLine>
                    <MaskedLine delay={0.72}>
                        <span className="block text-[clamp(3.4rem,11vw,7.5rem)]">
                            <span className="text-white">&amp;</span> {WEDDING.bride}
                        </span>
                    </MaskedLine>
                </h1>

                <MaskedLine delay={0.9}>
                    <span className="mx-auto mt-5 block max-w-xl font-body text-base text-ivory/95 md:text-lg">
                        cordially invite you to share in the joy of their wedding celebration
                    </span>
                </MaskedLine>

                <motion.div
                    variants={fade}
                    initial="hidden"
                    animate="show"
                    custom={1.1}
                    className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
                >
                    <span className="flex items-center gap-2 rounded-full border border-gold/60 bg-[#6B2D26]/30 px-4 py-2 text-sm backdrop-blur-sm md:text-base">
                        <CalendarDays className="h-4 w-4 text-marigold" />
                        {WEDDING.invite.dateLong} &bull; {WEDDING.invite.time}
                    </span>
                    <span className="flex items-center gap-2 rounded-full border border-gold/60 bg-[#6B2D26]/30 px-4 py-2 text-sm backdrop-blur-sm md:text-base">
                        <MapPin className="h-4 w-4 text-marigold" />
                        {WEDDING.invite.venue}
                    </span>
                </motion.div>

                <motion.button
                    variants={fade}
                    initial="hidden"
                    animate="show"
                    custom={1.35}
                    onClick={() => scrollToId("invitation")}
                    data-testid="scroll-indicator-btn"
                    className="group mx-auto mt-12 flex flex-col items-center gap-2 text-ivory/90"
                    aria-label="Scroll to the invitation"
                >
                    <span className="font-hand text-lg text-[#FFE3C2]">scroll to unfold</span>
                    <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gold/70 p-1.5">
                        <span className="h-2 w-1 rounded-full bg-marigold animate-scroll-dot" />
                    </span>
                    <ChevronDown className="h-4 w-4 animate-float-y" />
                </motion.button>
            </motion.div>

            <svg
                className="absolute -bottom-px left-0 z-10 h-12 w-full text-cream md:h-20"
                viewBox="0 0 1440 70"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M0,42 C240,72 480,4 720,26 C960,50 1200,62 1440,30 L1440,70 L0,70 Z" />
            </svg>
        </section>
    );
}
