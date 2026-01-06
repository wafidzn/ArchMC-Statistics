export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center">
      <section className="w-7xl h-[500px] md:h-[500px] min-h-[600px] flex flex-col items-center justify-center gap-12 px-4">
        <div className="gap-6 flex flex-col items-center justify-center text-center">
          <a href="#">
            <div className="md:w-55 md:h-14 w-48 h-12 bg-bg-orange text-orange-500 rounded-full flex items-center justify-center gap-2 cursor-pointer">
              <span className="opacity-50 font-bold md:text-lg text-base italic">Behind the Scenes</span>
              <span className="material-icons opacity-50 md:!text-2xl !text-xl">arrow_forward</span>
            </div>
          </a>
          <div className="text-center flex flex-col gap-4">
            <h1 className="font-black md:text-6xl text-6xl leading-tight">
              <span className="md:inline block">ArchMC</span>
              <span className="md:inline block"> Statistics</span>
            </h1>
            <p className="md:text-2xl text-md md:max-w-150 max-w-96 text-center text-medium text-neutral-400 text-balance">Designed for competition, check out all statistics related to the ArchMC Server here.</p>
          </div>
        </div>
        <div className="flex gap-3 md:flex-row flex-col justify-center items-center md:w-auto w-4/5 md:px-0">

          <div className="md:w-50 md:h-16 w-sm h-14 bg-bg-red text-red-500 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-icons md:!text-3xl !text-2xl">leaderboard</span>
            <span className="md:text-xl text-lg font-bold">Gamemodes</span>
          </div>
          <div className="md:w-50 md:h-16 w-sm h-14 bg-bg-gray text-neutral-500 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-icons md:!text-3xl !text-2xl">account_circle</span>
            <span className="md:text-xl text-lg font-bold">Your Stats</span>
          </div>

        </div>
      </section>

      <section className="w-7xl md:h-[500px] h-auto md:pr-10 md:pl-10 px-4 flex md:justify-between md:items-center md:flex-row flex-col items-center gap-6 py-12">
        <div className="md:w-sm w-sm md:h-100 h-80 bg-[#1F1F1F] rounded-3xl md:p-10 md:pl-6 p-6 flex flex-col justify-between">
          <div>
            <h1 className="md:text-3xl text-2xl font-bold">Your Realm? Dont worry, we keep track.</h1>
            <p className="mt-3 text-neutral-500 md:text-lg text-base">Powered by the ArchMC Public API, this dashboard is able to give you an accurate insight into your stats.</p>
          </div>
          <img className="w-auto h-auto" src="/assets/svgs/home/player-lookup.svg" alt="Player Lookup" />
        </div>

        <div className="md:w-sm w-sm md:h-100 h-80 bg-[#1F1F1F] rounded-3xl md:p-10 md:pl-6 p-6 flex flex-col justify-between">
          <div>
            <h1 className="md:text-3xl text-2xl font-bold">Own your game. Rise the leaderboards now.</h1>
            <p className="mt-3 text-neutral-500 md:text-lg text-base">Discover leaderboards and track statistics. Get competitive and earn your spot in the board, so grind now!</p>
          </div>
          <img className="w-auto h-auto" src="/assets/svgs/home/gamemode-opts.svg" alt="Player Lookup" />
        </div>

        <div className="md:w-sm w-sm md:h-100 h-80 bg-[#1F1F1F] rounded-3xl md:p-10 md:pl-6 p-6 flex flex-col justify-between">
          <div>
            <h1 className="md:text-3xl text-2xl font-bold">The hustle-n-bustle of ArchMC Gamemodes.</h1>
            <p className="mt-3 text-neutral-500 md:text-lg text-base">Best clan? Who's teaming up? Arch Statistics has the answers - play more, search less.</p>
          </div>
          <img className="w-auto h-auto" src="/assets/svgs/home/arch-clan.svg" alt="Player Lookup" />
        </div>
      </section>

      <footer className="w-full h-[280px] bg-neutral-950 flex flex-col items-center">
        <div className="w-7xl h-[500px] pr-10 pl-10 flex items-center">
          <div className="w-full h-auto flex justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-xl mb-2">Products</span>
              <a href="" className="text-neutral-400 text-lg leading-8">Home</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Guilds</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Economy</a>
            </div>
            <div className="flex flex-col leading-7">
              <span className="font-semibold text-xl mb-2">Gamemodes</span>
              <a href="" className="text-neutral-400 text-lg leading-8">Lifesteal</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Survival</a>
            </div>
            <div className="flex flex-col leading-7">
              <span className="font-semibold text-xl mb-2">Miscellaneous</span>
              <a href="" className="text-neutral-400 text-lg leading-8">GitHub Repo</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Public API</a>
              <a href="" className="text-neutral-400 text-lg leading-8">Support</a>
            </div>
            <div>
              <div className="flex items-center gap-2 opacity-50"><span className="text-xl font-semibold">Design by</span><img className="w-10 h-6" src="/assets/svgs/shared/wafi.png" alt="Wafi" /></div>
              <p className="max-w-50 text-balance mt-2 text-neutral-600">Not affiliated with Rule Your Own Game, Inc.</p>
            </div>
            <img src="/assets/svgs/shared/wafidzn.png" alt="WafiDZN Logo" className="w-8 h-8" />
          </div>
        </div>
      </footer>
    </main>
  );
}