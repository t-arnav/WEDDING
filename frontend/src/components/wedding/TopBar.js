import { Heart } from "lucide-react";
import { scrollToId, scrollToTop } from "@/lib/scroll";

export default function TopBar() {
    return (
        <header
            data-testid="top-bar"
            className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-ivory/90 via-ivory/55 to-transparent px-4 py-3 backdrop-blur-[2px] md:px-8"
        >
            <button
                onClick={scrollToTop}
                data-testid="top-bar-monogram"
                aria-label="Back to top"
                className="flex items-center gap-1.5 font-display text-xl text-maroon drop-shadow-sm transition-transform hover:scale-105 md:text-2xl"
            >
                K
                <Heart className="h-3.5 w-3.5 fill-rose text-rose" />
                S
            </button>
            <a
                href="#rsvp"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToId("rsvp");
                }}
                data-testid="top-bar-rsvp-btn"
                className="rounded-full border-2 border-gold bg-ivory/85 px-4 py-1.5 text-sm font-semibold tracking-wide text-maroon shadow-sm transition-colors duration-300 hover:bg-gold hover:text-ivory"
            >
                RSVP
            </a>
        </header>
    );
}
