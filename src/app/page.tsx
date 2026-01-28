export default function Home() {
  return (
    <main className="w-full min-w-0 h-full flex flex-col items-center" style={{maxWidth: '100vw', overflowX: 'hidden'}}>
      <section className="w-7xl h-[500px] md:h-[500px] min-h-[600px] flex flex-col items-center justify-center gap-12 px-4">
        <div className="gap-6 flex flex-col items-center justify-center text-center">
          <a href="#">
            <div className="md:w-55 md:h-14 w-48 h-12 bg-bg-orange text-orange-500 rounded-full flex items-center justify-center gap-2 cursor-pointer">
              <span className="opacity-50 font-semibold md:text-lg text-base italic">Behind the Scenes</span>
              <span className="material-icons opacity-50 md:!text-2xl !text-xl">arrow_forward</span>
            </div>
          </a>
          <div className="text-center flex flex-col gap-4">
            <h1 className="font-bold md:text-6xl text-6xl leading-tight">
              <span className="md:inline block">ArchMC</span>
              <span className="md:inline block"> Statistics</span>
            </h1>
            <p className="md:text-2xl text-md md:max-w-150 max-w-96 text-center text-medium text-neutral-400 text-balance">Designed for competition, check out all statistics related to the ArchMC Server here.</p>
          </div>
        </div>
        
        <div className="w-7xl md:pr-10 md:pl-10 px-4 flex md:justify-center md:items-center md:flex-row flex-col items-center md:gap-6 gap-6">
          <div className="md:w-60 w-sm md:h-16 h-16 bg-bg-red text-red-500 rounded-lg md:p-4 p-4 flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-icons md:!text-3xl !text-2xl">leaderboard</span>
            <span className="md:text-xl text-lg font-semibold">Gamemodes</span>
          </div>
          <div className="md:w-60 w-sm md:h-16 h-16 bg-bg-gray text-neutral-500 rounded-lg md:p-4 p-4 flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-icons md:!text-3xl !text-2xl">account_circle</span>
            <span className="md:text-xl text-lg font-semibold">Your Stats</span>
          </div>
        </div>
      </section>

      <section className="w-7xl md:h-[500px] h-auto md:pr-10 md:pl-10 px-4 flex md:justify-between md:items-center md:flex-row flex-col items-center gap-6 py-12">
        <div className="md:w-sm w-sm md:h-100 h-80 bg-[#1F1F1F] rounded-3xl md:p-10 md:pl-6 p-6 flex flex-col justify-between">
          <div className="md:px-0 px-2">
            <h1 className="md:text-3xl text-2xl font-medium">Your Realm? Dont worry, we keep track.</h1>
            <p className="mt-3 text-neutral-500 md:text-lg text-base">Powered by the ArchMC Public API, this dashboard is able to give you an accurate insight into your stats.</p>
          </div>
          <img className="w-auto h-auto" src="/assets/svgs/home/player-lookup.svg" alt="Player Lookup" />
        </div>

        <div className="md:w-sm w-sm md:h-100 h-80 bg-[#1F1F1F] rounded-3xl md:p-10 md:pl-6 p-6 flex flex-col justify-between">
          <div className="md:px-0 px-2">
            <h1 className="md:text-3xl text-2xl font-medium">Own your game. Rise the leaderboards now.</h1>
            <p className="mt-3 text-neutral-500 md:text-lg text-base">Discover leaderboards and track statistics. Get competitive and earn your spot in the board, so grind now!</p>
          </div>
          <img className="w-auto h-auto" src="/assets/svgs/home/gamemode-opts.svg" alt="Player Lookup" />
        </div>

        <div className="md:w-sm w-sm md:h-100 h-80 bg-[#1F1F1F] rounded-3xl md:p-10 md:pl-6 p-6 flex flex-col justify-between">
          <div className="md:px-0 px-2">
            <h1 className="md:text-3xl text-2xl font-medium">The hustle-n-bustle of ArchMC Gamemodes.</h1>
            <p className="mt-3 text-neutral-500 md:text-lg text-base">Best clan? Who's teaming up? Arch Statistics has the answers - play more, search less.</p>
          </div>
          <img className="w-auto h-auto" src="/assets/svgs/home/arch-clan.svg" alt="Player Lookup" />
        </div>
      </section>

      <footer className="w-full md:h-[280px] h-auto bg-neutral-950 flex flex-col items-center overflow-hidden">
        <div className="w-full max-w-7xl md:h-[500px] h-auto md:px-10 px-4 flex items-center">
          <div className="w-full h-auto md:flex md:justify-between flex-col-reverse md:flex-row flex gap-6 md:gap-0 py-8 md:py-0">
            
            {/* Products - Last on mobile, first on desktop */}
            <div className="flex flex-col text-center md:text-left">
              <span className="font-semibold text-xl mb-2">Products</span>
              <a href="" className="text-neutral-400 text-lg leading-8">Home</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Guilds</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Economy</a>
            </div>
            
            {/* Gamemodes */}
            <div className="flex flex-col leading-7 text-center md:text-left">
              <span className="font-semibold text-xl mb-2">Gamemodes</span>
              <a href="" className="text-neutral-400 text-lg leading-8">Lifesteal</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Survival</a>
            </div>
            
            {/* Miscellaneous */}
            <div className="flex flex-col leading-7 text-center md:text-left">
              <span className="font-semibold text-xl mb-2">Miscellaneous</span>
              <a href="" className="text-neutral-400 text-lg leading-8">GitHub Repo</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Public API</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Support</a>
            </div>
            
            {/* Design by section */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 opacity-50 justify-center md:justify-start">
                <span className="text-xl font-semibold">Design by</span>
                <img className="w-10 h-6" src="/assets/svgs/shared/wafi.png" alt="Wafi" />
              </div>
              <p className="md:max-w-xs max-w-full text-balance mt-2 text-neutral-600 text-sm md:text-base">
                Not affiliated with Rule Your Own Game, Inc.
              </p>
            </div>
            
            {/* Logo - First on mobile (due to flex-col-reverse), last on desktop */}
            <img src="/assets/svgs/shared/wafidzn.png" alt="WafiDZN Logo" className="w-8 h-8 mx-auto md:mx-0" />
            
          </div>
        </div>
      </footer>
    </main>
  );
}