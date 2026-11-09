import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { WEDDING } from "@/data/wedding";
import { Divider } from "@/components/wedding/Ornament";

const TARGET = new Date(WEDDING.countdownTarget).getTime();

const calc = () => {
    const diff = Math.max(0, TARGET - Date.now());
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

function useCountdown() {
    const [t, setT] = useState(calc);
    useEffect(() => {
        const i = setInterval(() => setT(calc()), 1000);
        return () => clearInterval(i);
    }, []);
    return t;
}

const Tile = ({ value, label, testId }) => (
    <div
        data-testid={testId}
        className="flex min-w-0 flex-col items-center rounded-xl border border-gold/50 bg-ivory/95 px-1 py-2 shadow-sm md:py-3"
    >
        <span className="font-display text-xl leading-none text-maroon md:text-3xl">
            {String(value).padStart(2, "0")}
        </span>
        <span className="mt-1 text-[9px] uppercase tracking-widest text-saffron md:text-[11px]">
            {label}
        </span>
    </div>
);

const MARQUEE_ITEMS = [WEDDING.names, WEDDING.invite.dateMarquee, WEDDING.invite.venue, "Save the Date"];

const MarqueeHalf = ({ hidden }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
        {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
                <span className="mx-5 inline-block h-2.5 w-2.5 rotate-45 bg-ivory/90 md:mx-8" aria-hidden="true" />
                <span className="font-display text-lg text-maroon md:text-2xl">{item}</span>
            </span>
        ))}
    </div>
);

export default function SaveTheDate() {
    const t = useCountdown();

    return (
        <section
            id="save-the-date"
            data-testid="save-the-date-section"
            className="relative overflow-hidden bg-gradient-to-b from-peach via-[#FFDDB5] to-blush/70 py-20 md:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="font-hand text-2xl text-rose md:text-3xl">Mark your calendar</p>
                    <h2 className="mt-1 font-heading text-4xl text-maroon md:text-6xl">Save the Date</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative mx-auto mt-12 w-full max-w-md md:mt-16"
                >
                    <img
                        src="/images/save_date_frame.jpg"
                        alt="Ornate floral arch frame"
                        className="w-full rounded-3xl shadow-[0_24px_60px_-24px_rgba(107,45,38,0.45)]"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-[17%] py-[13%] text-center md:px-[16%]">
                        <p className="font-display text-lg leading-tight text-rose md:text-2xl" data-testid="save-the-date-names">
                            {WEDDING.groom} <span className="text-gold">&amp;</span> {WEDDING.bride}
                        </p>
                        <p className="mt-1 font-heading text-sm text-maroon md:text-xl" data-testid="save-the-date-date">
                            {WEDDING.invite.dateMarquee}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 font-body text-[10px] text-maroon/80 md:text-xs">
                            <MapPin className="h-3 w-3 shrink-0 text-leaf md:h-3.5 md:w-3.5" />
                            {WEDDING.invite.venue}
                        </p>

                        <div
                            data-testid="countdown-timer"
                            className="mt-2 grid w-full grid-cols-4 gap-1 md:mt-4 md:gap-2"
                        >
                            <Tile value={t.days} label="Days" testId="countdown-days" />
                            <Tile value={t.hours} label="Hours" testId="countdown-hours" />
                            <Tile value={t.minutes} label="Mins" testId="countdown-minutes" />
                            <Tile value={t.seconds} label="Secs" testId="countdown-seconds" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="mt-16 border-y-2 border-gold/50 bg-marigold py-3.5 md:mt-20" data-testid="marquee-band">
                <div className="flex w-max animate-marquee">
                    <MarqueeHalf />
                    <MarqueeHalf hidden />
                </div>
            </div>
        </section>
    );
}
