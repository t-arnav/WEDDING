import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { WEDDING } from "@/data/wedding";
import { Divider, CornerOrnament } from "@/components/wedding/Ornament";

export default function Invitation() {
    return (
        <section id="invitation" data-testid="invitation-section" className="relative bg-cream pb-20 pt-4 md:pb-28">
            <img
                src="/images/garland_band.jpg"
                alt=""
                aria-hidden="true"
                className="absolute left-0 top-0 h-14 w-full object-cover object-top opacity-90 mix-blend-multiply md:h-20"
            />

            <div className="mx-auto max-w-3xl px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    data-testid="invitation-panel"
                    className="relative mt-16 rounded-[2rem] border-2 border-gold/60 bg-ivory px-6 py-10 text-center shadow-[0_24px_60px_-24px_rgba(107,45,38,0.35)] md:rounded-[2.75rem] md:px-14 md:py-14"
                >
                    <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] border border-gold/40 md:inset-3 md:rounded-[2.3rem]" />
                    <CornerOrnament position="top-left" className="left-2 top-2" />
                    <CornerOrnament position="top-right" className="right-2 top-2" />
                    <CornerOrnament position="bottom-left" className="bottom-2 left-2" />
                    <CornerOrnament position="bottom-right" className="bottom-2 right-2" />

                    <motion.img
                        src="/images/ganesh-om.jpg"
                        alt="Traditional Ganesha ornament"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="mx-auto h-36 w-36 rounded-full border-4 border-gold/50 object-cover shadow-lg md:h-44 md:w-44"
                    />

                    <p className="mt-6 font-display text-2xl text-saffron md:text-3xl" data-testid="invitation-mantra">
                        {WEDDING.mantra}
                    </p>
                    <p className="mt-1 font-hand text-xl text-maroon/80 md:text-2xl">Together with their families,</p>

                    <h2 className="mt-4 font-display text-4xl leading-tight text-rose md:text-6xl" data-testid="invitation-names">
                        {WEDDING.groom} <span className="text-gold">&amp;</span> {WEDDING.bride}
                    </h2>

                    <p className="mx-auto mt-4 max-w-md font-body text-base text-maroon/85 md:text-lg">
                        cordially invite you to join the occasion of their joyous commitment on
                    </p>

                    <Divider className="mt-8" />

                    <div className="mt-8 flex flex-col items-center gap-1.5">
                        <span className="flex items-center gap-2 font-heading text-xl text-maroon md:text-3xl">
                            <CalendarDays className="h-5 w-5 text-saffron md:h-6 md:w-6" />
                            {WEDDING.invite.dateLong}
                        </span>
                        <span className="flex items-center gap-2 font-heading text-lg text-maroon/90 md:text-2xl">
                            <Clock className="h-5 w-5 text-saffron md:h-6 md:w-6" />
                            Time: {WEDDING.invite.time}
                        </span>
                        <span className="mt-3 flex items-start gap-2 rounded-2xl bg-peach/70 px-5 py-3 font-body text-base text-maroon md:text-lg">
                            <MapPin className="mt-1 h-5 w-5 shrink-0 text-rose" />
                            <span>
                                <span className="block font-semibold">Venue</span>
                                <a
                                    href={WEDDING.invite.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-rose hover:underline"
                                >
                                    {WEDDING.invite.venue}
                                </a>
                            </span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
