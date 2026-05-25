"use client";
import { useState } from 'react';
import Image from "next/image";
import Oneko from "@/components/Oneko";
import JitterText from "@/components/JitterText";
import WavyText from "@/components/WavyText";

// Kleine Hilfskomponente für die Kommandozeilen-Eingabe
const Prompt = ({ command }: { command: string }) => (
    <div className="mt-8 mb-4">
      <span className="text-[#bd4954] font-bold">root@sandrp.de</span>
      <span className="text-zinc-500"> :~$ </span>
      <span className="text-zinc-100 font-semibold">{command}</span>
    </div>
);

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [terminalClosed, setTerminalClosed] = useState(false);
  const bannerCode = `<a href="https://sandrp.de/" target="_blank"><img src="https://sandrp.de/banners/sandrp.png" alt="sandrp.de" width="88" height="31"></a>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bannerCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset nach 2 Sek.
  };

  const handleCloseTerminal = () => {
    setTerminalClosed(true);
  };

  const handleReopenTerminal = () => {
    setTerminalClosed(false);
  };

  return (
      // Der Haupt-Container erzwingt einen dunklen Hintergrund, da Terminal-Seiten dunkel sein sollten
      <div className="relative min-h-screen bg-[#050505] text-zinc-300 p-4 sm:p-8 flex justify-center selection:bg-[#bd4954]/70 selection:text-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
          style={{
            backgroundImage: "url('/nebula.jpg')",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <Oneko />
        {/* Das "Terminal-Fenster" */}
        <main className="relative z-10 w-full max-w-4xl flex flex-col ">
          {terminalClosed ? (
            <div className="flex flex-col items-center justify-center gap-6 p-12 text-center min-h-96">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">What?!</h2>
                <p className="text-zinc-300 mb-6 max-w-md">
                  Why the hack did you do this?? You monster! The terminal is now closed and you can&apos;t see all the cool stuff I put there for you!
                </p>
              </div>
               <button
                 onClick={handleReopenTerminal}
                 className="px-3 py-1.5 bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-[#bd4954] hover:text-[#bd4954] border transition-all cursor-pointer"
               >
                 <JitterText text="im sorry :(" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col bg-[#060606] border border-zinc-800 p-6">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-6 text-xs text-zinc-600">
                <span>{new Date().toLocaleTimeString('de-DE')} (Europe/Berlin) | sandrp.de</span>
                <button
                  onClick={handleCloseTerminal}
                  className="px-2 py-0.5 text-[#bd4954] bg-[#bd4954]/10 border border-[#bd4954]/5 hover:border-[#bd4954] transition-colors cursor-pointer"
                >
                  x
                </button>
              </div>

              <pre className="hidden lg:block font-bold text-xs sm:text-sm md:text-base lg:text-base leading-tight mb-8 overflow-x-auto text-left">
                <span className="text-[#bd4954]">{`                        _                    _      \n`}</span>
                <span className="text-[#bd4954]">{`   ___  __ _ _ __    __| |_ __ _ __       __| | ___ \n`}</span>
                <span className="text-[#bd4954]">{`  / __|/ _\` | '_ \\ / _ | | '__| '_ \\     / _\` |/ _ \\\n`}</span>
                <span className="text-[#bd4954]">{`  \\__ \\ (_| | | | | (_|| | |  | |_) | _ | (_| |  __/\n`}</span>
                <span className="text-[#bd4954]">{`  |___/\\__,_|_| |_|\\___|_|_|  | .__/ (_) \\__,_|\\___|\n`}</span>
                <span className="text-[#bd4954]">{`                              |_|               `}</span>
              </pre>

              <Prompt command="glow about_me.md" />
                <div className="border border-zinc-800 p-4 sm:p-6 relative bg-[#0a0a0a] hover:border-[#bd4954]/50 transition-colors">

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                   {/* Profilbild Bereich */}
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
                      <p className="text-zinc-400">founder of <a href="https://dezentrale-erkelenz.de" target="_blank" rel="noopener noreferrer" className="underline text-[15px] md:text-base">Dezentrale Erkelenz</a></p>
                      <p className="text-zinc-400">you can find me there
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20" className="inline-block ml-1" style={{transform: 'translateY(-5px)'}}>
                          <path
                            d="M 20,80 L 80,80 L 80,45 M 70,55 L 80,45 L 90,55"
                            fill="none"
                            stroke="#9CA3AF"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                      <p className="text-zinc-400"><WavyText text="Developer" /> or something like that :3</p>
                      <p className="text-zinc-500 text-sm mt-1">Location: Erkelenz, NRW</p>
                    </div>
                  </div>
                  
                  <Image
                      className="hidden md:block absolute -top-12 right-5 text-white pointer-events-none stroke-current rotate-10"
                      src={"/pins/nonbinary_flag.png"}
                      alt={"Nonbinary Flag"}
                      width={120}
                      height={120}
                      style={{imageRendering: 'pixelated'}}
                  />
                  <Image
                      className="md:hidden absolute -top-5 -right-5 text-white pointer-events-none stroke-current rotate-10"
                      src={"/pins/nonbinary_flag.png"}
                      alt={"Nonbinary Flag"}
                      width={64}
                      height={64}
                      style={{imageRendering: 'pixelated'}}
                  />
                  
                </div>
              </div>

              <Prompt command="./socials.sh" />
               <div className="flex flex-col gap-2 pl-2 bg-[#0a0a0a] border border-zinc-800 p-4 group hover:border-[#bd4954]/50 transition-colors relative">
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

              </div>

              <Prompt command="curl https://sandrp.de/pgp.asc" />
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#0a0a0a] border border-zinc-800 p-4 group hover:border-[#bd4954]/50 transition-colors">
                 <div className="flex items-center gap-3">
                   {/* Ein kleines Icon (Schlüssel-Symbol) */}
                   <svg className={"w-6 h-6 shrink-0"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd4954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M15 6v6h6l-2 2-2-2v6h-2v-2h-2v2h-2v-4a7 7 0 1 1 7-10Z"/>
                     <circle cx="9" cy="9" r="2" fill="#bd4954"/>
                   </svg>
                  <div>
                    <span className="text-zinc-100 font-mono text-sm block">pgp.asc</span>
                    <span className="text-zinc-500 text-xs uppercase tracking-widest">Fingerprint: B55E E28C 143A C940 1CB2  65C0 A318 3B7B 8081 B136</span>
                  </div>
                </div>
                <a
                    href="/pgp.asc"
                    download
                    className="mt-4 sm:mt-0 flex items-center gap-2 text-xs font-bold bg-zinc-900 text-zinc-400 border border-zinc-800 px-3 py-1.5 hover:border-[#bd4954] hover:text-[#bd4954] transition-all"
                >
                  DOWNLOAD PGP
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                </a>
              </div>

              <Prompt command="curl https://sandrp.de/badge.html" />
               <div className="border border-zinc-800 bg-[#0a0a0a] group hover:border-[#bd4954]/50 transition-colors">
                <div className="p-3 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">My own little <WavyText text="Web Badge" /> ^^</h3>
                  <span className="text-[10px] font-mono text-zinc-600">88x31px</span>
                </div>

                <div className="p-4 sm:hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="shrink-0">
                      <Image
                          src="/badges/sandrp.png"
                          alt="sandrp.de Banner"
                          width={88}
                          height={31}
                          style={{ imageRendering: 'pixelated' }}
                      />
                    </div>

                    <button
                        onClick={handleCopy}
                        className={`shrink-0 px-3 py-1.5 text-[10px] uppercase font-bold transition-all border h-fit whitespace-nowrap ${
                            copied
                                ? 'bg-[#bd4954] text-black border-[#bd4954]'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-[#bd4954] hover:text-[#bd4954] cursor-pointer'
                        }`}
                    >
                      {copied ? 'Copied!' : 'Copy Code'}
                    </button>
                  </div>

                  <pre className="bg-black p-3 text-[9px] text-zinc-500 border border-zinc-900 overflow-x-auto font-mono scrollbar-thin scrollbar-thumb-zinc-800 leading-relaxed w-full">
                    {bannerCode}
                  </pre>
                </div>

                <div className="hidden sm:flex p-4 items-center gap-4">
                  <div className="shrink-0">
                    <Image
                        src="/badges/sandrp.png"
                        alt="sandrp.de Banner"
                        width={88}
                        height={31}
                        style={{ imageRendering: 'pixelated' }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <pre className="bg-black p-3 text-[10px] text-zinc-500 border border-zinc-900 overflow-x-auto font-mono scrollbar-thin scrollbar-thumb-zinc-800">
                      {bannerCode}
                    </pre>
                  </div>

                   <button
                       onClick={handleCopy}
                       className={`shrink-0 px-3 py-1 text-[10px] uppercase font-bold transition-all border h-fit ${
                           copied
                               ? 'bg-[#bd4954] text-black border-[#bd4954]'
                               : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-[#bd4954] hover:text-[#bd4954] cursor-pointer'
                       }`}
                   >
                    {copied ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-24 mb-12 flex flex-wrap gap-2 justify-center">
            <a
                href="https://sandrp.de/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/sandrp.png"
                  alt="Sandrp Banner"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://enjarai.dev/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="https://enjarai.dev/assets/my-button.png"
                  alt="Enjarai Banner"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://www.youtube.com/LinusTechTips"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/free_tech_tips.png"
                  alt="Free Tech Tips Banner"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://trans.fish/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/trans_rights.png"
                  alt="Trans Rights Banner"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://www.debian.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/powered-by-debian.gif"
                  alt="Powered By Debian Banner"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://trans.fish/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/flag-progress.png"
                  alt="trans.fish"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://github.com/gorhill/uBlock"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/ublock-origin.png"
                  alt="ublock origin Banner"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://kinderschutzbund-erkelenz.de/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/dksb.png"
                  alt="Deutscher Kinderschutzbund Logo"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://jugendhackt.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/jugendhackt.png"
                  alt="Jugendhackt Logo"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://dezentrale-erkelenz.de/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/dezentrale.png"
                  alt="Dezentrale Erkelenz Logo"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://lina.sh/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/lina.gif"
                  alt={"Lina.sh Gif"}
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://codeberg.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/badges/codeberg.png"
                  alt="Codeberg Logo"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <Image
                src="/badges/tom-scott.png"
                alt="Tom Scott in a Web Badge"
                width={88}
                height={31}
                style={{imageRendering: 'pixelated'}}
            />
            <a
                href="https://aurakle.dev"
                target="_blank"
            >
              <Image
                  src="https://aurakle.dev/images/buttons/mine.webp"
                  alt="The Starwatch Banner"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <a
                href="https://freifunk.net/"
                target="_blank"
            >
              <Image
                  src="/badges/freifunk.png"
                  alt="Freifunk Banner"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
          </div>
        </main>
      </div>
  );
}