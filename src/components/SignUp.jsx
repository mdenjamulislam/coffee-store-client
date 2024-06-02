import { Link } from "react-router-dom";
import signinBg from "../assets/signin.png";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const [passwordNotMatch, setPasswordNotMatch] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setPasswordNotMatch(true);
            return;
        }

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                const createAt = result.user?.metadata?.creationTime; // ? this is optional chaining operator to prevent error if user is null or undefined or metadata is null or undefined
                const lastSignInTime = result.user?.metadata?.lastSignInTime;
                const user = { name, email, createAt, lastSignInTime };
                fetch("https://coffee-store-server-one-hazel.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Account Created Successfully!",
                                text: "You can login now!",
                                footer: '<a href="/login">Login Now</a>',
                            });
                        }
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
    return (
        <section className="section--padding">
            <div className="container grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <img src={signinBg} alt="" className="h-auto w-full object-cover lg:h-full" />
                </div>
                <div className="bg-light p-4 lg:p-16">
                    <h1 className="mb-4 text-center font-rancho text-3xl font-bold text-primary">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input type="text" id="name" name="name" placeholder="Name" className="form-field" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input type="email" id="email" name="email" placeholder="Email" className="form-field" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input type="password" id="password" name="password" placeholder="Password" className="form-field" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className="form-field" />
                            <label htmlFor="confirmPassword" className="text-xs italic text-accent">
                                {passwordNotMatch && <span className="text-red-500">Password does not match</span>}
                            </label>
                        </div>
                        <button type="submit" className="btn--filled w-full">
                            Sign Up
                        </button>
                        <p>
                            Have an account.{" "}
                            <Link to="/login" className="text-primary hover:text-accent">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
