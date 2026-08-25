import { useState } from "react";

export default function LoginPage({setCurrentPage}){

    //captures what the user type
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    //intercepts the form before the page refreshes
    const handleSubmit = async (e) => {
        e.preventDefault();

        const sanitizedEmail = email.trim().toLowerCase();
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({email, password})
            });

            const data = await response.json();

            if(response.ok) {
                //save token locally
                localStorage.setItem('token', data.token);

                //redirect the page to users dashboard (RBAC)
                setCurrentPage('admin');
            } else {
                alert(`❌ Login Failed: ${data.error}`);
            }
        } catch (err) {
            console.error("Network error: ", err);
            alert("❌ Could not connect to the server.");
        }
        // console.log("Attempting to log in with: ", {email, password});
    };

    return (
        //the wrapper
        <div className = "flex flex-col flex-1 items-center justify-center w-full px-8 min-h-[80vh]">

            {/* Login Card */}
            <div className = "w-full max-w-xl bg-surface-container-lowest px-8 py-8 rounded-lg shadow-[0_4px_20px_rgba(31,41,55,0.08)] border border-outline-variant/30 flex flex-col">
            {/* Header */}

            <div className = " text-center mb-8">
                <div className = "w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className = "material-symbols-outlined text-[32px]">lock</span>
                </div>
                <h1 className = "font-display-lg text-[32px] font-bold text-on-background leading-tight">Welcome back! </h1>
                <p className = "font-body-md text-secondary mt-2">Enter your credentials to access your account.</p>

            </div>

            {/* Form */}
            <form onSubmit = {handleSubmit} className="flex flex-col gap-5">

                {/*Email input */}
                <div>
                    <label className="block font-label-md text-secondary upeercase tracking-wider mb-2 text-sm">
                        Email Address
                    </label>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-outline text-[20px]">mail
                        </span>
                        <input
                            type="emai"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder = "john@example.com"
                            required
                            className ="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded text-on-surface font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                            />
                    </div>
                </div>

                {/* Password Input */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className = "block font-label-md text-secondary uppercase tracking-wider text-sm">
                            Password
                        </label>
                        <button type="button" className="text-primary font-label-sm hover:underline">
                            Forgot password?
                        </button>
                    </div>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-outline text-[20px]">
                        key
                        </span>
                        <input
                            type= {showPassword ? "text" : "password"}
                            value={password}
                            onChange= {(e) => setPassword(e.target.value)}
                            placeholder ="**********"
                            required
                            className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded text-on-surface font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                            />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className = "absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary hover:text-primary transition-colors flex items-center justify-center outline-none"
                            >
                                <span className= "material-symbols-outlined text-[20px]">
                                    {showPassword ? "visibility_off" : "visibility"}
                                </span>
                            </button>
                    </div>
                </div>

                {/*Submit Button */}
                <button
                    type="submit"
                    className = "w-full flex items-center justify-center gap-2 bg-primary-container text-white font-label-md uppercase px-4 py-3 mt-4 rounded hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(31, 41,55, 0.08)] hover:-translate-y-0.5">
                        Log In
                        <span className="material-symbols-outlined text-[20px]"> arrow_forwardh</span>
                    </button>
            </form>

            {/* Footer Link */}
            <div className = "mt-8 text-center border-t border-outline-variant/30 pt-6">
            <p className="font-body-md text-secondary">
                Don't have an account? {' '}
                <button className = "text-primary font-semibold hover:underline">
                    Sign up here
                </button>
            </p>
            </div>
         </div>
     </div>
    );
}