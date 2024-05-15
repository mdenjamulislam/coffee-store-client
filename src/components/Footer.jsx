import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-footer-pattern bg-cover bg-center bg-no-repeat">
            <div className="container py-6 md:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-center lg:gap-20 pt-5 lg:pt-10">
                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <img src={logo} alt="" />
                            <h2 className="font-rancho text-xl font-bold text-primary md:text-3xl lg:text-4xl">Espresso Emporium</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero et possimus quos accusamus sit totam iste voluptatibus excepturi incidunt.</p>
                        <div className="flex items-center gap-3">
                            <Link>
                                <FaFacebookF className="text-xl text-primary hover:text-accent" />
                            </Link>
                            <Link>
                                <FaXTwitter className="text-xl text-primary hover:text-accent" />
                            </Link>
                            <Link>
                                <FaInstagram className="text-xl text-primary hover:text-accent" />
                            </Link>
                            <Link>
                                <FaLinkedinIn className="text-xl text-primary hover:text-accent" />
                            </Link>
                        </div>
                        <div className="space-y-3 pt-2">
                            <h3 className="font-rancho text-xl font-bold text-primary md:text-2xl">Get In Touch</h3>
                            <div className="space-y-2">
                                <p className="text-primary">Phone: +123 456 7890</p>
                                <p className="text-primary">Email: info@gmail.com</p>
                                <p className="text-primary">Address: 1234 Street Name, City Name, United States</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                        <h3 className="font-rancho text-xl font-bold text-primary md:text-3xl">Contact With Us</h3>
                        <form className="space-y-3">
                            <div className="space-y-2.5">
                                <input type="text" name="name" placeholder="Name" className="form-field" />
                            </div>
                            <div className="space-y-2.5">
                                <input type="email" name="email" placeholder="Email" className="form-field" />
                            </div>
                            <div className="space-y-2.5">
                                <textarea name="message" placeholder="Message" className="form-field h-20"></textarea>
                            </div>
                            <button className="btn--outline">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-footer-bottom bg-cover bg-center bg-no-repeat">
                <div className="container py-4 text-center">
                    <p className="font-rancho text-lg font-medium text-white">Copyright Espresso Emporium ! All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
