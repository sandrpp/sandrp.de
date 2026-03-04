import Image from "next/image";

// Kleine Hilfskomponente für die Kommandozeilen-Eingabe
const Prompt = ({ command }: { command: string }) => (
    <div className="mt-8 mb-4">
      <span className="text-[#d17780] font-bold">root@sandrp.de</span>
      <span className="text-zinc-500"> :~$ </span>
      <span className="text-zinc-100 font-semibold">{command}</span>
    </div>
);

export default function Home() {
  return (
      // Der Haupt-Container erzwingt einen dunklen Hintergrund, da Terminal-Seiten dunkel sein sollten
      <div className="min-h-screen bg-[#050505] text-zinc-300 p-4 sm:p-8 flex justify-center selection:bg-[#bd4954] selection:text-black">

        {/* Das "Terminal-Fenster" */}
        <main className="w-full max-w-4xl flex flex-col">

          {/* Terminal Header (Optional, wie bei Lina oben) */}
          <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-6 text-xs text-zinc-600">
            <span>{new Date().toLocaleTimeString('de-DE')} (Europe/Berlin) | sandrp.de</span>
            <span className="text-red-500 bg-red-500/10 px-2 py-0.5 rounded cursor-pointer hover:bg-red-500 hover:text-white transition-colors">x</span>
          </div>

          {/* ASCII Art Logo */}
          <pre className="text-[#873750] font-bold text-xs sm:text-sm md:text-base leading-tight mb-8 overflow-x-auto">
{`                     _                    _      
 ___  __ _ _ __   __| |_ __ _ __       __| | ___ 
/ __|/ _\` | '_ \\ / _\` | '__| '_ \\     / _\` |/ _ \\
\\__ \\ (_| | | | | (_| | |  | |_) | _ | (_| |  __/
|___/\\__,_|_| |_|\\__,_|_|  | .__/ (_) \\__,_|\\___|
                           |_|               `}
        </pre>

          {/* --- SECTION: ABOUT ME --- */}
          <Prompt command="glow about_me.md" />
          <div className="border border-zinc-800 p-4 sm:p-6 relative rounded-sm bg-[#0a0a0a]">
            {/* Label auf dem Rahmen */}
            <span className="absolute -top-3 left-4 bg-[#050505] px-2 text-zinc-500 text-sm">
            about_me.md
          </span>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Profilbild Bereich */}
              <div className="w-32 h-32 border border-[#bd4954] p-1 shrink-0 relative">
                <Image
                    src="/avatar.png" // Der Name deiner Datei im public-Ordner
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
                  <p className="text-zinc-400">Developer @ RWTH-Aachen | 18 Jahre alt | </p>
                  <p className="text-zinc-400">Hobby-Developer @ SoulSMP</p>
                  <p className="text-zinc-500 text-sm mt-1">Location: Aachen</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- SECTION: SOCIALS --- */}
          <Prompt command="./socials.sh" />
          <div className="flex flex-col gap-2 pl-2">
            <a href="#" className="hover:text-[#d17780] transition-colors w-max">
              <span className="text-zinc-500 mr-4">[gh]</span> github.com/sandrpp
            </a>
            <a href="#" className="hover:text-[#d17780] transition-colors w-max">
              <span className="text-zinc-500 mr-4">[dc]</span> @sandrp
            </a>
            <a href="mailto:me@sandrp.de" className="hover:text-[#d17780] transition-colors w-max">
              <span className="text-zinc-500 mr-4">[mail]</span> me@sandrp.de
            </a>
            <a href="#" className="hover:text-[#d17780] transition-colors w-max">
              <span className="text-zinc-500 mr-4">[matrix]</span> @me:sandrp.de
            </a>
          </div>

          {/* --- SECTION: PGP KEY --- */}
          <Prompt command="curl https://sandrp.de/pgp.asc" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#0a0a0a] border border-zinc-800 p-4 rounded-sm group hover:border-[#d17780]/50 transition-colors">
            <div className="flex items-center gap-3">
              {/* Ein kleines Icon (Schlüssel-Symbol) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d17780" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6v6h6l-2 2-2-2v6h-2v-2h-2v2h-2v-4a7 7 0 1 1 7-10Z"/>
                <circle cx="9" cy="9" r="2" fill="#d17780"/>
              </svg>
              <div>
                <span className="text-zinc-100 font-mono text-sm block">pgp.asc</span>
                <span className="text-zinc-500 text-xs uppercase tracking-widest">Fingerprint: B55E E28C 143A C940 1CB2  65C0 A318 3B7B 8081 B136</span>
              </div>
            </div>

            <a
                href="/pgp.asc"
                download
                className="mt-4 sm:mt-0 flex items-center gap-2 text-xs font-bold text-[#d17780] border border-[#d17780] px-3 py-1.5 hover:bg-[#d17780] hover:text-black transition-all"
            >
              DOWNLOAD PGP
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
            </a>
          </div>

          {/* Platzhalter für die vielen kleinen "Webring" Buttons unten */}
          <div className="mt-24 mb-12 flex flex-wrap gap-2 justify-center">
            <a
                href="https://enjarai.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  src="https://enjarai.dev/assets/my-button.png"
                  alt="enjarai.dev"
                  width={88}
                  height={31}
                  style={{imageRendering: 'pixelated'}}
              />
            </a>
            <img
                src="/banners/trans_rights.png"
                width={88}
                height={31}
                style={{imageRendering: 'pixelated'}}
            />
            <img
                src="/banners/powered-by-debian.gif"
                width={88}
                height={31}
                style={{imageRendering: 'pixelated'}}
            />
            <a
                href="https://trans.fish/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  src="/banners/flag-progress.png"
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
              <img
                  src="/banners/ublock-origin.png"
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