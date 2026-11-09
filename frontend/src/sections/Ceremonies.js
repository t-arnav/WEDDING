import { motion } from "framer-motion";
import { CalendarDays, MapPin, Navigation } from "lucide-react";
import { WEDDING } from "@/data/wedding";
import { Divider } from "@/components/wedding/Ornament";

const CeremonyCard = ({ fn, delay }) => (
    <motion.article
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, delay, ease: "easeOut" }}
        data-testid={`ceremony-card-${fn.id}`}
        className="group relative w-full max-w-md overflow-hidden rounded-3xl border-2 border-gold/40 bg-ivory shadow-[0_18px_44px_-20px_rgba(107,45,38,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(217,69,95,0.45)] md:max-w-lg"
    >
        <div className="relative px-6 pb-7 pt-8 text-center">
            <span className="absolute -top-5 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border-2 border-gold/60 bg-marigold shadow-inner" aria-hidden="true" />
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold/70 bg-peach/80 font-display text-lg text-maroon">
                {fn.num}
            </span>
            <h3 className="mt-3 font-display text-2xl text-rose md:text-3xl">{fn.name}</h3>
            <p className="mt-1.5 font-body text-sm italic text-maroon/75 md:text-base">{fn.tagline}</p>
            <div className="mt-4 flex flex-col items-center justify-center gap-2 rounded-2xl bg-peach/60 px-4 py-3 text-maroon sm:flex-row sm:gap-6">
                <span className="flex items-center gap-1.5 text-sm font-semibold md:text-base">
                    <CalendarDays className="h-4 w-4 text-saffron" />
                    {fn.date}
                </span>
                <span className="hidden h-4 w-px bg-gold/50 sm:block" aria-hidden="true" />
                <span className="flex items-center gap-1.5 text-sm md:text-base">
                    <MapPin className="h-4 w-4 text-leaf" />
                    {fn.venue}
                </span>
            </div>

            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fn.venue)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`directions-${fn.id}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sunset transition-colors duration-300 hover:text-rose"
            >
                <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                Get Directions
            </a>
        </div>
    </motion.article>
);

export default function Ceremonies() {
    return (
        <section
            id="functions"
            data-testid="ceremonies-section"
            className="dot-texture relative overflow-hidden bg-gradient-to-b from-peach via-blush/50 to-peach py-20 md:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="font-hand text-2xl text-saffron md:text-3xl">Shubh Vivah</p>
                    <h2 className="mt-1 font-heading text-4xl text-maroon md:text-6xl">
                        Functions &amp; Ceremonies
                    </h2>
                    <Divider className="mt-6" />
                </motion.div>

                <div className="relative mt-14 md:mt-20">
                    <span
                        aria-hidden="true"
                        className="absolute left-5 top-0 h-full w-0 border-l-2 border-dashed border-gold/50 md:left-1/2 md:-translate-x-1/2"
                    />
                    <div className="flex flex-col gap-12 md:gap-20">
                        {WEDDING.functions.map((fn, i) => (
                            <div key={fn.id} className="relative">
                                <span
                                    aria-hidden="true"
                                    className="absolute left-5 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-ivory bg-rose shadow md:block"
                                />
                                <div className="pl-14 md:pl-0">
                                    <div className={`md:flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                                        <CeremonyCard fn={fn} delay={0.08} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
