import logoImage from "../../assets/vg-logo.png";
import searchImage from "../../assets/search.svg";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between items-center py-3">
                <Link to="/">
                    <img className="h-20" src={logoImage} alt="logo" />
                </Link>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
                    <Search />
                    <img className="inline h-4 cursor-pointer" src={searchImage} alt="Search" />
                </div>
            </div>
        </nav>
    )
}