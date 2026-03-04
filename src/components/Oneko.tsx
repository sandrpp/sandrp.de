"use client";
import { useEffect } from "react";

export default function Oneko() {
    useEffect(() => {
        // Falls das Script schon da ist, nicht nochmal laden
        if (document.getElementById("oneko-script")) return;

        const script = document.createElement("script");
        // Wir nehmen einen stabileren CDN Link
        script.src = "https://cdn.jsdelivr.net/gh/adryd325/oneko.js@main/oneko.js";
        script.id = "oneko-script";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            // Aufräumen, wenn die Seite gewechselt wird
            const s = document.getElementById("oneko-script");
            if (s) s.remove();
            const cat = document.getElementById("oneko");
            if (cat) cat.remove();
        };
    }, []);

    return null;
}