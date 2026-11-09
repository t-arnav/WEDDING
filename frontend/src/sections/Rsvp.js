import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { WEDDING } from "@/data/wedding";
import { Divider, CornerOrnament } from "@/components/wedding/Ornament";

export default function Rsvp() {
    return (
        <section id="rsvp" data-testid="rsvp-section" className="dot-texture relative bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 44 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[2rem] border-2 border-rose/30 bg-ivory px-6 py-10 text-center shadow-[0_24px_60px_-24px_rgba(217,69,95,0.4)] md:rounded-[2.75rem] md:px-14 md:py-14"
                >
                    <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] border border-gold/40 md:inset-3 md:rounded-[2.3rem]" />
                    <CornerOrnament position="top-left" className="left-2 top-2" />
                    <CornerOrnament position="top-right" className="right-2 top-2" />
                    <CornerOrnament position="bottom-left" className="bottom-2 left-2" />
                    <CornerOrnament position="bottom-right" className="bottom-2 right-2" />

                    <p className="font-hand text-xl text-saffron md:text-2xl">
                        We look forward to celebrating this special occasion with you and creating cherished
                        memories.
                    </p>

                    <Divider className="mt-7" />

                    <h2 className="mt-6 font-heading text-3xl tracking-wide text-maroon md:text-4xl">RSVP</h2>
                    <p className="mt-3 font-display text-4xl text-rose md:text-5xl" data-testid="rsvp-name">
                        {WEDDING.rsvp.name}
                    </p>
                    <p className="mt-2 font-body text-lg text-maroon/85 md:text-xl" data-testid="rsvp-phone">
                        {WEDDING.rsvp.phoneDisplay}
                    </p>

                    <p className="mt-2 font-body text-lg text-maroon/85 md:text-xl" data-testid="rsvp-venue">
                        {WEDDING.rsvp.venue}
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href={WEDDING.rsvp.telHref}
                            data-testid="rsvp-call-btn"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-sunset px-7 py-3 font-semibold text-ivory shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose hover:shadow-xl sm:w-auto"
                        >
                            <Phone className="h-4 w-4" />
                            Call {WEDDING.rsvp.name}
                        </a>
                        <a
                            href={WEDDING.rsvp.whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="rsvp-whatsapp-btn"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-7 py-3 font-semibold text-ivory shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl sm:w-auto"
                        >
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
