import { Cart, List, Person, Search, TV } from "../../svg";


export default function Nav() {
  return (
    <header className="w-full py-3 px-10 flex justify-between items-center bg-[rgba(255,255,255,0.3)]">
        <div className="flex lg:gap-20 gap-10 items-center w-8/12">
            <h1 className="mb-0 hover:cursor-pointer font-medium uppercase flex items-center gap-2 text-3xl"><TV size={30} color={'#0aad0a'}/> ipdemp</h1>
            <div className="rounded-xl border border-gray-300 px-4 hidden md:flex items-center gap-3 w-full lg:w-6/12 hover:cursor-pointer">
                <Search width={15} height={15} color={'gray'}/>
                <div className="py-2">
                    <p className="mb-0 text-gray-500">Search...</p>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <button className="hover:cursor-pointer"><Cart size={25} color={'black'}/></button>
            <button className="hover:cursor-pointer"><Person size={25} color={'black'}/></button>
            <button className="hover:cursor-pointer block md:hidden"><Search width={25} height={25} color={'black'}/></button>
        </div>
    </header>
  )
}
