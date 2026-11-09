import { useEffect, useRef, useState } from "react";
import { Loader2, Music, VolumeX } from "lucide-react";

export default function MusicToggle() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [buffering, setBuffering] = useState(false);

    useEffect(() => {
        const audio = new Audio("/audio/Arijit-Singh-SnapYT.App.mp3");
        audio.loop = true;
        audio.volume = 0.6;
        audio.preload = "auto";
        const onPlaying = () => {
            setPlaying(true);
            setBuffering(false);
        };
        const onPause = () => setPlaying(false);
        const onWaiting = () => setBuffering(true);
        const onEnded = () => setPlaying(false);
        audio.addEventListener("playing", onPlaying);
        audio.addEventListener("pause", onPause);
        audio.addEventListener("waiting", onWaiting);
        audio.addEventListener("ended", onEnded);
        audioRef.current = audio;
        return () => {
            audio.pause();
            audio.src = "";
            audioRef.current = null;
        };
    }, []);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) {
            setBuffering(true);
            audio.play().catch(() => setBuffering(false));
        } else {
            audio.pause();
            setBuffering(false);
        }
    };

    return (
        <button
            onClick={toggle}
            data-testid="music-toggle-btn"
            aria-label={playing ? "Mute background music" : "Play background music"}
            title={playing ? "Mute music" : "Play music"}
            className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/70 bg-ivory/90 text-maroon shadow-lg backdrop-blur transition-transform hover:scale-110 active:scale-95 ${
                playing ? "animate-glow-pulse" : ""
            }`}
        >
            {buffering ? (
                <Loader2 className="h-5 w-5 animate-spin" />
            ) : playing ? (
                <Music className="h-5 w-5" />
            ) : (
                <VolumeX className="h-5 w-5" />
            )}
        </button>
    );
}
