
// import React, {useContext, useEffect, useRef, useState} from 'react';
// import './Main.css';
// import {assets} from "../../assets/assets.js";
// import {Context} from "../../context/Context.jsx";

// const Main = () => {
//     const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);
//     const resultRef = useRef(null);
//     const [rows, setRows] = useState(1);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const fileInputRef = useRef(null);

//     useEffect(() => {
//         const updateRows = () => {
//             if (window.innerWidth <= 600) {
//                 setRows(2);
//             } else {
//                 setRows(1);
//             }
//         };

//         updateRows();
//         window.addEventListener('resize', updateRows);
//         return () => window.removeEventListener('resize', updateRows);
//     }, []);

//     useEffect(() => {
//         if (resultRef.current) {
//             resultRef.current.scrollTop = resultRef.current.scrollHeight;
//         }
//     }, [resultData]);

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setSelectedImage(reader.result);
//                 setInput("What can you tell me about this image?");
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const triggerFileInput = () => {
//         fileInputRef.current.click();
//     };

//     const removeImage = () => {
//         setSelectedImage(null);
//         fileInputRef.current.value = "";
//     };

//     const handleSend = () => {
//         if (selectedImage) {
           
//             const imagePrompt = input + "\n\n[Note: I've uploaded an image but your current configuration doesn't support image analysis. This is a text-only response.]";
           
//             const originalInput = input;
            
//             setInput(imagePrompt);
            
//             setTimeout(() => {
                
//                 onSent();

//                 setInput(originalInput);
//             }, 0);
//         } else {
            
//             onSent();
//         }
//     };

//     return (
//         <main className="main">
//             <nav className="nav">
//                 <p>Gemini</p>
//                 <img src={assets.user_icon} alt=""/>
//             </nav>
//             <div className="main-container">

//                 {!showResult
//                     ? <>
//                         <div className="greet">
//                             <p><span>Hello</span></p>
//                             <p>How can I help you today?</p>
//                         </div>
//                         <div className="cards">
//                             <div className="card"
//                                  onClick={() => setInput("Suggest beautiful places to see on an upcoming road trip")}>
//                                 <p>Suggest beautiful places to see on an upcoming road trip</p>
//                                 <img src={assets.compass_icon} alt=""/>
//                             </div>
//                             <div className="card"
//                                  onClick={() => setInput("Briefly summarize this concept: urban planning")}>
//                                 <p>Briefly summarize this concept: urban planning</p>
//                                 <img src={assets.bulb_icon} alt=""/>
//                             </div>
//                             <div className="card"
//                                  onClick={() => setInput("Brainstorm team bonding activities for our work retreat")}>
//                                 <p>Brainstorm team bonding activities for our work retreat</p>
//                                 <img src={assets.message_icon} alt=""/>
//                             </div>
//                             <div className="card" onClick={() => setInput("Tell me about React js and React native")}>
//                                 <p>Tell me about React js and React native</p>
//                                 <img src={assets.code_icon} alt=""/>
//                             </div>
//                         </div>
//                     </>
//                     :
//                     <div className='result' ref={resultRef}>
//                         <div className="result-title">
//                             <img src={assets.user_icon} alt=""/>
//                             <p>{recentPrompt}</p>
//                             {selectedImage && (
//                                 <div className="prompt-image-container">
//                                     <img 
//                                         src={selectedImage} 
//                                         alt="Prompt Image" 
//                                         className="prompt-image" 
//                                     />
//                                 </div>
//                             )}
//                         </div>
//                         <div className="result-data">
//                             <img className="result-data-icon" src={assets.gemini_icon} alt=""/>
//                             {loading ?
//                                 <div className='loader'>
//                                     <hr/>
//                                     <hr/>
//                                     <hr/>
//                                 </div>
//                                 :
//                                 <p dangerouslySetInnerHTML={{__html: resultData}}></p>
//                             }
//                         </div>
//                     </div>
//                 }
//                 <div className="main-bottom">
//                     <div className="search-box">
//                         {selectedImage && (
//                             <div className="selected-image-container">
//                                 <img 
//                                     src={selectedImage} 
//                                     alt="Selected" 
//                                     className="selected-image" 
//                                 />
//                                 <button 
//                                     className="remove-image-btn" 
//                                     onClick={removeImage}
//                                 >
//                                     ✕
//                                 </button>
//                             </div>
//                         )}
//                         <textarea rows={rows} onChange={(e) => setInput(e.target.value)}
//                                   onKeyUp={(e) => {
//                                       if (e.key === 'Enter' && !e.shiftKey) {
//                                           e.preventDefault();
//                                           handleSend();
//                                       }
//                                   }}
//                                   value={input}
//                                   type="text"
//                                   placeholder={selectedImage ? "Ask about this image..." : "Enter a prompt here"}
//                         />
//                         <div className="icon-container">
//                             <input
//                                 type="file"
//                                 ref={fileInputRef}
//                                 onChange={handleImageUpload}
//                                 accept="image/*"
//                                 style={{ display: 'none' }}
//                             />
//                             <button onClick={triggerFileInput}>
//                                 <img src={assets.gallery_icon} alt="Upload image"/>
//                             </button>
//                             <button><img src={assets.mic_icon} alt=""/></button>
//                             <button type="submit" onClick={handleSend}>
//                                 <img src={assets.send_icon} alt=""/>
//                             </button>
//                         </div>
//                     </div>
//                     <p className="bottom-info">
//                         Gemini may display inaccurate info, including about people, so double-check its responses.
//                         <a href="#">Your privacy and Gemini Apps</a>
//                     </p>
//                 </div>
//             </div>
//         </main>
//     );
// }

// export default Main;

import React, {useContext, useEffect, useRef, useState} from 'react';
import './Main.css';
import {assets} from "../../assets/assets.js";
import {Context} from "../../context/Context.jsx";
import {useAuth} from "../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);
    const {currentUser, signOut} = useAuth();
    const navigate = useNavigate();
    const resultRef = useRef(null);
    const [rows, setRows] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
        const updateRows = () => {
            if (window.innerWidth <= 600) {
                setRows(2);
            } else {
                setRows(1);
            }
        };

        updateRows();
        window.addEventListener('resize', updateRows);
        return () => window.removeEventListener('resize', updateRows);
    }, []);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollTop = resultRef.current.scrollHeight;
        }
    }, [resultData]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
                // Automatically set a prompt suggestion for the image
                setInput("What can you tell me about this image?");
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const removeImage = () => {
        setSelectedImage(null);
        fileInputRef.current.value = "";
    };

    const handleLogout = async () => {
        try {
            await signOut();
            navigate('/login');
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    return (
        <main className="main">
            <nav className="nav">
                <p>Gemini</p>
                <div className="user-profile">
                    <div className="user-avatar" onClick={toggleUserMenu}>
                        {currentUser?.photoURL ? (
                            <img src={currentUser.photoURL} alt="User" />
                        ) : (
                            <div className="user-initial">
                                {currentUser?.displayName?.charAt(0) || currentUser?.email?.charAt(0) || 'U'}
                            </div>
                        )}
                    </div>
                    
                    {showUserMenu && (
                        <div className="user-menu">
                            <div className="user-info">
                                <p className="user-name">{currentUser?.displayName || 'User'}</p>
                                <p className="user-email">{currentUser?.email}</p>
                            </div>
                            <button className="logout-button" onClick={handleLogout}>
                                Sign out
                            </button>
                        </div>
                    )}
                </div>
            </nav>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, {currentUser?.displayName?.split(' ')[0] || 'User'}</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card"
                                 onClick={() => setInput("Suggest beautiful places to see on an upcoming road trip")}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt=""/>
                            </div>
                            <div className="card"
                                 onClick={() => setInput("Briefly summarize this concept: urban planning")}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt=""/>
                            </div>
                            <div className="card"
                                 onClick={() => setInput("Brainstorm team bonding activities for our work retreat")}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt=""/>
                            </div>
                            <div className="card" onClick={() => setInput("Tell me about React js and React native")}>
                                <p>Tell me about React js and React native</p>
                                <img src={assets.code_icon} alt=""/>
                            </div>
                        </div>
                    </>
                    :
                    <div className='result' ref={resultRef}>
                        <div className="result-title">
                            <img src={assets.user_icon} alt=""/>
                            <p>{recentPrompt}</p>
                            {selectedImage && (
                                <div className="prompt-image-container">
                                    <img 
                                        src={selectedImage} 
                                        alt="Prompt Image" 
                                        className="prompt-image" 
                                    />
                                </div>
                            )}
                        </div>
                        <div className="result-data">
                            <img className="result-data-icon" src={assets.gemini_icon} alt=""/>
                            {loading ?
                                <div className='loader'>
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                            }
                        </div>
                    </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        {selectedImage && (
                            <div className="selected-image-container">
                                <img 
                                    src={selectedImage} 
                                    alt="Selected" 
                                    className="selected-image" 
                                />
                                <button 
                                    className="remove-image-btn" 
                                    onClick={removeImage}
                                >
                                    ✕
                                </button>
                            </div>
                        )}
                        <textarea rows={rows} onChange={(e) => setInput(e.target.value)}
                                  onKeyUp={(e) => {
                                      if (e.key === 'Enter' && !e.shiftKey) {
                                          e.preventDefault();
                                          onSent();
                                      }
                                  }}
                                  value={input}
                                  type="text"
                                  placeholder={selectedImage ? "Ask about this image..." : "Enter a prompt here"}
                        />
                        <div className="icon-container">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                style={{ display: 'none' }}
                            />
                            <button onClick={triggerFileInput}>
                                <img src={assets.gallery_icon} alt="Upload image"/>
                            </button>
                            <button><img src={assets.mic_icon} alt=""/></button>
                            <button type="submit" onClick={() => onSent()}>
                                <img src={assets.send_icon} alt=""/>
                            </button>
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                        <a href="#">Your privacy and Gemini Apps</a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Main;