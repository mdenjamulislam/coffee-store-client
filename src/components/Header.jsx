import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    const menuList = (
        <>
            <li>
                <Link to="/" className="font-sans text-base text-white hover:text-accent md:text-lg">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/signup" className="font-sans text-base text-white hover:text-accent md:text-lg">
                    Sign Up
                </Link>
            </li>
            <li>
                <Link to="/login" className="font-sans text-base text-white hover:text-accent md:text-lg">
                    Login
                </Link>
            </li>
            <li>
                <Link to="/users" className="font-sans text-base text-white hover:text-accent md:text-lg">
                    Users
                </Link>
            </li>
        </>
    );
    return (
        <header className="bg-header-pattern bg-cover bg-center bg-no-repeat">
            <div className="container py-4 md:py-5">
                <nav className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                                {menuList}
                            </ul>
                        </div>
                        <Link to="/" className="flex items-center gap-3">
                            <img src={logo} alt="Coffee Store" className="h-12 w-auto md:h-20" />
                            <h1 className="font-rancho text-3xl font-semibold text-white md:text-4xl lg:text-7xl">Espresso Emporium</h1>
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1">{menuList}</ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
