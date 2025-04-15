// // // src/components/Signup/Signup.jsx
// // import React, { useState } from 'react';
// // import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// // import { auth } from '../firebase.jsx';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './Signup.css';
// // import { assets } from "../../assets/assets.js";

// // const Signup = () => {
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [confirmPassword, setConfirmPassword] = useState('');
// //     const [error, setError] = useState('');
// //     const [loading, setLoading] = useState(false);
// //     const navigate = useNavigate();

// //     const handleSignup = async (e) => {
// //         e.preventDefault();
// //         setError('');
        
// //         // Validate password match
// //         if (password !== confirmPassword) {
// //             return setError('Passwords do not match');
// //         }
        
// //         // Validate password strength
// //         if (password.length < 6) {
// //             return setError('Password should be at least 6 characters long');
// //         }
        
// //         setLoading(true);
        
// //         try {
// //             // Create user with email and password
// //             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
// //             // Update user profile with display name
// //             await updateProfile(userCredential.user, {
// //                 displayName: name
// //             });
            
// //             navigate('/'); // Redirect to home page after successful signup
// //         } catch (error) {
// //             setError(error.message);
// //             console.error("Error signing up with email and password", error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="auth-container">
// //             <div className="auth-card">
// //                 <div className="auth-header">
// //                     <img src={assets.gemini_icon} alt="Logo" className="auth-logo" />
// //                     <h2>Create your account</h2>
// //                 </div>
                
// //                 {error && <div className="auth-error">{error}</div>}
                
// //                 <form onSubmit={handleSignup} className="auth-form">
// //                     <div className="form-group">
// //                         <label htmlFor="name">Full Name</label>
// //                         <input
// //                             type="text"
// //                             id="name"
// //                             value={name}
// //                             onChange={(e) => setName(e.target.value)}
// //                             required
// //                         />
// //                     </div>
                    
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
                    
// //                     <div className="form-group">
// //                         <label htmlFor="confirm-password">Confirm Password</label>
// //                         <input
// //                             type="password"
// //                             id="confirm-password"
// //                             value={confirmPassword}
// //                             onChange={(e) => setConfirmPassword(e.target.value)}
// //                             required
// //                         />
// //                     </div>
                    
// //                     <button 
// //                         type="submit" 
// //                         className="auth-button"
// //                         disabled={loading}
// //                     >
// //                         {loading ? 'Creating account...' : 'Sign Up'}
// //                     </button>
// //                 </form>
                
// //                 <div className="auth-links">
// //                     <p>
// //                         Already have an account? <Link to="/login">Sign In</Link>
// //                     </p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Signup;
// // src/components/Signup/Signup.jsx
// import React, { useState, useEffect } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from '../firebase.jsx';
// import { Link, useNavigate } from 'react-router-dom';
// import './Signup.css';
// // import { assets } from "../../assets/assets.js";

// const Signup = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [passwordStrength, setPasswordStrength] = useState('');
//     const navigate = useNavigate();

//     // Password strength checker
//     useEffect(() => {
//         if (!password) {
//             setPasswordStrength('');
//             return;
//         }

//         // Define password strength criteria
//         const hasMinLength = password.length >= 8;
//         const hasUpperCase = /[A-Z]/.test(password);
//         const hasLowerCase = /[a-z]/.test(password);
//         const hasNumbers = /\d/.test(password);
//         const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

//         // Calculate strength score
//         let score = 0;
//         if (hasMinLength) score++;
//         if (hasUpperCase) score++;
//         if (hasLowerCase) score++;
//         if (hasNumbers) score++;
//         if (hasSpecialChar) score++;

//         // Determine strength level
//         if (score === 0 || password.length < 6) {
//             setPasswordStrength('weak');
//         } else if (score <= 2) {
//             setPasswordStrength('medium');
//         } else if (score <= 4) {
//             setPasswordStrength('strong');
//         } else {
//             setPasswordStrength('very-strong');
//         }
//     }, [password]);

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         setError('');
        
//         // Validate password match
//         if (password !== confirmPassword) {
//             return setError('Passwords do not match');
//         }
        
//         // Validate password strength
//         if (password.length < 6) {
//             return setError('Password should be at least 6 characters long');
//         }
        
//         setLoading(true);
        
//         try {
//             // Create user with email and password
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
//             // Update user profile with display name
//             await updateProfile(userCredential.user, {
//                 displayName: name
//             });
            
//             navigate('/'); // Redirect to home page after successful signup
//         } catch (error) {
//             let errorMessage = "Failed to create account.";
//             if (error.code === 'auth/email-already-in-use') {
//                 errorMessage = "Email already in use. Please try a different email.";
//             } else if (error.code === 'auth/invalid-email') {
//                 errorMessage = "Invalid email format.";
//             } else if (error.code === 'auth/weak-password') {
//                 errorMessage = "Password is too weak. Please choose a stronger password.";
//             }
//             setError(errorMessage);
//             console.error("Error signing up with email and password", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const toggleConfirmPasswordVisibility = () => {
//         setShowConfirmPassword(!showConfirmPassword);
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-card">
//                 <div className="auth-header">
//                     <img src={assets.gemini_icon} alt="Logo" className="auth-logo" />
//                     <h2>Create your account</h2>
//                     <p className="auth-subtitle">Join Gemini to explore the future of AI</p>
//                 </div>
                
//                 {error && <div className="auth-error">{error}</div>}
                
//                 <form onSubmit={handleSignup} className="auth-form">
//                     <div className="form-group">
//                         <label htmlFor="name">Full Name</label>
//                         <div className="input-wrapper">
//                             <i className="input-icon user-icon"></i>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 placeholder="Enter your full name"
//                                 required
//                             />
//                         </div>
//                     </div>
                    
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
//                         <label htmlFor="password">Password</label>
//                         <div className="input-wrapper">
//                             <i className="input-icon password-icon"></i>
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 placeholder="Create a strong password"
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
                        
//                         {password && (
//                             <div className="password-strength">
//                                 <div className="password-progress">
//                                     <div className={`password-progress-bar ${passwordStrength}`}></div>
//                                 </div>
//                                 <div className="password-tips">
//                                     <div className="password-tip">
//                                         <i className={`password-tip-icon ${password.length >= 8 ? "check" : "uncheck"}`}></i>
//                                         <span>At least 8 characters</span>
//                                     </div>
//                                     <div className="password-tip">
//                                         <i className={`password-tip-icon ${/[A-Z]/.test(password) ? "check" : "uncheck"}`}></i>
//                                         <span>At least 1 uppercase letter</span>
//                                     </div>
//                                     <div className="password-tip">
//                                         <i className={`password-tip-icon ${/\d/.test(password) ? "check" : "uncheck"}`}></i>
//                                         <span>At least 1 number</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
                    
//                     <div className="form-group">
//                         <label htmlFor="confirm-password">Confirm Password</label>
//                         <div className="input-wrapper">
//                             <i className="input-icon password-icon"></i>
//                             <input
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 id="confirm-password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 placeholder="Confirm your password"
//                                 required
//                             />
//                             <button 
//                                 type="button" 
//                                 className="toggle-password"
//                                 onClick={toggleConfirmPasswordVisibility}
//                                 aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                             >
//                                 <i className={`visibility-icon ${showConfirmPassword ? "visible" : "hidden"}`}></i>
//                             </button>
//                         </div>
//                     </div>
                    
//                     <div className="terms-privacy">
//                         By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
//                     </div>
                    
//                     <button 
//                         type="submit" 
//                         className="auth-button"
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <>
//                                 <span className="spinner"></span>
//                                 <span>Creating account...</span>
//                             </>
//                         ) : (
//                             'Create account'
//                         )}
//                     </button>
//                 </form>
                
//                 <div className="auth-divider">
//                     <span>or</span>
//                 </div>
                
//                 <div className="social-login">
//                     <button className="social-button google">
//                         <i className="social-icon google-icon"></i>
//                         <span>Sign up with Google</span>
//                     </button>
//                 </div>
                
//                 <div className="auth-links">
//                     <p>
//                         Already have an account? <Link to="/login" className="signin-link">Sign in</Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;







// src/components/Signup/Signup.jsx
import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase.jsx';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
// Remove or comment out the assets import if it doesn't exist
// import { assets } from "../../assets/assets.js";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const navigate = useNavigate();

    // Password strength checker
    useEffect(() => {
        if (!password) {
            setPasswordStrength('');
            return;
        }

        // Define password strength criteria
        const hasMinLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

        // Calculate strength score
        let score = 0;
        if (hasMinLength) score++;
        if (hasUpperCase) score++;
        if (hasLowerCase) score++;
        if (hasNumbers) score++;
        if (hasSpecialChar) score++;

        // Determine strength level
        if (score === 0 || password.length < 6) {
            setPasswordStrength('weak');
        } else if (score <= 2) {
            setPasswordStrength('medium');
        } else if (score <= 4) {
            setPasswordStrength('strong');
        } else {
            setPasswordStrength('very-strong');
        }
    }, [password]);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        
        // Validate password match
        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }
        
        // Validate password strength
        if (password.length < 6) {
            return setError('Password should be at least 6 characters long');
        }
        
        setLoading(true);
        
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
            // Update user profile with display name
            await updateProfile(userCredential.user, {
                displayName: name
            });
            
            navigate('/'); // Redirect to home page after successful signup
        } catch (error) {
            let errorMessage = "Failed to create account.";
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = "Email already in use. Please try a different email.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "Invalid email format.";
            } else if (error.code === 'auth/weak-password') {
                errorMessage = "Password is too weak. Please choose a stronger password.";
            }
            setError(errorMessage);
            console.error("Error signing up with email and password", error);
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    {/* Replace the img tag with a div or use a local image */}
                    <div className="auth-logo">G</div>
                    <h2>Create your account</h2>
                    <p className="auth-subtitle">Join Gemini to explore the future of AI</p>
                </div>
                
                {error && <div className="auth-error">{error}</div>}
                
                <form onSubmit={handleSignup} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <div className="input-wrapper">
                            <i className="input-icon user-icon"></i>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                    </div>
                    
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
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <i className="input-icon password-icon"></i>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create a strong password"
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
                        
                        {password && (
                            <div className="password-strength">
                                <div className="password-progress">
                                    <div className={`password-progress-bar ${passwordStrength}`}></div>
                                </div>
                                <div className="password-tips">
                                    <div className="password-tip">
                                        <i className={`password-tip-icon ${password.length >= 8 ? "check" : "uncheck"}`}></i>
                                        <span>At least 8 characters</span>
                                    </div>
                                    <div className="password-tip">
                                        <i className={`password-tip-icon ${/[A-Z]/.test(password) ? "check" : "uncheck"}`}></i>
                                        <span>At least 1 uppercase letter</span>
                                    </div>
                                    <div className="password-tip">
                                        <i className={`password-tip-icon ${/\d/.test(password) ? "check" : "uncheck"}`}></i>
                                        <span>At least 1 number</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <div className="input-wrapper">
                            <i className="input-icon password-icon"></i>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                                required
                            />
                            <button 
                                type="button" 
                                className="toggle-password"
                                onClick={toggleConfirmPasswordVisibility}
                                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                            >
                                <i className={`visibility-icon ${showConfirmPassword ? "visible" : "hidden"}`}></i>
                            </button>
                        </div>
                    </div>
                    
                    <div className="terms-privacy">
                        By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner"></span>
                                <span>Creating account...</span>
                            </>
                        ) : (
                            'Create account'
                        )}
                    </button>
                </form>
                
                <div className="auth-divider">
                    <span>or</span>
                </div>
                
                <div className="social-login">
                    <button className="social-button google">
                        <i className="social-icon google-icon"></i>
                        <span>Sign up with Google</span>
                    </button>
                </div>
                
                <div className="auth-links">
                    <p>
                        Already have an account? <Link to="/login" className="signin-link">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;