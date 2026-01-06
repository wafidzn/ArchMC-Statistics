export default function Navigation() {
  return (
    <nav className="w-full h-20 border-b border-neutral-800 flex justify-center items-center">
      <div className="pl-10 pr-10 w-7xl h-full flex place-content-between items-center">
        <div className="flex gap-4 items-center">
          <img className="w-10 h-auto" src="/favicon.ico" alt="ArchMC Logo"/>
          <div className="w-0.5 h-6 bg-neutral-700 mx-auto"></div> 
            <ul className="group list-style-none text-neutral-500 flex gap-3">
              <a href="#"><li className="hover:text-neutral-300 duration-200">Home</li></a>
              <a href="#"><li className="hover:text-neutral-300 duration-200">Gamemodes</li></a>
              <a href="#"><li className="hover:text-neutral-300 duration-200">Guilds</li></a>
              <a href="#"><li className="hover:text-neutral-300 duration-200">Economy</li></a>
            </ul>
        </div>

        <button className="w-64 h-14 bg-neutral-800 text-neutral-300 flex items-center justify-between px-3 py-3 rounded-lg hover:bg-[#2F2F2F] hover:text-white transition-colors cursor-pointer">
          <div className="flex items-center gap-1">
            <span className="material-icons !text-2xl">search</span>
            <span className="font-semibold">Player Stats</span>
          </div>
          <span className="material-icons !text-2xl">arrow_circle_right</span>
        </button>

      </div>
    </nav>
  );
}