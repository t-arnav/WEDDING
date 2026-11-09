export const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) {
        window.__lenis.scrollTo(el, { duration: 1.5 });
    } else {
        el.scrollIntoView({ behavior: "smooth" });
    }
};

export const scrollToTop = () => {
    if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.5 });
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};
