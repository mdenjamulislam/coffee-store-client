import { Link } from 'react-router-dom';
import loginBg from '../assets/login.png';

const Login = () => {
    return (
        <section className="section--padding">
            <div className="container grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <img src={loginBg} alt="" className="h-auto w-full object-cover lg:h-full" />
                </div>
                <div className="bg-light p-4 lg:p-16">
                    <h1 className="text-center font-rancho text-3xl font-bold text-primary mb-4">Login</h1>
                    <form className="space-y-4">
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
                        <button type="submit" className="btn--filled w-full">
                            Login
                        </button>
                        <p>Don't have any account. <Link to="/signup" className='text-primary hover:text-accent'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;