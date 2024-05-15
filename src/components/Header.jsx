import logo from "../assets/logo.png";
import header_bg from "../assets/header-bg.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-header-pattern bg-cover bg-center bg-no-repeat">
            <div className="container flex items-center justify-center py-4 md:py-5">
                <Link to='/' className="flex items-center gap-3">
                    <img src={logo} alt="Coffee Store" className="w-auto h-12 md:h-20" />
                    <h1 className="font-rancho text-3xl font-semibold text-white md:text-4xl lg:text-7xl">
                    Espresso Emporium
                    </h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
