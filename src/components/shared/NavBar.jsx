import {Menu} from 'lucide-react';
import { useState } from 'react';
import Button from '../Button';
import logoImage from '../../assets/rent_and_ride_icon.jpeg';

export default function NavBar({ toggleSidebar, isAdminView, isUserView, setCurrentPage }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleSignOut = () => {
        localStorage.removeItem('token');
        setIsDropdownOpen(false);
        setCurrentPage('home');
    }

    return (
        <header className="bg-emerald/80 backdrop-blur-md dark:bg-on-background shadow-sm dark:bg-surface-container-low full-width top-0 sticky z-50">
            <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
                
                {/* --- LEFT SIDE: Clickable Brand --- */}
                <div className="flex items-center gap-4 -translate-x-5">

                    {/*Hamburger menu: only show if logged in */}
                    {(isAdminView || isUserView) && (
                        <button
                            onClick={toggleSidebar}
                            className="hover:opacity-80 transition-opacity p-2 ml-4 text-on-surface">
                                <Menu size={28} />
                            </button>
                    )}

                {/* The Rent and Ride is now the toggle button! */}
                <button 
                    onClick={() => {
                        if (isAdminView) setCurrentPage("admin");
                        else if (isUserView) setCurrentPage("user");
                        else setCurrentPage("home");
                    }}
                    
                    className={`hover:opacity-80 transition-opacity duration-200 bg-transparent border-none cursor-pointer p-0 ${!(isAdminView || isUserView) ? 'ml-6' : ' '}`}>
                        <img 
                            src={logoImage} /* Use the variable name from your import here! */
                            alt="Rent & Ride Logo" 
                            /* Cleaned up classes: removed absolute, added object-cover and rounded-md to make it look sharp */
                            className="w-14 h-14 object-cover rounded-md pointer-events-none" />
                </button>
                </div>

                {/* --- CENTER: Search (Hidden on Mobile) --- */}
                <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
                    <input 
                        className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-full border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant" 
                        placeholder="Search bikes, locations..." 
                        type="text" 
                    />
                </div>

                {/* --- RIGHT SIDE: Actions & Profile --- */}
                <div className="relative">
                    {(isAdminView || isUserView) ? (
                        <div>
                            {/* Profile Trigger Button */}
                            <button
                                onClick= {() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 p-1 pr-3 hover:bg-surface-container/50 rounded-full transition-colors border border-transparent hover:border-outline-variant/50">
                                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-lg">
                                        {isAdminView ? "A" : "U"}
                                    </div>
                                    <span className="material-symbols-outlined text-on-background text-[24px]">
                                        expand_more
                                    </span>
                                </button>

                            {/*Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-3 w-48 bg-surface-container-lowest border border-outline-variant/50 rounded-lg shadow-xl overflow-hidden z-50">

                                    {/*Dummy Profile Button */}
                                    <button
                                        onClick={() => {
                                            console.log("Dummy Profile Clicked");
                                            setIsDropdownOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-surface-container-low transition-colors text-on-background font-label-md">
                                            <span className="material-symbols-outlined text-[20px]">person</span>
                                            My Profile
                                    </button>

                                    {/*Sign Out button */}
                                    <button 
                                        onClick={handleSignOut}
                                        className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-surface-container/50 transition-colors text-error font-label-md border-t border-outline-variant/30">
                                            <span className="material-symbols-outlined text-[20px]">logout</span>
                                            Sign Out
                                        </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        //Public login button
                        <button onClick = {() => setCurrentPage('login')}
                            className="bg-primary text-on-primary px-5 py-2 rounded font-label-md shadow hover:opacity-90 transition-opacity">
                                Login / Sign Up
                            </button>
                    )}
                </div>

            </div>
        </header>
    );
}