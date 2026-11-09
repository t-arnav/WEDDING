import { Component, useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import TopBar from "@/components/wedding/TopBar";
import MusicToggle from "@/components/wedding/MusicToggle";
import PetalRain from "@/components/wedding/PetalRain";
import Hero from "@/sections/Hero";
import Invitation from "@/sections/Invitation";
import Ceremonies from "@/sections/Ceremonies";
import SaveTheDate from "@/sections/SaveTheDate";
import Rsvp from "@/sections/Rsvp";
import Footer from "@/sections/Footer";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-cream p-8 text-center font-body text-maroon">
                    Something went wrong. Please refresh the page.
                </div>
            );
        }
        return this.props.children;
    }
}

function WeddingInvitation() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
        window.__lenis = lenis;
        let rafId;
        const loop = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-clip bg-cream font-body text-maroon">
            <PetalRain />
            <TopBar />
            <MusicToggle />
            <main>
                <Hero />
                <Invitation />
                <Ceremonies />
                <SaveTheDate />
                <Rsvp />
            </main>
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <ErrorBoundary>
            <WeddingInvitation />
        </ErrorBoundary>
    );
}
