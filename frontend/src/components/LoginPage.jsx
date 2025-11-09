import React, { useState } from "react";
import "./LoginPage.css";

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
                    <div className="social-icons">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                            <img src="/components/assets/img/facebook.png" alt="Facebook" />
                        </a>

                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                            <img src="./components/assets/img/instagram.png" alt="Instagram" />
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                            <img src="/assets/img/social/github.png" alt="GitHub" />
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                            <img src="/assets/img/social/linkedin.png" alt="LinkedIn" />
                        </a>
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
                    <h1>Sign In</h1>


                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button type="button">Sign In</button>
                </form>
            </div>

            {/* Toggle Container */}
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p></p>
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
        </div>
    );
}
