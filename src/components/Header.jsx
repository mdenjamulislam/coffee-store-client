import { useContext } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            console.log("Sign out successful");
          }).catch((error) => {
            console.log(error.message);
          });
    };

    const menuList = (
        <>
            <li>
                <Link to="/" className="font-sans text-base text-white hover:text-accent md:text-lg">
                    Home
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
                            <h1 className="font-rancho text-2xl font-semibold text-white md:text-4xl ">Espresso Emporium</h1>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{menuList}</ul>
                    </div>
                    <div className="navbar-end">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/addcoffee">Add Coffee</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogOut}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="space-x-3">
                                <Link to="/signup" className="font-sans text-base text-white hover:text-accent md:text-lg">
                                    Sign Up
                                </Link>
                                <Link to="/login" className="font-sans text-base text-white hover:text-accent md:text-lg">
                                    Login
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
