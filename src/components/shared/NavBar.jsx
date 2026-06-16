import {Menu} from 'lucide-react';
import Button from '../Button';
import logoImage from '../../assets/rent_and_ride_icon.jpeg';

export default function NavBar({ toggleSidebar, isAdminView, isUserView }) {
    return (
        <header className="bg-emerald/80 backdrop-blur-md dark:bg-on-background shadow-sm dark:bg-surface-container-low full-width top-0 sticky z-50">
            <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
                
                {/* --- LEFT SIDE: Clickable Brand --- */}
                <div className="flex items-center gap-4 -translate-x-5">
                {/* The Rent and Ride text is now the toggle button! */}
                <button 
                    onClick={toggleSidebar} 
                    
                    className="hover:opacity-80 transition-opacity duration-200 bg-transparent border-none cursor-pointer p-0 -ml-10">
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
                <div className="flex items-center gap-6">
                    {(isUserView || isAdminView) ? (
                        <>
                            {!isAdminView && (
                                <button className="text-secondary dark:text-secondary-fixed-dim hover:text-primary-container transition-colors duration-200 relative">
                                    <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_cart</span>
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-container text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
                                </button>
                            )}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-container text-white font-bold cursor-pointer hover:bg-inverse-primary transition-colors">
                                {isAdminView ? "A" : "U"}
                            </div>
                        </>
                    ) : (
                        <button className="hidden md:flex items-center justify-center px-6 py-2 bg-primary-container text-white font-label-md text-label-md uppercase rounded hover:bg-inverse-primary transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 transform duration-200">
                            Sign In
                        </button>
                    )}
                </div>

            </div>
        </header>
    );
}