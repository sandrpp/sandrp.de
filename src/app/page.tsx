"use client";
import { useState } from 'react';
import Image from "next/image";
import Oneko from "@/components/Oneko";
import JitterText from "@/components/JitterText";
import WavyText from "@/components/WavyText";

// Window-Element, das den "Command" und die "Geschlossen"-Zustände händelt
const Window = ({
                  command,
                  children,
                  onClose,
                  closedMessage,
                  isClosed = false,
                  onRestore,
                  className = ""
                }: {
  command: string,
  children?: React.ReactNode,
  onClose?: () => void,
  closedMessage?: string,
  isClosed?: boolean,
  onRestore?: () => void,
  className?: string
}) => {
  if (isClosed && closedMessage && onRestore) {
    return (
        <div className={`flex flex-col items-center justify-center p-6 bg-[#0a0a0a] border border-zinc-800 hover:border-[#bd4954]/50 transition-colors shadow-2xl text-center min-h-[150px] ${className}`}>
          <p className="text-zinc-400 mb-4 font-mono text-sm">{closedMessage}</p>
          <button
              onClick={onRestore}
              className="px-3 py-1.5 bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-[#bd4954] hover:text-[#bd4954] border transition-all cursor-pointer text-xs font-mono uppercase"
          >
            <JitterText text="restore" />
          </button>
        </div>
    );
  }

  return (
      <div className={`flex flex-col bg-[#0a0a0a] border border-zinc-800 shadow-2xl hover:border-[#bd4954]/50 transition-colors duration-300 relative ${className}`}>
        <div className="flex justify-between items-center border-b border-zinc-800 px-3 py-1.5 text-xs text-zinc-500 font-mono bg-zinc-900/40">
        <span>
          <span className="text-[#bd4954] font-bold">root@sandrp.de</span>
          <span className="text-zinc-500"> :~$ </span>
          <span className="text-zinc-100 font-semibold">{command}</span>
        </span>
          {/* Close-Button wird nur gerendert, wenn onClose übergeben wurde */}
          {onClose && (
              <button
                  onClick={onClose}
                  className="text-[#bd4954] hover:bg-[#bd4954]/20 px-2 py-0.5 rounded-sm cursor-pointer transition-colors"
              >
                x
              </button>
          )}
        </div>
        <div className="p-4 sm:p-6 relative">
          {children}
        </div>
      </div>
  );
};

export default function Home() {
  const [copied, setCopied] = useState(false);

  // State für jedes einzelne Fenster (About wurde entfernt)
  const [closedWindows, setClosedWindows] = useState({
    socials: false,
    pgp: false,
    badge: false
  });

  const bannerCode = `<a href="https://sandrp.de/" target="_blank"><img src="https://sandrp.de/banners/sandrp.png" alt="sandrp.de" width="88" height="31"></a>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bannerCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const closeWindow = (key: keyof typeof closedWindows) => {
    setClosedWindows(prev => ({ ...prev, [key]: true }));
  };

  const restoreWindow = (key: keyof typeof closedWindows) => {
    setClosedWindows(prev => ({ ...prev, [key]: false }));
  };

  return (
      // HIER ANGEPASST: lg:p-12 xl:p-16 hinzugefügt, um auf großen Screens mehr Puffer am Rand zu haben
      <div className="relative min-h-screen bg-[#050505] text-zinc-300 p-4 sm:p-8 lg:p-12 xl:p-16 flex flex-col items-center selection:bg-[#bd4954]/70 selection:text-black overflow-x-hidden">

        {/* Retro Background Effekte */}
        <div
            className="fixed inset-0 z-0 opacity-40 pointer-events-none"
            style={{ backgroundImage: "url('/nebula.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="fixed inset-0 z-0 bg-black/80 pointer-events-none" />
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />
        <div className="fixed bottom-0 left-0 w-full h-16 z-0 border-t-2 border-zinc-800 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgNDBoMTBWMjBoMTB2MTBoMTBWMTBoMTB2MzB6IiBmaWxsPSIjMTExIi8+PC9zdmc+')] opacity-50" />

        <Oneko />

        <main className="relative z-10 w-full max-w-5xl mt-8 sm:mt-12 flex-1">
          {/* Das neue Layout: Grid für den Fenster-Look */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative">

            {/* LINKE SPALTE */}
            <div className="lg:col-span-6 flex flex-col gap-6 relative">

              {/* Fenster 1: About Me (Kein Close-Button) */}
              <Window
                  command="glow about_me.md"
                  // HIER ANGEPASST: lg: Präfix hinzugefügt, damit es auf dem Handy nicht rutscht
                  className="lg:-translate-x-8 lg:-translate-y-4"
              >
                {/* Nonbinary Flag relativ zum Haupt-Fenster */}
                <a href="https://pride.sandrp.de/" rel="noopener noreferrer">
                  <Image
                      className="absolute -top-8 -right-1 w-23 h-23 sm:-top-12 sm:-right-5 sm:w-[90px] sm:h-[90px] text-white z-20 rotate-12"                    src={"/pins/nonbinary_flag.png"}
                      alt={"Nonbinary Flag"}
                      width={90}
                      height={90}
                      style={{imageRendering: 'pixelated'}}
                  />
                </a>
                <div className="absolute w-md rotate-80 top-70 -right-57 lg:-top-23 lg:-right-125 lg:rotate-348 text-white z-20">
                  {"<- click me"}
                </div>

                    {/* Angepasste Schriftgröße */}
                <pre className="hidden sm:block font-bold text-[10px] lg:text-[11px] xl:text-xs leading-tight mb-8 text-left whitespace-pre overflow-hidden w-full">
                  <span className="text-[#bd4954]">{`                        _                    _      \n`}</span>
                  <span className="text-[#bd4954]">{`   ___  __ _ _ __    __| |_ __ _ __       __| | ___ \n`}</span>
                  <span className="text-[#bd4954]">{`  / __|/ _\` | '_ \\ / _ | | '__| '_ \\     / _\` |/ _ \\\n`}</span>
                  <span className="text-[#bd4954]">{`  \\__ \\ (_| | | | | (_|| | |  | |_) | _ | (_| |  __/\n`}</span>
                  <span className="text-[#bd4954]">{`  |___/\\__,_|_| |_|\\___|_|_|  | .__/ (_) \\__,_|\\___|\n`}</span>
                  <span className="text-[#bd4954]">{`                              |_|               `}</span>
                </pre>

                <div className="flex flex-col sm:flex-row gap-6 items-start w-full">
                  <div className="w-32 h-32 border border-[#bd4954] p-1 shrink-0 relative">
                    <Image
                        src="/avatar.png"
                        alt="Sandro Avatar"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                        priority
                    />
                  </div>

                  <div className="flex flex-col gap-4 w-full">
                    <div>
                      <h1 className="text-xl font-bold text-white mb-1">Sandro</h1>
                      <p className="text-zinc-400">18 years old | any pronouns</p>
                      <p className="text-zinc-400">founder of <a href="https://dezentrale-erkelenz.de" target="_blank" rel="noopener noreferrer" className="underline text-[15px] md:text-base hover:text-[#bd4954] transition-colors">Dezentrale Erkelenz</a></p>
                      <p className="text-zinc-400 flex items-center flex-wrap">you can find me there
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20" className="inline-block ml-1" style={{transform: 'translateY(-2px)'}}>
                          <path d="M 20,80 L 80,80 L 80,45 M 70,55 L 80,45 L 90,55" fill="none" stroke="#9CA3AF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </p>
                      <p className="text-zinc-400"><WavyText text="Developer" /> or something like that :3</p>
                      <p className="text-zinc-500 text-sm mt-1">Location: Erkelenz, NRW</p>
                    </div>
                  </div>
                </div>
              </Window>

              {/* Fenster 2: Socials */}
              <Window
                  command="./socials.sh"
                  isClosed={closedWindows.socials}
                  onClose={() => closeWindow('socials')}
                  onRestore={() => restoreWindow('socials')}
                  closedMessage="guess I'm antisocial now..."
                  // HIER ANGEPASST: Ein leichter Shift nach rechts auf großen Bildschirmen
                  className="lg:translate-x-6 lg:translate-y-2 z-10"
              >
                <div className="flex flex-col gap-2 font-mono text-sm sm:text-base">
                  <a href="https://github.com/sandrpp" className="hover:text-[#bd4954] transition-colors w-max">
                    <span className="text-zinc-500 mr-4">[gh]</span> github.com/sandrpp
                  </a>
                  <a href="#" className="hover:text-[#bd4954] transition-colors w-max">
                    <span className="text-zinc-500 mr-4">[dc]</span> @sandrp
                  </a>
                  <a href="mailto:me@sandrp.de" className="hover:text-[#bd4954] transition-colors w-max">
                    <span className="text-zinc-500 mr-4">[mail]</span> me@sandrp.de
                  </a>
                  <a href="https://matrix.to/#/@me:sandrp.de" className="hover:text-[#bd4954] transition-colors w-max">
                    <span className="text-zinc-500 mr-4">[matrix]</span> @me:sandrp.de
                  </a>
                  <a href="https://discord.gg/32tpYxetAu" className="hover:text-[#bd4954] transition-colors w-max">
                    <span className="text-zinc-500 mr-4">[dc-server]</span> "Water System"
                  </a>
                </div>
              </Window>

            </div>

            {/* RECHTE SPALTE (Desktop-mäßig versetzt) */}
            <div className="lg:col-span-6 flex flex-col gap-6 lg:mt-24">

              {/* Fenster 3: PGP */}
              <Window
                  command="curl https://sandrp.de/pgp.asc"
                  isClosed={closedWindows.pgp}
                  // HIER ANGEPASST: lg: Präfix
                  className="lg:-translate-x-4 lg:-translate-y-4"
                  onClose={() => closeWindow('pgp')}
                  onRestore={() => restoreWindow('pgp')}
                  closedMessage="now you can't send secure mails :("
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="flex items-center gap-3 w-full">
                    <svg className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd4954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 6v6h6l-2 2-2-2v6h-2v-2h-2v2h-2v-4a7 7 0 1 1 7-10Z"/>
                      <circle cx="9" cy="9" r="2" fill="#bd4954"/>
                    </svg>
                    <div className="min-w-0 flex-1">
                      <span className="text-zinc-100 font-mono text-sm block">pgp.asc</span>
                      <span className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest break-all block">Fingerprint: B55E E28C 143A C940 1CB2  65C0 A318 3B7B 8081 B136</span>
                    </div>
                  </div>
                  <a
                      href="/pgp.asc"
                      download
                      className="mt-4 sm:mt-0 flex shrink-0 items-center gap-2 text-xs font-bold bg-zinc-900 text-zinc-400 border border-zinc-800 px-3 py-1.5 hover:border-[#bd4954] hover:text-[#bd4954] transition-all"
                  >
                    DOWNLOAD PGP
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                    </svg>
                  </a>
                </div>
              </Window>

              {/* Fenster 4: Web Badge */}
              <Window
                  command="curl https://sandrp.de/badge.html"
                  isClosed={closedWindows.badge}
                  onClose={() => closeWindow('badge')}
                  onRestore={() => restoreWindow('badge')}
                  closedMessage="no web badge for you..."
                  // HIER ANGEPASST: lg: Präfix
                  className="!p-0 lg:translate-x-4 z-10"
              >
                <div className="p-3 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">My own little <WavyText text="Web Badge" /> ^^</h3>
                  <span className="text-[10px] font-mono text-zinc-600">88x31px</span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="shrink-0">
                    <Image
                        src="/badges/sandrp.png"
                        alt="sandrp.de Banner"
                        width={88}
                        height={31}
                        style={{ imageRendering: 'pixelated' }}
                    />
                  </div>

                  <div className="flex-1 w-full min-w-0">
                    <pre className="bg-black p-3 text-[9px] sm:text-[10px] text-zinc-500 border border-zinc-900 overflow-hidden font-mono leading-relaxed truncate">
                      {bannerCode}
                    </pre>
                  </div>

                  <button
                      onClick={handleCopy}
                      className={`shrink-0 px-3 py-1.5 sm:py-1 text-[10px] uppercase font-bold transition-all border h-fit w-full sm:w-auto ${
                          copied
                              ? 'bg-[#bd4954] text-black border-[#bd4954]'
                              : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-[#bd4954] hover:text-[#bd4954] cursor-pointer'
                      }`}
                  >
                    {copied ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
              </Window>

            </div>
          </div>
        </main>

        {/* Die Badges schweben weiterhin friedlich unten */}
        <div className="relative z-10 mt-24 mb-12 flex flex-wrap gap-2 justify-center max-w-4xl">
          <a href="https://sandrp.de/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/sandrp.png" alt="Sandrp Banner" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://enjarai.dev/" target="_blank" rel="noopener noreferrer">
            <Image src="https://enjarai.dev/assets/my-button.png" alt="Enjarai Banner" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://www.youtube.com/LinusTechTips" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/free_tech_tips.png" alt="Free Tech Tips Banner" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://trans.fish/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/trans_rights.png" alt="Trans Rights Banner" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://www.debian.org/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/powered-by-debian.gif" alt="Powered By Debian Banner" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://minecraft.net/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/minecraft.png" alt="Minecraft Banner" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://trans.fish/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/flag-progress.png" alt="trans.fish" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://github.com/gorhill/uBlock" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/ublock-origin.png" alt="ublock origin Banner" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://kinderschutzbund-erkelenz.de/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/dksb.png" alt="Deutscher Kinderschutzbund Logo" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://jugendhackt.org/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/jugendhackt.png" alt="Jugendhackt Logo" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://dezentrale-erkelenz.de/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/dezentrale.png" alt="Dezentrale Erkelenz Logo" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://lina.sh/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/lina.gif" alt="Lina.sh Gif" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://codeberg.org/" target="_blank" rel="noopener noreferrer">
            <Image src="/badges/codeberg.png" alt="Codeberg Logo" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <Image src="/badges/tom-scott.png" alt="Tom Scott in a Web Badge" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          <a href="https://aurakle.dev" target="_blank">
            <Image src="https://aurakle.dev/images/buttons/mine.webp" alt="The Starwatch Banner" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
          <a href="https://freifunk.net/" target="_blank">
            <Image src="/badges/freifunk.png" alt="Freifunk Banner" width={88} height={31} style={{imageRendering: 'pixelated'}} />
          </a>
        </div>
      </div>
  );
}