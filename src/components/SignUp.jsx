import { Link } from "react-router-dom";
import signinBg from "../assets/signin.png";

const SignUp = () => {
    return (
        <section className="section--padding">
            <div className="container grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <img src={signinBg} alt="" className="h-auto w-full object-cover lg:h-full" />
                </div>
                <div className="bg-light p-4 lg:p-16">
                    <h1 className="text-center font-rancho text-3xl font-bold text-primary mb-4">Sign Up</h1>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input type="text" id="name" name="name" className="form-field" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input type="email" id="email" name="email" className="form-field" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input type="password" id="password" name="password" className="form-field" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="form-field" />
                        </div>
                        <button type="submit" className="btn--filled w-full">
                            Sign Up
                        </button>
                        <p>Have an account. <Link to="/login" className='text-primary hover:text-accent'>Login</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
