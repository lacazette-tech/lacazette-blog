import Link from "next/link"
import SearchBar from "./SearchBar"
import AuthButton from "./AuthButton"


export default async function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg h-20">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 font-bold text-2xl mt-[5] ml-[5]">

                    <div className="flex gap-3 hover:text-cyan-300">
                        <img src="./Icon.jpg" className="h-[30] w-[30] rounded-4xl" />
                        <Link href="/">lacazatte</Link>
                    </div>


                    <nav className="flex flex-wrap justify-center gap-3 md:gap-6 md:text-base text-sm">
                        <Link href="/" className="hover:opacity-50 transition:">Visions</Link>

                        <Link href="/" className="hover:opacity-50 transition:">innovations</Link>

                        <Link href="/" className="hover:opacity-50 transition:">Updates</Link>
                    </nav>

                    <div className="flex items-center gap-3">
                       <SearchBar />
                       <AuthButton/> 
                    </div>

                </div>
            </div>
        </header>
    )
}