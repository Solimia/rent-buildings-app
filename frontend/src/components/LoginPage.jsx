import React, { useState } from "react";
import "./LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function LoginPage() {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => setIsActive(true);
    const handleLoginClick = () => setIsActive(false);

    return (
        <div className={`container ${isActive ? "active" : ""}`} id="container">
            {/* Sign Up Form */}
            <div className="form-container sign-up">
                <form>
                    <h1 className="h1">Create Account</h1>
                    <div class="social-icons">
                        <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>

                    <span></span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="button">Sign Up</button>
                </form>
            </div>

            {/* Sign In Form */}
            <div className="form-container sign-in">
                <form>
                    <h1 className="h1">Sign In</h1>


                    <span className="h1">or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="https://tenor.com/uk/view/кот-смеётся-ржёт-кот-смеётся-кот-смеётся-с-пальцем-gif-16106940659961028099">Forget Your Password?</a>
                    <button type="button">Sign In</button>
                </form>
            </div>

            {/* Toggle Container */}
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p> Enter your personal details to use all of site features </p>
                        <button
                            className="hidden"
                            id="login"
                            type="button"
                            onClick={handleLoginClick}
                        >
                            Sign In
                        </button>
                    </div>

                    <div className="toggle-panel toggle-right">
                        <h1>yo!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button
                            className="hidden"
                            id="register"
                            type="button"
                            onClick={handleRegisterClick}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
