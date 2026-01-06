export default function Navigation() {
  return (
    <nav className="w-full h-20 border-b border-neutral-800 flex justify-center items-center">
      <div className="px-3.5 w-7xl h-full flex place-content-between items-center">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-4 items-center">
          <img className="w-10 h-auto" src="/favicon.ico" alt="ArchMC Logo"/>
          <div className="w-0.5 h-6 bg-neutral-700 mx-auto"></div> 
            <ul className="group list-style-none text-neutral-500 flex gap-3">
              <a href="#"><li className="hover:text-neutral-300 duration-200">Home</li></a>
              <a href="#"><li className="hover:text-neutral-300 duration-200">Gamemodes</li></a>
              <a href="#"><li className="hover:text-neutral-300 duration-200">Guilds</li></a>
              <a href="#"><li className="hover:text-neutral-300 duration-200">Economy</li></a>
            </ul>
        </div>

        {/* Mobile Layout - Logo */}
        <div className="md:hidden flex items-center">
          <img className="w-8 h-auto" src="/favicon.ico" alt="ArchMC Logo"/>
        </div>

        {/* Player Search - Desktop */}
        <button className="hidden md:flex w-64 h-14 bg-neutral-800 text-neutral-300 items-center justify-between px-3 py-3 rounded-lg hover:bg-[#2F2F2F] hover:text-white transition-colors cursor-pointer">
          <div className="flex items-center gap-1">
            <span className="material-icons !text-2xl">search</span>
            <span className="font-semibold">Player Stats</span>
          </div>
          <span className="material-icons !text-2xl">arrow_circle_right</span>
        </button>

        {/* Mobile Layout - Player Search (smaller, centered) */}
        <button className="md:hidden w-44 h-11 bg-neutral-800 text-neutral-300 flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-[#2F2F2F] hover:text-white transition-colors cursor-pointer">
          <div className="flex items-center gap-1">
            <span className="material-icons !text-lg">search</span>
            <span className="font-semibold text-sm">Player Stats</span>
          </div>
          <span className="material-icons !text-lg">arrow_circle_right</span>
        </button>

        {/* Mobile Layout - Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-neutral-300 hover:text-white transition-colors p-1.5">
            <span className="material-icons !text-2xl">menu</span>
          </button>
        </div>

      </div>
    </nav>
  );
}