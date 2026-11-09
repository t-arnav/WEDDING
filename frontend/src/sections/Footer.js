import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { WEDDING } from "@/data/wedding";
import { scrollToTop } from "@/lib/scroll";
import { FlowerMark } from "@/components/wedding/Ornament";

export default function Footer() {
    return (
        <footer
            id="footer"
            data-testid="footer-section"
            className="relative overflow-hidden bg-maroon text-ivory"
        >
            <div className="relative">
                <img
                    src="/images/footer_pathway.jpg"
                    alt="Illustrated wedding pathway lined with diyas and petals leading to a glowing mandap"
                    loading="lazy"
                    className="h-[380px] w-full object-cover md:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-maroon/85" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="absolute inset-x-0 bottom-0 px-4 pb-10 text-center"
                >
                    <p className="font-hand text-lg text-[#FFE3C2] drop-shadow-[0_2px_6px_rgba(90,36,30,0.9)] md:text-2xl">
                        Om Shree Ganeshay Namah
                    </p>
                    <h2 className="mt-1 font-display text-4xl drop-shadow-[0_2px_10px_rgba(107,45,38,0.8)] md:text-6xl" data-testid="footer-names">
                        {WEDDING.groom} <span className="text-white">&amp;</span> {WEDDING.bride}
                    </h2>
                    <p className="mt-1 font-heading text-lg text-ivory/95 md:text-2xl" data-testid="footer-date">
                        {WEDDING.invite.dateMarquee}
                    </p>
                    <p className="mx-auto mt-3 max-w-md font-body text-sm text-ivory/90 md:text-base">
                        With the blessings of our elders and the grace of the Almighty, we await your
                        gracious presence.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-gold/30 bg-[#5A241E] px-4 py-5 sm:flex-row">
                <p className="flex items-center gap-2 text-sm text-ivory/85 md:text-base">
                    <FlowerMark className="h-4 w-4 text-marigold" />
                    Crafted with love for our wedding celebration
                </p>
                <button
                    onClick={scrollToTop}
                    data-testid="back-to-top-btn"
                    aria-label="Back to top"
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold/60 text-marigold transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-maroon"
                >
                    <ArrowUp className="h-4 w-4" />
                </button>
            </div>
        </footer>
    );
}
