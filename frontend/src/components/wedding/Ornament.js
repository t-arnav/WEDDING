export const FlowerMark = ({ className = "h-6 w-6" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 1.5c1.7 2.5 1.7 5.6 0 8.1-1.7-2.5-1.7-5.6 0-8.1Z" />
        <path d="M12 1.5c1.7 2.5 1.7 5.6 0 8.1-1.7-2.5-1.7-5.6 0-8.1Z" transform="rotate(90 12 12)" />
        <path d="M12 1.5c1.7 2.5 1.7 5.6 0 8.1-1.7-2.5-1.7-5.6 0-8.1Z" transform="rotate(180 12 12)" />
        <path d="M12 1.5c1.7 2.5 1.7 5.6 0 8.1-1.7-2.5-1.7-5.6 0-8.1Z" transform="rotate(270 12 12)" />
        <circle cx="12" cy="12" r="2.4" />
    </svg>
);

export const Divider = ({ className = "" }) => (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`} aria-hidden="true">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70 md:w-24" />
        <FlowerMark className="h-5 w-5" />
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70 md:w-24" />
    </div>
);

export const CornerOrnament = ({ position = "top-left", className = "" }) => {
    const rotations = {
        "top-left": "",
        "top-right": "scaleX-[-1]",
        "bottom-left": "scaleY-[-1]",
        "bottom-right": "scaleX-[-1] scaleY-[-1]",
    };
    return (
        <svg
            viewBox="0 0 80 80"
            fill="none"
            aria-hidden="true"
            className={`pointer-events-none absolute h-12 w-12 text-gold/70 md:h-16 md:w-16 ${rotations[position]} ${className}`}
        >
            <path d="M4 76 C4 36 36 4 76 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M4 62 C4 32 32 4 62 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
            <path d="M20 34 C26 28 32 28 34 34 C32 40 24 40 20 34 Z" fill="currentColor" opacity="0.85" />
            <circle cx="12" cy="14" r="3" fill="currentColor" opacity="0.85" />
            <circle cx="26" cy="20" r="2" fill="currentColor" opacity="0.6" />
        </svg>
    );
};

export default Divider;
