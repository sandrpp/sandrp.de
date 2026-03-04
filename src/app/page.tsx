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

          {/* PGP KEY */}
          <Prompt command="curl https://sandrp.de/pgp" />
          <div className="flex justify-between items-center pl-2">
            <span className="text-zinc-500 animate-pulse">Downloading...</span>
            <a href="#" className="text-zinc-400 hover:text-white border-b border-transparent hover:border-white pb-0.5">
              Download PGP ↓
            </a>
          </div>

          {/* Platzhalter für die vielen kleinen "Webring" Buttons unten */}
          <div className="mt-24 mb-12 flex flex-wrap gap-2 justify-center opacity-50 hover:opacity-100 transition-opacity">
            {/* Hier kommen später die kleinen 88x31 px Bilder rein */}
            <div className="w-[88px] h-[31px] border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-600">BUTTON</div>
            <div className="w-[88px] h-[31px] border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-600">BUTTON</div>
            <div className="w-[88px] h-[31px] border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-600">BUTTON</div>
          </div>

        </main>
      </div>
  );
}