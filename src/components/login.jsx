// // // src/components/Login/Login.jsx
// // import React, { useState } from 'react';
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from '../firebase.jsx';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './Login.css';
// // import { assets } from "../../assets/assets.js";

// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');
// //     const [loading, setLoading] = useState(false);
// //     const navigate = useNavigate();

// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         setError('');
// //         setLoading(true);
        
// //         try {
// //             await signInWithEmailAndPassword(auth, email, password);
// //             navigate('/'); // Redirect to home page after successful login
// //         } catch (error) {
// //             setError(error.message);
// //             console.error("Error signing in with email and password", error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="auth-container">
// //             <div className="auth-card">
// //                 <div className="auth-header">
// //                     <img src={assets.gemini_icon} alt="Logo" className="auth-logo" />
// //                     <h2>Sign in to Gemini</h2>
// //                 </div>
                
// //                 {error && <div className="auth-error">{error}</div>}
                
// //                 <form onSubmit={handleLogin} className="auth-form">
// //                     <div className="form-group">
// //                         <label htmlFor="email">Email</label>
// //                         <input
// //                             type="email"
// //                             id="email"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                             required
// //                         />
// //                     </div>
                    
// //                     <div className="form-group">
// //                         <label htmlFor="password">Password</label>
// //                         <input
// //                             type="password"
// //                             id="password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                             required
// //                         />
// //                     </div>
                    
// //                     <button 
// //                         type="submit" 
// //                         className="auth-button"
// //                         disabled={loading}
// //                     >
// //                         {loading ? 'Signing in...' : 'Sign In'}
// //                     </button>
// //                 </form>
                
// //                 <div className="auth-links">
// //                     <Link to="/forgot-password">Forgot Password?</Link>
// //                     <p>
// //                         Don't have an account? <Link to="/signup">Sign Up</Link>
// //                     </p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;




// // src/components/Login/Login.jsx
// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase.jsx';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// // import { assets } from "../../assets/assets.js";

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');
//         setLoading(true);
        
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             navigate('/'); // Redirect to home page after successful login
//         } catch (error) {
//             let errorMessage = "Failed to sign in. Please check your credentials.";
//             if (error.code === 'auth/user-not-found') {
//                 errorMessage = "No account found with this email.";
//             } else if (error.code === 'auth/wrong-password') {
//                 errorMessage = "Incorrect password. Please try again.";
//             } else if (error.code === 'auth/invalid-email') {
//                 errorMessage = "Invalid email format.";
//             } else if (error.code === 'auth/too-many-requests') {
//                 errorMessage = "Too many failed attempts. Please try again later.";
//             }
//             setError(errorMessage);
//             console.error("Error signing in with email and password", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-card">
//                 <div className="auth-header">
//                     <img src={assets.gemini_icon} alt="Logo" className="auth-logo" />
//                     <h2>Welcome back</h2>
//                     <p className="auth-subtitle">Sign in to continue to Gemini</p>
//                 </div>
                
//                 {error && <div className="auth-error">{error}</div>}
                
//                 <form onSubmit={handleLogin} className="auth-form">
//                     <div className="form-group">
//                         <label htmlFor="email">Email address</label>
//                         <div className="input-wrapper">
//                             <i className="input-icon email-icon"></i>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="your@email.com"
//                                 required
//                             />
//                         </div>
//                     </div>
                    
//                     <div className="form-group">
//                         <div className="password-header">
//                             <label htmlFor="password">Password</label>
//                             <Link to="/forgot-password" className="forgot-password">Forgot?</Link>
//                         </div>
//                         <div className="input-wrapper">
//                             <i className="input-icon password-icon"></i>
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 placeholder="Enter your password"
//                                 required
//                             />
//                             <button 
//                                 type="button" 
//                                 className="toggle-password"
//                                 onClick={togglePasswordVisibility}
//                                 aria-label={showPassword ? "Hide password" : "Show password"}
//                             >
//                                 <i className={`visibility-icon ${showPassword ? "visible" : "hidden"}`}></i>
//                             </button>
//                         </div>
//                     </div>
                    
//                     <button
//                         type="submit"
//                         className="auth-button"
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <>
//                                 <span className="spinner"></span>
//                                 <span>Signing in...</span>
//                             </>
//                         ) : (
//                             'Sign In'
//                         )}
//                     </button>
//                 </form>
                
//                 <div className="auth-divider">
//                     <span>or</span>
//                 </div>
                
//                 <div className="social-login">
//                     <button className="social-button google">
//                         <i className="social-icon google-icon"></i>
//                         <span>Continue with Google</span>
//                     </button>
//                 </div>
                
//                 <div className="auth-links">
//                     <p>
//                         Don't have an account? <Link to="/signup" className="signup-link">Create one</Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;



// src/components/Login/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.jsx';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
// Remove or comment out the assets import if it doesn't exist
// import { assets } from "../../assets/assets.js";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/'); // Redirect to home page after successful login
        } catch (error) {
            let errorMessage = "Failed to sign in. Please check your credentials.";
            if (error.code === 'auth/user-not-found') {
                errorMessage = "No account found with this email.";
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = "Incorrect password. Please try again.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "Invalid email format.";
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = "Too many failed attempts. Please try again later.";
            }
            setError(errorMessage);
            console.error("Error signing in with email and password", error);
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    {/* Replace the img tag with a div or use a local image */}
                    <div className="auth-logo">G</div>
                    <h2>Welcome back</h2>
                    <p className="auth-subtitle">Sign in to continue to Gemini</p>
                </div>
                
                {error && <div className="auth-error">{error}</div>}
                
                <form onSubmit={handleLogin} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <div className="input-wrapper">
                            <i className="input-icon email-icon"></i>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <div className="password-header">
                            <label htmlFor="password">Password</label>
                            <Link to="/forgot-password" className="forgot-password">Forgot?</Link>
                        </div>
                        <div className="input-wrapper">
                            <i className="input-icon password-icon"></i>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                            <button 
                                type="button" 
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                <i className={`visibility-icon ${showPassword ? "visible" : "hidden"}`}></i>
                            </button>
                        </div>
                    </div>
                    
                    <button
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner"></span>
                                <span>Signing in...</span>
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
                
                <div className="auth-divider">
                    <span>or</span>
                </div>
                
                <div className="social-login">
                    <button className="social-button google">
                        <i className="social-icon google-icon"></i>
                        <span>Continue with Google</span>
                    </button>
                </div>
                
                <div className="auth-links">
                    <p>
                        Don't have an account? <Link to="/signup" className="signup-link">Create one</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;